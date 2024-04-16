// import React from "react";
// import { useSelector } from "react-redux";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart);
//   return (
//     <div className="w-screen p-2">
//       <h1 className="text-5xl font-semibold my-4">Cart Items:</h1>
//       <div className="container w-full h-full ">
//         <div className="card">
//         {cartItems.map((item,index)=>{
//             return (
//                 <div className="w-full flex p-2 border-b-2 my-4" key={index}>
//                     <img className="h-32 " src={item.img} alt="" />
//                     <div className="content w-2/3">
//                     <h1>{item.name}</h1>
//                     <p>{item.description}</p>
//                     <h1>Rs.{item.price}/-</h1>
//                     </div>
//                     <div className="counter px-10 my-4">
//                         <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" onClick={""}>-</button>
//                         <button>Quantity</button>
//                         <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" onClick={""}>+</button>
//                     </div>
//                 </div>
//             )
//         })}
//         </div>
//       </div>
//       <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" >Total price</button>
//     </div>
//   );
// };

// export default Cart;



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem } from "../store/reducer/CartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart);
//   const dispatch = useDispatch()

//   const handleincrement = (item)=>{
//     dispatch(addItem(item))
//     console.log("increment");
//   }
//   const handledecrement = (item)=>{
//     dispatch(removeItem(item))
//   }
//   const calculateSubtotal = (item) => {
//     return item.price * item.quantity;
//   };

//   const totalCost = cartItems.reduce(
//     (acc, item) => acc + calculateSubtotal(item),
//     0
//   );

//   return (
//     <div className="w-screen p-2">
//       <h1 className="text-5xl font-semibold my-4">Cart Items:</h1>
//       <div className="container w-full h-full ">
//         <div className="card">
//         {cartItems.map((item,index)=>{
//             return (
//                 <div className="w-full flex p-2 border-b-2 my-4" key={index}>
//                     <img className="h-32 " src={item.img} alt="" />
//                     <div className="content w-2/3">
//                     <h1>{item.name}</h1>
//                     <p>{item.description}</p>
//                     <h1>Rs.{item.price}/-</h1>
//                     </div>
//                     <div className="counter px-10 my-4">
//                         <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" onClick={()=>handledecrement(item)}>-</button>
//                         <button>{item.quantity}</button>
//                         <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" onClick={()=>handleincrement(item)}>+</button>
//                         <button>Total: Rs.{calculateSubtotal(item).toFixed(2)}</button>
//                     </div>
//                 </div>
//             )
//         })}
//         </div>
//       </div>
//       <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" >Total Amount: Rs.{totalCost.toFixed(2)}</button>
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, removefromcart } from "../store/reducer/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(addItem(item)); // Dispatch the addItem action with the item object
  };

  const handleDecrement = (item) => {
    dispatch(removeItem(item)); // Dispatch the removeItem action with the item object
  };

  const handleRemove = (id) => {
    dispatch(removefromcart(id)); // Dispatch the removefromcart action with the item ID
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const totalCost = cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  return (
    <div className="w-screen p-2">
      <h1 className="text-5xl font-semibold my-4">Cart Items:</h1>
      <div className="container w-full h-full">
        <div className="card">
          {cartItems.map((item, index) => (
            <div className="w-full flex p-2 border-b-2 my-4" key={index}>
              <img className="h-32 " src={item.img} alt="" />
              <div className="content w-2/3">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <h1>Rs.{item.price}/-</h1>
              </div>
              <div className="counter px-10 my-4">
                <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" onClick={() => handleDecrement(item)}>
                  -
                </button>
                <span>Quantity: {item.quantity}</span>
                <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2" onClick={() => handleIncrement(item)}>
                  +
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg m-2" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
                <span>Total: Rs.{calculateSubtotal(item).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="px-4 py-2 bg-orange-400 text-white rounded-lg m-2">Total Amount: Rs.{totalCost.toFixed(2)}</button>
    </div>
  );
};

export default Cart;
