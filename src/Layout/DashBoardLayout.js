import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/NavBar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <Link to="/dashboard" className='font-semibold'>Menu Bar</Link>
                        {
                            isBuyer && <>
                                <li><Link to="/dashboard/myorders" className='font-semibold'>My Orders</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allbuyer" className='font-semibold'>All Buyer</Link></li>
                                <li><Link to="/dashboard/allseller" className='font-semibold'>All Seller</Link></li>
                                <li><Link to="/dashboard/reporteditem" className='font-semibold'>Reported Items</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li><Link to="/dashboard/addproduct" className='font-semibold'>Add Product</Link></li>
                                <li><Link to="/dashboard/myproduct" className='font-semibold'>My Product</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;