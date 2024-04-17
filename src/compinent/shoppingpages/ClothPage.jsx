import React, { useEffect, useState } from "react";
import loadinggif from "../../assets/loadinggif.gif";
import { addtocart } from "../../store/reducer/CartSlice";
import { useDispatch } from "react-redux";
import Overinclude from "./Overinclude";

const ClothPage = () => {
  const [start, setstart] = useState(0);
  const [rows, setRows] = useState(40);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getclothes = async (startfrom, rownumber) => {
    setLoading(true);
    const response = await fetch(
      `https://search.unbxd.io/78960c876fcf6b023ecb00405dac2866/ss-unbxd-prod-supertails43231684495044/category?p=category_handle_uFilter%3A%22dog-clothes%22&facet.multiselect=true&variants=true&variants.count=100&fields=compareAtPrice,price,computed_discount,availableForSaleOfVariants,uniqueId,productUrl,productType,totalInventory,title,availability,variantCount,imageUrl,tags,images,meta_display_label,v_price,v_computed_discount,v_compareAtPrice,v_availableForSale,v_weight,v_Size,v_imageUrl,v_weightUnit,variantId,vendor,vId,v_sku,skuId,meta_offer1,meta_offer2,meta_rating,meta_rating_count,meta_category,meta_sub_category,meta_pet_type&spellcheck=true&pagetype=boolean&rows=${rownumber}&start=${startfrom}&version=V2&facet.version=V2`
    );

    const result = await response.json();
    const newproducts = result.response.products || [];

    console.log(result.response.products);
    setdata((prevdata) => [...prevdata, ...newproducts]);
    setLoading(false);
  };

  const handleAddToCart = (item) => {
    dispatch(addtocart(item));
  };

  const loadmore = () => {
    const newstart = start + rows;
    const newrows = newstart + 40;
    getclothes(newstart, newrows);
    setstart(newstart);
  };

  useEffect(() => {
    getclothes(start, rows);
  }, []);

  return (
    // <div className="w-screen min-h-screen flex-wrap  p-4 flex flex-col justify-between ">
    //   <div className="w-full flex-wrap flex p-2 justify-between items-start">
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
    //             <button>Rs.{item.price}/-</button>
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

    <Overinclude
      data={data}
      handleAddToCart={handleAddToCart}
      loading={loading}
      loadmore={loadmore}
    />
  );
};

export default ClothPage;
