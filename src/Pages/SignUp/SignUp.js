import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const [createUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createUserEmail);

    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }


    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle(GoogleAuthProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log('registered', user);
    //             saveUser(user.displayName, user.email)
    //             navigate(from, { replace: true });

    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2 border-success bg-green-600' >
                <h1 className='text-3xl text-center font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input border-2 border-success w-full max-w-xs" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
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
                                minLength: { value: 6, message: 'Password must be 6 characters of longer' },
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            className="input border-2 border-success w-full max-w-xs" />
                        {errors.password && <p className='text-error' >{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-outline btn-accent text-black w-full mt-5' value='Signup' type="submit" />
                    {
                        signUpError && <p className='text-error'>{signUpError}</p>
                    }
                </form>
                <p className='mt-2'>Already have an account? <Link className='text-white' to='/login'>Login</Link></p>
                {/* <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With google</button> */}
            </div>
        </div>
    );
};

export default SignUp;