import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertisement from '../../AdvertiseMent/Advertisement';
import Donation from '../../Donation/Donation';
import ProductList from '../../Product/ProductList';
import Banner from '../Banner/Banner';

const Home = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/product');
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
            <ProductList></ProductList>
            <Donation></Donation>
        </div>
    );
};

export default Home;