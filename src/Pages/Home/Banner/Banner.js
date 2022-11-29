import React from 'react';
import PrimaryButton from '../../../components/Button/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div style={{
                background: 'url(https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651&width=1024)',
                height: '700px',
                marginTop: '30px',
                fontSize: '18px',
                backgroundSize: 'cover',

            }} className="hero py-32">
                <div className="hero-content">
                    <div>
                        <h1 className="text-5xl font-bold text-white">Give your unused items a new life</h1>
                        <p className="py-6 text-white">BuySellRepeat is more than just a shopping destination, it's a vibrant community powered by thousand of sellers who not only sell their unused items, but also curate looks for their shoppers, creating one of the most connected shopping experiences in the world. Join us!</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;