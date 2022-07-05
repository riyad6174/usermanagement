import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-black  py-3 ">
        <div className="flex justify-center list-none items-center">
          <li className="text-white hover:text-blue-200 px-10">
            <Link to="/">Home</Link>
          </li>

          <li className="text-white hover:text-blue-200 px-10">
            <Link to="about">About</Link>
          </li>
          <li className="text-white hover:text-blue-200 px-10">
            <Link to="contact">Contact</Link>
          </li>
          <li className="text-white hover:text-blue-200 px-10">
            <Link to="admin">Admin</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
