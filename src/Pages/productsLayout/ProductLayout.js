import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Button/PrimaryButton';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img4 from '../../assets/images/img4.jpg';

const ProductLayout = () => {
    return (
        <div className='w-full'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 '>
                <div className="card w-full bg-base-200 ">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mouse</h2>
                        <p>You Can Find anyKind of Mouse here</p>
                        <div className="card-actions">
                            <PrimaryButton><Link to={`/mouse`}>
                                buy now
                            </Link></PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-200">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">GPU</h2>
                        <p>You Can Find anyKind of GPU here</p>
                        <div className="card-actions">
                            <PrimaryButton><Link to={`/gpu`}>
                                buy now
                            </Link></PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-200">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Monitor</h2>
                        <p>You Can Find anyKind of Monitor here</p>
                        <div className="card-actions">
                            <PrimaryButton><Link to={`/monitor`}>
                                buy now
                            </Link></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLayout;