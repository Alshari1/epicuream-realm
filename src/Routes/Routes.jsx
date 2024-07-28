import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home/Home";
import Details from "../components/Details/Details";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

export  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('Chefs_Name.json')
            }
        ]
    },
    {
        path:'/details',
        element:<Details></Details>,
        children:[
            {
                path:'/details',
                element:<ChefDetails></ChefDetails>           
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
  ])