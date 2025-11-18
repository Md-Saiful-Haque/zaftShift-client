import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Coverage from "../Pages/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Context.jsx/PrivateRoute";
import Rider from "../Pages/Rider";
import SendParcel from "../Pages/SendParcel";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('./warehouses.json')
            },
            {
                path: '/send-parcel',
                element: <SendParcel />,
                loader: () => fetch('https://bdapi.vercel.app/api/v.1/district')
            },
            {
                path: '/rider',
                element: <PrivateRoute>
                    <Rider />
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])