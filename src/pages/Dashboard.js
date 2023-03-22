import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTav] = useState("profile");
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="tabs">
          <Link
            onClick={() => setActiveTav("profile")}
            className={`tab tab-bordered ${
              activeTab === "profile" && "tab-active font-semibold"
            } `}
            to="/dashboard"
          >
            Profile
          </Link>
          <Link
            onClick={() => setActiveTav("users")}
            className={`tab tab-bordered ${
              activeTab === "users" && "tab-active font-semibold"
            } `}
            to="/dashboard/users"
          >
            Users
          </Link>
          <Link
            onClick={() => setActiveTav("courses")}
            className={`tab tab-bordered ${
              activeTab === "courses" && "tab-active font-semibold"
            } `}
            to="/dashboard/courses"
          >
            Courses
          </Link>
          <Link
            onClick={() => setActiveTav("order-details")}
            className={`tab tab-bordered ${
              activeTab === "order-details" && "tab-active font-semibold"
            } `}
            to="/dashboard/order-details"
          >
            Order Details
          </Link>

          
         
        </div>
        <div className=" p-5 px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
