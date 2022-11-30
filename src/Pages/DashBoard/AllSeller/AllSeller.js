import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller');
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
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
    const handleVerification = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verification successful.')
                    refetch();
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h2 className="text-3xl my-5">All Seller</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Verification</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{(user?.seller !== 'verified') ? <button onClick={() => handleVerification(user._id)} className='btn btn-xs btn-success'>Make Verified</button> : <button className='btn btn-xs btn-info'>verified</button>}</td>
                                    <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-error'>X</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;