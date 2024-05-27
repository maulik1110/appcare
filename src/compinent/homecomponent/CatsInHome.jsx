// import React, { useEffect } from 'react'
// import { allcatitem } from '../../utils/allcatitem'
// import { useDispatch, useSelector } from 'react-redux'
// import { addCat } from '../../store/reducer/CatSlice';
// import HomeProduct from '../HomeProduct';
// import cattoy from "../../assets/toy/cattoy.webp"

// const CatsInHome = () => {

//   const dispatch = useDispatch();
//   const cats = useSelector(store=>store.dog)

//   useEffect(()=>{
//     dispatch(addCat(allcatitem))
//   },[])
//   return (
//     <div className='my-4'>
//       <img src={cattoy} alt="" />
//       {/* <HomeProduct data={allcatitem} title={"Popular cats products"} maxneeded={4} locateTo={"shop/catproducts"}/> */}

//     </div>
//   )
// }

// export default CatsInHome

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../../store/reducer/CartSlice";
import Overinclude from "../shoppingpages/Overinclude";
import cattoy from "../../assets/toy/cattoy.webp";

const CatsInHome = () => {
  const [data, setdata] = useState([]);
  const [start, setstart] = useState(0);
  const [rows, setRows] = useState(40);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const gettoys = async (startIdx, rowsCount) => {
    setLoading(true);

    const response = await fetch(
      `https://search.unbxd.io/78960c876fcf6b023ecb00405dac2866/ss-unbxd-prod-supertails43231684495044/category?p=category_handle_uFilter%3A%22cat-food%22&facet.multiselect=true&variants=true&variants.count=100&fields=compareAtPrice,price,computed_discount,availableForSaleOfVariants,uniqueId,productUrl,productType,totalInventory,title,availability,variantCount,imageUrl,tags,images,meta_display_label,v_price,v_computed_discount,v_compareAtPrice,v_availableForSale,v_weight,v_Size,v_imageUrl,v_weightUnit,variantId,vendor,vId,v_sku,skuId,meta_offer1,meta_offer2,meta_rating,meta_rating_count,meta_category,meta_sub_category,meta_pet_type&spellcheck=true&pagetype=boolean&rows=${rowsCount}&start=${startIdx}&version=V2&facet.version=V2`
    );

    const result = await response.json();
    const newProducts = result.response.products || [];
    const finaldata = newProducts.slice(0, 5);
    // setdata((prevData) => [...prevData, ...finaldata]); // Append new products to existing data
    setdata(finaldata);
    setLoading(false);
    // console.log(result.response.products);
  };

  useEffect(() => {
    const filterdata = async () => {
      const initial = await gettoys(start, rows);
      const finaldata = initial.slice(0,4);
      setdata(finaldata);
    };
    filterdata();
    // gettoys(start, rows);
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
    <div className="my-4 w-full mx-auto h-full">
      <h1 className="text-center text-5xl my-4 font-semibold">
        Cats Popular Products
      </h1>
      <img src={cattoy} alt="" />

      <div className="">
        <Overinclude
          data={data}
          handleAddToCart={handleAddToCart}
          loading={loading}
          loadmore={loadmore}
        />
      </div>
    </div>
  );
};

export default CatsInHome;
