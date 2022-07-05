import React from "react";

import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    <div className="bg-black my-5 text-white ">
    <ul className="flex justify-center  ">
        <li className="px-10">
            <Link to='adduser'>Add New User</Link>
        </li>
        <li>
            <Link to='allusers'>User List</Link>
        </li>
    </ul>
    </div>
   
  <Outlet />
    </>
  );
};

export default Dashboard;
