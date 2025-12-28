import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Home, LogIn } from "lucide-react";

import { useSelector } from "react-redux";

const Navbar = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-indigo-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent hover:from-indigo-500 hover:to-rose-500 transition-all duration-300 cursor-pointer">
                ShopHub
              </h2>
            </Link>
          </div>

          {/* Search Bar - Middle */}
          <div className="flex-1 max-w-xl mx-8">
            <div
              className={`relative transition-all duration-300 ${searchFocus ? "scale-105" : ""
                }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  className={`h-5 w-5 transition-colors duration-300 ${searchFocus ? "text-indigo-500" : "text-gray-400"
                    }`}
                />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation Links - Right */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="group flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 relative"
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/cart"
              className="group flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 relative"
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-rose-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md transform scale-100 group-hover:scale-110 transition-transform duration-200">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="font-medium">Cart</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/profile"
              className="group flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 relative"
            >
              <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Profile</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/login"
              className="group flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 relative"
            >
              <LogIn className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Login</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;