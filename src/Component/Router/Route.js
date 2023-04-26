import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layuot/Main";
import Home from "../Home/Home/Home";
import Product from "../Product/Product";
import YourPackage from "../Product/YourPackage/YourPackage";


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
        path: "/product",
        element: <Product />,
      },
      {
        path: "/package",
        element: <YourPackage />,
      },
    ],
  },
]);

export default router;
