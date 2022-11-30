import React from 'react';


const Product = ({ product, setBooking }) => {
    const { name, location, Img, OriginalPrice, ResalePrice, yearOfUse, sellerName } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold mb-4">{name}</h2>
                    <p className='text-error font-bold'>Original Price: {OriginalPrice}</p>
                    <p className='text-success font-semibold'>Resale Price: {ResalePrice}</p>
                    <p className='font-semibold'>Used For: {yearOfUse} Year</p>
                    {/* <p className='font-semibold'>Location: {postTime}</p> */}
                    <p className='font-semibold'>Seller Name: {sellerName}</p>
                    <p className='font-semibold '>Location: {location}</p>
                    {/* <PrimaryButton>Book Now</PrimaryButton> */}
                    <div className="badge badge-error gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        Report to Admin
                    </div>
                    <label
                        htmlFor="booking-modal"
                        className="btn mt-2 bg-gradient-to-r from-green-800 to-green-400 text-black"
                        onClick={() => setBooking(product)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;