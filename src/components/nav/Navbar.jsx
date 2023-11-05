import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "../Image/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handle = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <header class="text-gray-600 bg-white body-font">
        <div class="container mx-auto px-10 flex flex-wrap p-2 pb-4 flex-col md:flex-row justify-between items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} class="w-50 h-30 " />
          </a>
          <div
            className={
              menu
                ? "flex flex-col w-full transition-all duration-500 ease-in  gap-4 md:inline"
                : "hidden md:inline"
            }
          >
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link to="/" class="mr-5 text-xl text-black hover:text-blue-500">
                Home
              </Link>
              <Link
                to="/fin"
                class="mr-5 text-xl text-black hover:text-blue-500"
              >
                FinTech
              </Link>

              <Link
                to="/about"
                class="mr-5 text-xl text-black hover:text-blue-500"
              >
                About Us
              </Link>

              <Link
                to="/service"
                class="mr-5 text-xl text-black hover:text-blue-500"
              >
                Service
              </Link>
              <Link
                to="/contact"
                class="mr-5 text-xl text-indigo-700 hover:text-black"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div
            onClick={handle}
            className="text-3xl absolute right-8 text-black top-10 cursor-pointer md:hidden "
            xt-w
          >
            {!menu ? <BiMenu /> : <FiX />}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
