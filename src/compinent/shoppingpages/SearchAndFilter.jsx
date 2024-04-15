import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../store/reducer/CartSlice";

const SearchAndFilter = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedprice, setSetselectedprice] = useState("All");
  const {dog} = useSelector(store=>store.dog)
  const dispatch = useDispatch()
  // console.log(dog[0][0].name);

  const handleSelectChange = (e) => {
    setSelectedFilter(e.target.value);
  };
  const handleselectedprice = (e) => {
    setSetselectedprice(e.target.value);
  };

  const cutdescription = (desc)=>{
    const newdesc = desc.split(" ");
    if(newdesc.length>20){
      return newdesc.slice(0,20).join(" ")+"...";
    }
    else return desc
  }
  const cuttitle = (title)=>{
    const newtitle = title.split(" ");
    if(newtitle.length>5){
      return newtitle.slice(0,5).join(" ")+"...";
    }
    else return title
  }

  const filtereddata = selectedFilter!=="All" ? data.filter((item)=>item.type===selectedFilter) : data;


  if (selectedprice === "lowest") {
    filtereddata.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (selectedprice === "highest") {
    filtereddata.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  const handleAddToCart = (item)=>{
    dispatch(addtocart(item))
  }

  return (
    <div className="md:flex flex-col my-4 w-screen p-5">
      <form action="">
        <input
          className="w-full h-fit bg-transparent border-1 px-8 py-2 rounded-lg"
          placeholder="Search"
          type="text"
          name=""
          id=""
        />
      </form>

      <div className="flex w-full h-fit gap-4">
        <div className="category"></div>
        <select
          className="bg-red-300 px-8 py-2 rounded-lg outline-none text-lg font-semibold"
          id="filter"
          value={selectedFilter}
          onChange={handleSelectChange}
        >
          <option
            className="px-8 py-2 rounded-lg outline-none text-lg font-semibold"
            value="popular"
          >
            popular
          </option>
          <option value="new">new</option>
          <option value="highRated">highRated</option>
        </select>

        <div className="price">
          <select
            className="bg-red-300 px-8 py-2 rounded-lg outline-none text-lg font-semibold"
            id="filter"
            value={selectedprice}
            onChange={handleselectedprice}
          >
            <option
              className="px-8 py-2 rounded-lg outline-none text-lg font-semibold"
              value="price"
            >
              Price
            </option>
            <option value="lowest">Lowest</option>
            <option value="highRated">Highest</option>
          </select>
        </div>
      </div>

      <div className="cards my-2 w-full flex flex-wrap items-center gap-2 justify-center">
        {filtereddata.map((item,index)=>{
          return (<div key={index} className="card  hover:scale-[1.02] p-2 shadow-lg w-[23%] my-1 rounded-lg min-h-[70vh]">
            <img className="h-[28vh] w-full my-1" src={item.img} alt="" />
            <h1 className="font-semibold text-left text-lg my-1">{cuttitle(item.name)}</h1>
            <p className="w-full my-1 text-sm font-medium">{cutdescription(item.description)}</p>
            <p className="text-sm my-1 font-normal">{item.review}</p>
            <div className="flex gap-2 items-center my-1">
            <h1 className="text-lg font-semibold ">Rs.{item.price}/-</h1>
            <h1 className="text-sm font-normal line-through">Rs.{item.cutprice}/-</h1>

            </div>
            <div className="flex gap-2 ">
              <button onClick={()=>handleAddToCart(item)} className="px-4 py-2 rounded-lg bg-red-300 ">Cart</button>
              <button className="px-4 py-2 rounded-lg bg-red-300 ">Wishlist</button>
            </div>
          </div>)

        })}

      </div>
    </div>
  );
};

export default SearchAndFilter;
