import React from "react";

const HomeProduct = ({ data,title ,maxneeded}) => {
  const limiteddata = data.slice(0,maxneeded)

  const cuttheword = (name)=>{
    const wordsplit = name.split("");
    if (wordsplit.length>20){
        return wordsplit.slice(0,20).join("") + "..."
    }
    return name;
  }

  return (
    <div className="flex flex-col flex-wrap md:my-5 w-full ">
        <h1 className="text-center md:text-5xl text-3xl my-5 font-semibold">{title}</h1>
        <div className="container flex flex-wrap justify-between md:w-full ">
            {limiteddata.map((item,index)=>(
                <div key={index} className="md:w-[24%] w-[48%] hover:scale-[1.01] transition-all duration-150 md:px-10 px-2 flex flex-col md:items-center justify-start rounded-lg shadow-lg">
                    <img className=" m-2 h-32 w-full rounded-lg"  src={item.img} alt="" />
                    <h1 className="md:text-lg text-[3vw]  font-semibold my-4">{cuttheword(item.name)}</h1>
                    {/* <h2 className="px-4 py-1 rounded bg-green-400 text-left w-fit">{item.review}</h2> */}
                    <h2 className="md:px-4 md:py-1 px-1 py-1 md:text-md rounded bg-green-400 text-left w-fit">Unlock huge discounts</h2>
                    <div className="flex gap-2 items-center my-3">
                        <h1 className="price text-lg font-semibold">Rs.{item.price}/-</h1>
                        <h1 className="price line-through opacity-80">{item.cutprice}/-</h1>
                    </div>
                    <div className="flex justify-evenly gap-4 mb-4 items-center">
                    <button className="md:px-4 md:py-2 py-1 px-2  bg-blue-400 rounded-lg">Add to cart</button>
                    <button className="md:px-4 md:py-2 py-1 px-1 bg-blue-400 rounded-full">❤️</button>

                    </div>
                </div>
            ))}
            <button className="px-4 py-2 bg-red-700 rounded-md my-5 text-white mx-auto">Shop Now</button>
        </div>
    </div>
  );
};

export default HomeProduct;
