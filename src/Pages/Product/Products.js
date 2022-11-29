import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Button/PrimaryButton';

const Products = ({ Product }) => {
    // const { product } = useLoaderData();
    const { _id, category_Name, category_img } = Product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={category_img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_Name}</h2>
                {/* <p>{description}</p> */}
                <PrimaryButton><Link to={`/categories/${_id}`}>
                    buy now
                </Link></PrimaryButton>

            </div>
        </div>
    );
};

export default Products;