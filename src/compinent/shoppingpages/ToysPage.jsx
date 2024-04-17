import React, { useEffect } from 'react'

const ToysPage = () => {

  const gettoys = async()=>{
    const response = await fetch("https://search.unbxd.io/78960c876fcf6b023ecb00405dac2866/ss-unbxd-prod-supertails43231684495044/category?p=category_handle_uFilter%3A%22dog-toys%22&facet.multiselect=true&variants=true&variants.count=100&fields=compareAtPrice,price,computed_discount,availableForSaleOfVariants,uniqueId,productUrl,productType,totalInventory,title,availability,variantCount,imageUrl,tags,images,meta_display_label,v_price,v_computed_discount,v_compareAtPrice,v_availableForSale,v_weight,v_Size,v_imageUrl,v_weightUnit,variantId,vendor,vId,v_sku,skuId,meta_offer1,meta_offer2,meta_rating,meta_rating_count,meta_category,meta_sub_category,meta_pet_type&spellcheck=true&pagetype=boolean&rows=40&start=0&version=V2&facet.version=V2")

    const result = await response.json()
    console.log(result)
  }

  useEffect(()=>{
    gettoys()
  },[])
  return (
    <div>ToysPage</div>
  )
}

export default ToysPage