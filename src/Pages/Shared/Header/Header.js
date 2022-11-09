import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  const menuItems = (
    <>
      <li className="font-semibold text-2xl">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-12 h-20 my-12">
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
            {menuItems}
          </ul>
        </div>
        <img src={logo} alt="" />
        <Link to="/" className="btn btn-ghost normal-case text-4xl font-bold">
          PhotoHolic
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a href="/" className="btn">
          Get started
        </a>
      </div>
    </div>
  );
};

export default Header;
<h2>Header</h2>;
