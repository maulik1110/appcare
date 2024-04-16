import React from "react";
import { Link, Outlet } from "react-router-dom";

const Shop = () => {
  const dataofnav = [
    {name: "Dog", linkto: "/shop/dogproducts"},
    {name: "Cat", linkto: "/shop/catproducts"},
    {name: "Toys", linkto: "/shop/toyproducts"},
    {name: "Clothes", linkto: "/shop/clothproducts"},
    {name: "Tags", linkto: "/shop/tagproducts"},
    {name: "Games", linkto: "/shop/gameproducts"},
  ];
  return (
    <div className="w-screen my-4">
      <nav className="w-[80%] mx-auto bg-black text-center flex gap-4 justify-center p-4 rounded-lg text-white">
        {dataofnav.map((item, index) => (
          <Link to={`${item.linkto}`} className="text-xl hover:bg-white hover:text-black px-4 py-2 rounded-lg transition-all duration-200" key={index}>{item.name}</Link>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
};

export default Shop;
