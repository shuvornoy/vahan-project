import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../asete/logo/Layer_1.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="xl:w-[1384px] lg:w-[1024px] md:w-[768px] mx-auto">
      <div className="navbar bg-[#fff] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="interBold">
                <Link>Home</Link>
              </li>
              <li className="robotoRegular" tabIndex={0}>
                <Link>Features</Link>
              </li>
              <li className="robotoRegular">
                <Link>Pricing</Link>
              </li>
              <li className="robotoRegular">
                <Link>Products</Link>
              </li>
              <li className="robotoRegular">
                <Link>Contact Us</Link>
              </li>
              <Link className="hover:bg-[#f36e21] px-3 py-1 rounded hover:text-white text-[14px] interBold">
                <button>LOG IN</button>
              </Link>
              <Link className="ml-2 bg-[#f36e21] px-3 py-1 rounded text-white text-[14px] sansBold">
                <button>REGISTER</button>
              </Link>
            </ul>
          </div>
          <Link className="text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex h-20">
          <ul className="menu menu-horizontal px-1 text-[15px]">
            <li className="interBold font-bold text-[#000000]">
              <Link>Home</Link>
            </li>
            <li className="robotoRegular" tabIndex={0}>
              <Link>Features</Link>
            </li>
            <li className="robotoRegular">
              <Link>Pricing</Link>
            </li>
            <li className="robotoRegular">
              <Link>Products</Link>
            </li>
            <li className="robotoRegular">
              <Link>Contact Us</Link>
            </li>
            <button className="btn btn-ghost btn-circle">
              <CiSearch size={24} />
            </button>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="hover:bg-[#f36e21] py-1 rounded hover:text-white hidden lg:block text-[16px] sansBold font-[700] border px-6">
            <button>LOG IN</button>
          </Link>
          <Link className="ml-2 bg-[#f36e21] px-6 py-1 rounded text-white hidden lg:block text-[16px] sansBold font-bold">
            <button>REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import logo from '../../../asete/logo/Layer_1.png';
// import { CiSearch } from "react-icons/ci";

// const Navbar = ({ logIn, setLogIn }) => {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <div className="navbar bg-[#fff]">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li className="interBold">
//                 <Link>Home</Link>
//               </li>
//               <li className="robotoRegular" tabIndex={0}>
//                 <Link>Features</Link>
//               </li>
//               <li className="robotoRegular">
//                 <Link>Pricing</Link>
//               </li>
//               <li className="robotoRegular">
//                 <Link>Products</Link>
//               </li>
//               <li className="robotoRegular">
//                 <Link>Contact Us</Link>
//               </li>
//               <Link className="hover:bg-[#f36e21] px-3 py-1 rounded hover:text-white text-[14px] interBold">
//                 <button onClick={() => setLogIn(false)}>LOG IN</button>
//               </Link>
//               <Link className="ml-2 bg-[#f36e21] px-3 py-1 rounded text-white text-[14px] sansBold">
//                 <button onClick={() => setLogIn(true)}>REGISTER</button>
//               </Link>
//             </ul>
//           </div>
//           <Link className="text-xl">
//             <img src={logo} alt="" />
//           </Link>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 text-[16px]">
//             <li className="interBold">
//               <Link>Home</Link>
//             </li>
//             <li className="robotoRegular" tabIndex={0}>
//               <Link>Features</Link>
//             </li>
//             <li className="robotoRegular">
//               <Link>Pricing</Link>
//             </li>
//             <li className="robotoRegular">
//               <Link>Products</Link>
//             </li>
//             <li className="robotoRegular">
//               <Link>Contact Us</Link>
//             </li>
//             <button className="btn btn-ghost btn-circle">
//               <CiSearch size={24} />
//             </button>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <Link className="hover:bg-[#f36e21] px-3 py-1 rounded hover:text-white hidden lg:block text-[16px] interBold">
//             <button onClick={() => setLogIn(false)}>LOG IN</button>
//           </Link>
//           <Link className="ml-2 bg-[#f36e21] px-3 py-1 rounded text-white hidden lg:block text-[16px] sansBold">
//             <button onClick={() => setLogIn(true)}>REGISTER</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
