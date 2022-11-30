// import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate('/');
        // navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log('registered', user);
                // setLoginUserEmail(data.email);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 border-2 border-success ' >
                <h1 className='text-3xl font-bold text-center text-black'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input border-2 border-success w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className="input border-2 border-success w-full max-w-xs" />
                        {errors.password && <p className='text-error' >{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>

                    <input className='btn btn-success text-black w-full' value='Login' type="submit" />
                    <div>
                        {
                            loginError && <p className='text-error'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='mt-2'>New to Site? <Link className='text-orange-600' to='/signup'>Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With google</button>

            </div>
        </div>
    );
};

export default Login;