import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import MyServices from "../Pages/Dashboard/MyServices";
import AddServices from "../Pages/Dashboard/AddServices";
import MySchedules from "../Pages/Dashboard/MySchedules";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path:'/services',
            element: <Services></Services>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path:'/myServices',
            element: <MyServices></MyServices>
        },
        {
            path: '/addServices',
            element: <AddServices></AddServices>
        },
        {
            path:'/mySchedules',
            element: <MySchedules></MySchedules>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: '/serviceDetails/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/serviceDetails/${params.id}`)
        }
      ]
    },
  ]);

export default router;
  