import React from 'react';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img4.jpg'
const Advertisement = ({ user }) => {
    const { ad } = user;
    if (ad === 'advertised') {
        return (
            <div>

                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                    <figure><div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img alt='' src={img2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img alt='' src={img1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img alt='' src={img3} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            For Sale!
                            <div className="badge badge-secondary">Carefully Used</div>
                        </h2>
                        <p>This Product is up for sale, if You want to buy call 121211</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline badge-success">Computer</div>
                            <div className="badge badge-outline badge-info">components</div>
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