import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo/logo3.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log(user);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", links: "/" },
    { id: 2, text: "Shop", links: "/shop" },
    { id: 3, text: "FAQs", links: "/faq" },
    // { id: 4, text: 'Join Us',links: "/joinus" },
    { id: 5, text: "Cart", links: "/cart" },
    // { id: 6, text: "LogIn", links: "" },
  ];

  return (
    <div className="bg-white relative z-10 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <img className=" md:h-[15vh] h-[10vh] " src={logo} alt="" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex ">
        {navItems.map((item) => (
          <Link
            to={`${item.links}`}
            key={item.id}
            className="px-4 py-2 hover:bg-[#00df9a] font-semibold rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </Link>
        ))}
      </ul>

      {isAuthenticated && <h4>Hi {user.name}!</h4>}

      {isAuthenticated ? (
        <Link
          className="px-4 py-2 hover:bg-[#00df9a] font-semibold rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </Link>
      ) : (
        <Link
          className="px-4 py-2 hover:bg-[#00df9a] font-semibold rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          onClick={(e) => loginWithRedirect()}
        >
          Log in
        </Link>
      )}

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#000] m-4">
          Pets Care.
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link
            to={`${item.links}`}
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
