import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="w-full bg-gray-600 h-auto px-10 py-4 flex justify-between align-center">
        <h1 className="text-3xl">MLSC MIT-A</h1>
        <ul className="flex justify-center align-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` text-lg ${isActive ? "text-white" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` text-lg ${isActive ? "text-white" : "text-black"}`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                ` text-lg ${isActive ? "text-white" : "text-black"}`
              }
            >
              Team
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                ` text-lg ${isActive ? "text-white" : "text-black"}`
              }
            >
              Event
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` text-lg ${isActive ? "text-white" : "text-black"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
