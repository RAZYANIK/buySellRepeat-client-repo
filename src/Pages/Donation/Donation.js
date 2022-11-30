import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import img from '../../assets/images/donation.jpg'
const Donation = () => {
    return (
        <div className="card lg:card-side bg-base-100  mt-10 h-[576px] w-3/4 mx-auto">
            <figure className='w-1/2'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body w-1/2 my-auto grid sm:grid-cols-2 lg:grid-cols-1 ">
                <h2 className="card-title text-4xl mx-5">Donate your items</h2>
                <p className='mx-5'>Give items a new lease of life.
                    We reuse over 71,000 tonnes of donations a year and prevent 135,000 tonnes of CO2 being released into the atmosphere. </p>
                <div className="card-actions justify-start mt-5 mx-5">
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Donation;