import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../asete/logo/Layer_1.png'

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-[#fff]">
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
              <li>
                <Link>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <Link className="hover:bg-[#f36e21] px-3 py-1 rounded hover:text-white text-[14px] ">
                <button>LOG IN</button>
              </Link>
              <Link className="ml-2 bg-[#f36e21] px-3 py-1 rounded text-white text-[14px]">
                <button>REGISTER</button>
              </Link>
            </ul>
          </div>
          <Link className="text-xl"> 
          <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="hover:bg-[#f36e21] px-3 py-1 rounded hover:text-white text-[14px] hidden lg:block">
            <button>LOG IN</button>
          </Link>
          <Link className="ml-2 bg-[#f36e21] px-3 py-1 rounded text-white text-[14px] hidden lg:block">
            <button>REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
