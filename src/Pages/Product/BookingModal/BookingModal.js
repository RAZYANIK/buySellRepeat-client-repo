import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { name, ResalePrice, Img } = booking;
    const { user } = useContext(AuthContext);

    // const { name } = booking;
    // const [user, setUser] = useState({});

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
            Product: name,
            Customer: userName,
            meetingPlace,
            email,
            phone,
            Img
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
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
                    setBooking(null);
                    toast.success('Booking Confirmed');

                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (

        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="sellerName" type="text" defaultValue={user?.displayName} disabled placeholder='Your Name' className='input w-full' />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder='Email' className='input w-full' />
                        <input name="name" type="text" defaultValue={name} disabled placeholder='Product Name' className='input w-full' />
                        <input name="resalePrice" type="text" Value={ResalePrice} disabled placeholder='Price' className='input w-full' />
                        <input name="phone" type="text" placeholder='Phone Number' className='input w-full' />
                        <input name="meetingPlace" type="text" placeholder='Meeting Place' className='input w-full' />
                        <br />
                        <input className='btn bg-gradient-to-r from-green-800 to-green-400 text-black w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;