// import React from "react";
// import { alldogitem } from "../../utils/alldogitem";
// import SearchAndFilter from "./SearchAndFilter";
// import Shop from "../Shop";

// const DogPage = () => {
//   return (
//     <div>
//       {/* <Shop/> */}
//       <SearchAndFilter data={alldogitem} />
//     </div>
//   );
// };

// export default DogPage;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../../store/reducer/CartSlice";
import loadinggif from "../../assets/loadinggif.gif";
import Overinclude from "./Overinclude";

const DogPage = () => {
  const [data, setdata] = useState([]);
  const [start, setstart] = useState(0);
  const [rows, setRows] = useState(40);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const gettoys = async (startIdx, rowsCount) => {
    setLoading(true);

    const response = await fetch(
      `https://search.unbxd.io/78960c876fcf6b023ecb00405dac2866/ss-unbxd-prod-supertails43231684495044/category?p=category_handle_uFilter%3A%22dog-food%22&facet.multiselect=true&variants=true&variants.count=100&fields=compareAtPrice,price,computed_discount,availableForSaleOfVariants,uniqueId,productUrl,productType,totalInventory,title,availability,variantCount,imageUrl,tags,images,meta_display_label,v_price,v_computed_discount,v_compareAtPrice,v_availableForSale,v_weight,v_Size,v_imageUrl,v_weightUnit,variantId,vendor,vId,v_sku,skuId,meta_offer1,meta_offer2,meta_rating,meta_rating_count,meta_category,meta_sub_category,meta_pet_type&spellcheck=true&pagetype=boolean&rows=${rowsCount}&start=${startIdx}&version=V2&viewType=Grid&facet.version=V2`
    );

    const result = await response.json();
    const newProducts = result.response.products || [];
    setdata((prevData) => [...prevData, ...newProducts]); // Append new products to existing data
    setLoading(false);
    console.log(result.response.products);
  };

  useEffect(() => {
    gettoys(start, rows);
  }, []);

  const loadmore = () => {
    const newstart = start + rows;
    const newrows = newstart + 40;
    gettoys(newstart, newrows);
    setstart(newstart);
  };

  const handleAddToCart = (item) => {
    dispatch(addtocart(item));
  };
  return (
    // <div className="w-screen min-h-screen flex-wrap p-4 flex flex-col justify-between ">
    //   <div className="w-full flex-wrap flex justify-between items-start p-2">
    //     {data.map((item, index) => {
    //       return (
    //         <div
    //           key={index}
    //           className="md:w-[18%] w-[48%] md:h-96 h-[50vh] hover:scale-[0.98] duration-300 transition-all rounded-lg my-2 bg-orange-100 p-2 flex flex-col justify-between items-start"
    //         >
    //           <img className="w-full rounded-lg " src={item.imageUrl} alt="" />
    //           <h1 className="font-semibold text-sm my-1 tracking-tight">
    //             {item.title}
    //           </h1>
    //           <h3 className="text-sm">{item.meta_category}</h3>
    //           <div className="w-full flex justify-between">
    //             <button className="px-2 py-2 bg-orange-200 rounded-lg cursor-default font-semibold">
    //               Rs.{item.price}/-
    //             </button>
    //             <button
    //               onClick={() => handleAddToCart(item)}
    //               className="px-4 py-2 rounded-lg bg-orange-200 "
    //             >
    //               Cart
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   {loading && (
    //     <img
    //       className="w-screen h-screen object-cover rounded-lg"
    //       src={loadinggif}
    //       alt="Loading..."
    //     />
    //   )}
    //   {!loading && (
    //     <button
    //       onClick={loadmore}
    //       className="px-4 py-2 bg-red-700 rounded-md my-5 text-white mx-auto"
    //     >
    //       Load More
    //     </button>
    //   )}
    // </div>
    <Overinclude data={data} handleAddToCart={handleAddToCart} loading={loading} loadmore={loadmore}/>
  );
};

export default DogPage;
