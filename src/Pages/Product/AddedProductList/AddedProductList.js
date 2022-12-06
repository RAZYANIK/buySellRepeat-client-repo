import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddedProductList = () => {
    const { user } = useContext(AuthContext);

    const url = `https://assignment-12-server-omega.vercel.app/product/all`;

    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            refetch();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h3 className="text-3xl my-10 mx-5">All Products</h3>
            <div className="">
                <div className='grid grid-cols-3 gap-5 mx-10'>
                    {bookings &&
                        bookings?.map((booking, i) => <tr key={booking._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={booking.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold mb-4">{booking.name}</h2>
                                    <p className='text-error font-bold'>Original Price: {booking.OriginalPrice}</p>
                                    <p className='text-success font-semibold'>Resale Price: {booking.ResalePrice}</p>
                                    <p className='font-semibold'>Used since: {booking.yearOfUse} </p>
                                    {/* <p className='font-semibold'>Location: {postTime}</p> */}
                                    <p className='font-semibold'>Phone: {booking.phone}</p>
                                    <p className='font-semibold '>Location: {booking.meetingPlace}</p>
                                    {/* <PrimaryButton>Book Now</PrimaryButton> */}
                                    {/* <div className="badge badge-error gap-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Report to Admin
                                    </div> */}
                                    {/* <label
                                        htmlFor="booking-modal"
                                        className="btn mt-2 bg-gradient-to-r from-green-800 to-green-400 text-black"
                                    // onClick={() => setBooking(product)}
                                    >Book Now</label> */}
                                </div>
                            </div>

                        </tr>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddedProductList;