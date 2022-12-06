import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Advertisement from '../../AdvertiseMent/Advertisement';
import Donation from '../../Donation/Donation';
import BookingModal from '../../Product/BookingModal/BookingModal';
import ProductList from '../../Product/ProductList';

import ProductLayout from '../../productsLayout/ProductLayout';
import Banner from '../Banner/Banner';


const Home = () => {
    const [booking, setBooking] = useState(null);
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-omega.vercel.app/product');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <Banner></Banner>
            <div className='flex flex-row-reverse gap-5'>
                {
                    users.map(user => <Advertisement
                        key={user.id}
                        user={user}
                    ></Advertisement>)
                }
            </div>
            <div><h1 className='text-left font-bold text-2xl my-10 text-white'>Our Products</h1></div>
            {/* <ProductList></ProductList> */}
            <ProductLayout></ProductLayout>
            <Donation></Donation>
            {booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>}
        </div>
    );
};

export default Home;