import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Pages/Product/ProductDetails";
import SignUp from "../../Pages/SignUp/SignUp";
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
                path: '/categories/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyers></AllBuyers>
            },
        ]
    },
    {
        path: "/*",
        element: <div><img className='d-flex mx-auto' src="https://www.ktnwebdesign.com/wp-content/uploads/2019/10/123456.png" alt="" /></div>,
    },
])
export default router;