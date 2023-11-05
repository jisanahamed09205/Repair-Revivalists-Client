import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import MyServices from "../Pages/Dashboard/MyServices";
import AddServices from "../Pages/Dashboard/AddServices";
import MySchedules from "../Pages/Dashboard/MySchedules";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/services',
            element: <Services></Services>
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
        }
      ]
    },
  ]);

export default router;
  