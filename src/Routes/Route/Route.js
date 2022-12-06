import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import GPU from "../../Pages/Categories/GPU/GPU";
import Monitor from "../../Pages/Categories/Monitor/Monitor";
import Mouse from "../../Pages/Categories/Mouse/Mouse";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProduct from "../../Pages/DashBoard/MyProducts/MyProduct";
import ReportedItem from "../../Pages/DashBoard/ReportedItem/ReportedItem";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddedProductList from "../../Pages/Product/AddedProductList/AddedProductList";
import ProductDetails from "../../Pages/Product/ProductDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoutes/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/mouse',
                element: <PrivateRoute><Mouse></Mouse></PrivateRoute>
            },
            {
                path: '/gpu',
                element: <PrivateRoute><GPU></GPU></PrivateRoute>
            },
            {
                path: '/monitor/',
                element: <PrivateRoute><Monitor></Monitor></PrivateRoute>

            },
            {
                path: '/monitor/',
                element: <PrivateRoute><Monitor></Monitor></PrivateRoute>,

            },
            {
                path: '/allproduct',
                element: <AddedProductList></AddedProductList>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-12-server-omega.vercel.app/categories/${params.id}`)

            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/reporteditem',
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            },
        ]
    },
    {
        path: "/*",
        element: <div><img className='d-flex mx-auto' src="https://www.ktnwebdesign.com/wp-content/uploads/2019/10/123456.png" alt="" /></div>,
    },
])
export default router;