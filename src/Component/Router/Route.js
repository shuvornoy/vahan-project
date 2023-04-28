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









const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wash",
        element: <Product />,
      },
      {
        path: "/package",
        element: <YourPackage />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "/fuel",
        element: <FeaturesService />,
      },
      {
        path: "/management",
        element: <Manage />,
      },
      {
        path: "/log",
        element: <FuelLog />,
      },
      {
        path: "/view",
        element: <ViewLog />,
      },
      {
        path: "/choose",
        element: <AllVehicle />,
      },
      {
        path: "/add",
        element: <AddNewVehicle />,
      },
      {
        path: "/calculate",
        element: <CalculateFuel />,
      },
    ],
  },
]);

export default router;
