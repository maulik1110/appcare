import React from "react";
import { Link, Outlet } from "react-router-dom";

const Shop = () => {
  const dataofnav = [
    {name: "Dog", linkto: "/shop/dogproducts"},
    {name: "Cat", linkto: "/shop/catproducts"},
    {name: "Toys", linkto: "/shop/toyproducts"},
    {name: "Clothes", linkto: "/shop/clothproducts"},
    // {name: "Tags", linkto: "/shop/tagproducts"},
    // {name: "Games", linkto: "/shop/gameproducts"},
  ];
  return (
    <div className="w-screen md:my-4 my-2">
      <nav className="md:w-[80%] w-full mx-auto bg-black text-center flex md:gap-4  justify-center md:p-4 p-1 rounded-lg text-white">
        {dataofnav.map((item, index) => (
          <Link to={`${item.linkto}`} className="text-xl hover:bg-white hover:text-black md:px-4 px-2 py-2 rounded-lg transition-all duration-200" key={index}>{item.name}</Link>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
};

export default Shop;
