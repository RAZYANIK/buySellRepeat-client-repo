import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';


const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-omega.vercel.app/product?email=${user?.email}`);
            const data = await res.json();
            refetch();
            return data;
        }
    });

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review?');
        if (proceed) {
            fetch(`https://assignment-12-server-omega.vercel.app/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete is Successful')
                        // const remaining = review.filter(odr => odr._id !== id);
                        // setReview(remaining);
                    }
                })
        }
    }
    const handleAdvertisement = id => {
        fetch(`https://assignment-12-server-omega.vercel.app/product/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('ad added successfully.')

                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl my-5">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Images</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>status</th>
                            <th>Show ad</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={user.image} alt='product' />
                                    </div>
                                </div>

                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.category}</td>
                                <td>{user.ResalePrice}</td>
                                <td>{(user.OriginalPrice < 500) ? <p className='text-error font-bold'>Sold</p> : <p className='text-success font-bold'>Available</p>}</td>
                                <td>{(user?.ad !== 'advertised') ? <button onClick={() => handleAdvertisement(user._id)} className='btn btn-xs btn-info'>Advertise</button> : <p className='font-bold text-success'>Already Advertised</p>}</td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-error'>X</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;