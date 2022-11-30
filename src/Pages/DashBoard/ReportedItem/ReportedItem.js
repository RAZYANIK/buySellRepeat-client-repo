import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const ReportedItem = () => {
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reportedItems/${id}`, {
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

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedItems');
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h2 className="text-3xl my-5">Reported Items by Buyers</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product image</th>
                                <th>Product</th>
                                <th>Seller Name</th>
                                <th>phone</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={user.Img} alt='product' />
                                        </div>
                                    </div></td>
                                    <td>{user.name}</td>
                                    <td>{user.sellerName}</td>
                                    <td>{user.phone}</td>
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

export default ReportedItem;