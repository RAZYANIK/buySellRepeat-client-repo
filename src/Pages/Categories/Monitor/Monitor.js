import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Monitor = () => {
    const { user } = useContext(AuthContext);

    const url = `https://assignment-12-server-omega.vercel.app/product/monitor`;

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
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.sellerName.value;
        const email = form.email?.value;
        const resalePrice = form.resalePrice?.value;
        const phone = form.phone.value;
        const meetingPlace = form.meetingPlace?.value;

        const booking = {
            resalePrice,

            Customer: userName,
            meetingPlace,
            email,
            phone,

        }
        console.log(booking)
        fetch('https://assignment-12-server-omega.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking Confirmed');

                }
                else {
                    toast.error(data.message)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h3 className="text-3xl my-10 mx-5">Mouse Collection</h3>
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
                                    <div className="badge badge-error gap-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Report to Admin
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="booking-modal"
                                            className="btn mt-2 bg-gradient-to-r from-green-800 to-green-400 text-black"
                                        // onClick={() => setBooking(product)}
                                        >Book Now</label>
                                        <div>
                                            <input type="checkbox" id="booking-modal" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box relative">
                                                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                    <h3 className="text-lg font-bold"><h1>Monitor</h1></h3>
                                                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                                                        <input name="sellerName" type="text" defaultValue={user?.displayName} disabled placeholder='Your Name' className='input w-full' />
                                                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder='Email' className='input w-full' />
                                                        <input name="name" type="text" placeholder='Product Name' className='input w-full' />
                                                        <input name="resalePrice" type="text" placeholder='Price' className='input w-full' />
                                                        <input name="phone" type="text" placeholder='Phone Number' className='input w-full' />
                                                        <input name="meetingPlace" type="text" placeholder='Meeting Place' className='input w-full' />
                                                        <br />
                                                        <input className='btn bg-gradient-to-r from-green-800 to-green-400 text-black w-full' type="submit" value="Submit" />
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tr>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Monitor;