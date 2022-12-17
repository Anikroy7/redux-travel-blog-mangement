import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../layouts/Dashboard/AddProduct";
import Updateblog from "../layouts/Dashboard/Updateblog";
import Dashboard from "../layouts/Dashboard/Dashboard";

import Main from "../layouts/Main/Main";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        }]
    },

    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <AddProduct />
            },
            {
                path: 'update-blog/:id',
                element: <Updateblog />
            }
        ]
    }
])

export default routes;