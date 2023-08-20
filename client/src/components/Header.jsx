import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5  item-center justify-between">
        <div className="md:hidden flex items-center justify-center mt-[-10px]">
          <button
            className="text-gray-900  focus:outline-none mt-0"
            onClick={handleMenuToggle}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <Link
          to="/"
          className=" title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer hidden md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">EcoMart</span>
        </Link>
        <nav className="md:ml-auto md:flex hidden flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link to="/about-us" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
        </nav>
        <div className="flex items-center justify-center h-10 w-11">
          <button
            className="h-auto md:h-auto inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-white"
            onClick={() => navigate("/cart")}
          >
            Cart
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col text-base justify-center bg-gray-100">
            <Link
              to="/"
              className="px-4 py-2 border-b border-gray-400 hover:bg-gray-200"
              onClick={handleMenuToggle}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 border-b border-gray-400 hover:bg-gray-200"
              onClick={handleMenuToggle}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 border-b border-gray-400 hover:bg-gray-200"
              onClick={handleMenuToggle}
            >
              Contact
            </Link>
            <Link
              to="/about-us"
              className="px-4 py-2 hover:bg-gray-200"
              onClick={handleMenuToggle}
            >
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
