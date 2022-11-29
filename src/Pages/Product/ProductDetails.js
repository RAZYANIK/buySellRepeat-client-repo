import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Product from './Product';

const ProductDetails = () => {
    const { category_Name, category_img, product } = useLoaderData();
    const [booking, setBooking] = useState(null);
    return (
        <div>
            <div className="card w-3/4 mx-auto ">
                <h1 className=' my-10 font-bold text-center stat-value text-red-500'>We Have different Used Computer Products</h1>
                <figure className="px-10 pt-5 ">
                    <img src={category_img} alt="Shoes" className="rounded-xl w-3/4" />
                </figure>
            </div>
            <div className="mx-72 px-10 ">
                <div className="stat mt-20">
                    <div className="stat-value text-yellow-600">.  .  . We have these Used {category_Name} Products  . . .</div>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
                {
                    product.map((product) => (
                        <Product key={product._id} product={product} setBooking={setBooking} ></Product>
                    ))
                }
            </div>
            {booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>}
        </div>
    );
};

export default ProductDetails;