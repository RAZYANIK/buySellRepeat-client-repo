import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
// import toast from 'react-hot-toast';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ResalePrice = form.ResalePrice.value;
        const image = form.image.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const meetingPlace = form.location.value;
        const category = form.category_Name.value;
        const OriginalPrice = form.OriginalPrice.value;
        const yearOfUse = form.yearOfUse.value;

        const booking = {
            email: user.email,
            image,
            ResalePrice,
            condition,
            name,
            meetingPlace,
            category,
            phone,
            OriginalPrice,
            yearOfUse
        }
        console.log(booking)
        fetch('https://assignment-12-server-omega.vercel.app/product', {
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
                    form.reset();
                    toast.success('product added successfully');
                    navigate('/dashboard/myproduct');
                }
                else {
                    toast.error(data.message)
                }
            })
    }


    return (
        <div>
            {/* name, location, Img, OriginalPrice, ResalePrice, yearOfUse, sellerName */}
            <h2 className="text-3xl my-5 font-bold">Add a new product</h2>
            <div>
                <h3 className="text-lg ">Input your Product details</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 lg:w-[650px] mt-10 border-2 border-black p-10 bg-black'>
                    <input name="name" type="text" placeholder='Product Name' className='input w-full input-bordered input-success' />
                    <input name="email" type="text" placeholder='your email' defaultValue={user?.email} disabled className='input w-full input-bordered input-success' />
                    <input name="image" type="text" placeholder='Product image URL' className='input w-full input-bordered input-success' />
                    <input name="ResalePrice" type="text" placeholder='Price' className='input w-full input-bordered input-success' />
                    <label className='text-white text-sm'>Condition of your product</label>
                    <select name="condition" type="text" placeholder='Condition of your product:(excellent/good/fair)' className='input w-full input-bordered input-success'>
                        <option>excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>

                    <input name="phone" type="text" placeholder='Phone Number' className='input w-full input-bordered input-success' />
                    <input name="location" type="text" placeholder='location' className='input w-full input-bordered input-success' />
                    <label className='text-white text-sm'>Your product category</label>
                    <select name="category_Name" type="text" placeholder='Product category' className='input w-full input-bordered input-success' >
                        <option>GPU</option>
                        <option>Mouse</option>
                        <option>Monitor</option>
                    </select>
                    <input name="OriginalPrice" type="text" placeholder='original price' className='input w-full input-bordered input-success' />
                    <input name="yearOfUse" type="text" placeholder='year of purchase' className='input w-full input-bordered input-success' />
                    <br />
                    <input className='btn bg-gradient-to-r from-green-800 to-green-400 text-black w-full' type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;