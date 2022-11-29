import React from 'react';
import Products from './Products';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';



const ProductList = () => {

    const { data: category = [], isLoading } = useQuery({
        queryKey: ['categories',],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-black uppercase text-xl font-bold'>Our Products</h2>
                <h2 className='text-success text-3xl mt-5'>Select your category</h2>
            </div>
            <div className='grid lg:grid-cols-3 mid:grid-cols-2 grid-cols-1 gap-8 mt-5'>
                {
                    category.map(cat => <Products
                        key={cat.id}
                        Product={cat}

                    ></Products>)
                }
            </div>
            {/* <BookingModal></BookingModal> */}
        </div>
    );
};

export default ProductList;