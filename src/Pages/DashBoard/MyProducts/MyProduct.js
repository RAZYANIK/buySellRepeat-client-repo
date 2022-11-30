import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const MyProduct = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/product');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/product/${id}`, {
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
        fetch(`http://localhost:5000/product/admin/${id}`, {
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

    return (
        <div>
            <h2 className="text-3xl my-5">My ProDucts</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Images</th>
                            <th>Name</th>
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