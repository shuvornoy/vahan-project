import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layuot/Main";
import Home from "../Pages/Home/Home/Home";
import Product from "../Pages/AllProduct/Product/Product";
import YourPackage from "../Pages/AllProduct/YourPackage/YourPackage";
import Schedule from "../Pages/AllProduct/Schedule/Schedule";
import Subscriptions from "../Pages/AllProduct/Subscriptions/Subscriptions";
import Order from "../Pages/AllProduct/Order/Order";
import FeaturesService from "../Pages/AllVehicles/FeaturesService/FeaturesService";
import Manage from "../Pages/AllVehicles/Manage/Manag";
import FuelLog from "../Pages/AllVehicles/FuelLog/FuelLog";
import ViewLog from "../Pages/AllVehicles/ViewLog/ViewLog";
import AllVehicle from "../Pages/AllVahan/AllVehicle/AllVehicle";
import AddNewVehicle from "../Pages/AllVahan/AddNewVehicle/AddNewVehicle";
import CalculateFuel from "../Pages/AllVahan/CalculateFuel/CalculateFuel";
import LandingPage from "../LandingPage/LandingPage";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";









const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/main",
    element: <Main />,

    children: [
      {
        path: "/main/login",
        element: <LogIn />,
      },
      {
        path: "/main/signup",
        element: <SignUp />,
      },
      {
        path: "/main/home",
        element: <Home />,
      },
      {
        path: "/main/wash",
        element: <Product />,
      },
      {
        path: "/main/package",
        element: <YourPackage />,
      },
      {
        path: "/main/schedule",
        element: <Schedule />,
      },
      {
        path: "/main/order",
        element: <Order />,
      },
      {
        path: "/main/subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "/main/fuel",
        element: <FeaturesService />,
      },
      {
        path: "/main/management",
        element: <Manage />,
      },
      {
        path: "/main/log",
        element: <FuelLog />,
      },
      {
        path: "/main/view",
        element: <ViewLog />,
      },
      {
        path: "/main/choose",
        element: <AllVehicle />,
      },
      {
        path: "/main/add",
        element: <AddNewVehicle />,
      },
      {
        path: "/main/calculate",
        element: <CalculateFuel />,
      },
    ],
  },
]);

export default router;
