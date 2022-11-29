import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            // style={{
            //     background: `url(${footer})`,
            //     backgroundSize: 'cover'
            // }}
            className="p-10">
            <div className='footer bg-green-700 p-16'>
                <div>
                    <h1 className='text-xl font-bold'>BuySellRepeat</h1>
                    <h1 className='font-semibold'>-your trusted reseller</h1>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Buy</Link>
                    <Link to="/" className="link link-hover">Sell</Link>
                    <Link to="/" className="link link-hover">Donate</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-10'>
                <p>Copyright © 2022 - All right reserved by BuySellRepeat Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;