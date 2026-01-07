import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  // console.log(user);

  return (
    <div className="w-1/2 mx-auto">
      <nav className="flex justify-evenly items-center p-2 bg-zinc-300 rounded-2xl">
        <NavLink
          to={"/"}
          className={(e) => (e.isActive ? "text-xl" : "text-lg")}
        >
          Home
        </NavLink>

        {user ? (
          <>
          {user && user?.isAdmin &&
           <NavLink
              to={"/admin/create-product"}
              className={(e) => (e.isActive ? "text-xl" : "text-lg")}
            >
              Create Product
            </NavLink>
          }
           
            <NavLink to={"/admin/user-profile"}  className={(e) => (e.isActive ? "text-xl" : "text-lg")}>Settings</NavLink>
            <NavLink to={"/cart"}  className={(e) => (e.isActive ? "text-xl" : "text-lg")}>Cart</NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={"/login"}
              className={(e) => (e.isActive ? "text-xl" : "text-lg")}
            >
              Login
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Nav;
