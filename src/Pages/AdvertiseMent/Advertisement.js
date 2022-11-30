import React from 'react';
import img1 from '../../assets/images/img1.jpg'
const Advertisement = ({ user }) => {
    const { ad } = user;
    if (ad === 'advertised') {
        return (
            <div>

                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                    <figure><img src={img1} alt="ad" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            For Sale!
                            <div className="badge badge-secondary">Carefully Used</div>
                        </h2>
                        <p>This Product is up for sale, if You want to buy call 121211</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Computer</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div></div>
    )


};

export default Advertisement;