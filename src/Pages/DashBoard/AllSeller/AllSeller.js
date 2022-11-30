import React from 'react';

const AllSeller = () => {
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
                                <th>Phone</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-success'>Make Verified</button>}</td>
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        } */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;