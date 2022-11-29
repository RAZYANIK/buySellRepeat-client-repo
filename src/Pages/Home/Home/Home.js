import React from 'react';
import Advertisement from '../../AdvertiseMent/Advertisement';
import Donation from '../../Donation/Donation';
import ProductList from '../../Product/ProductList';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <ProductList></ProductList>
            <Donation></Donation>
        </div>
    );
};

export default Home;