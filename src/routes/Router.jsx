import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Details/Details";
import Gallery from "../pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path:"/services/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default router;