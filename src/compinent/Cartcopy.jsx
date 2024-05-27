import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/reducer/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cartcopy = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item.title));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.title));
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  const toastAddOnClick = () => {
    toast("Item added");
  };
  const toastRemoveOnClick = () => {
    toast("Item removed");
  };

  return cartItems.length>0 ? (
    <>
    <div className="px-10 w-screen min-h-screen">
      <h1 className="text-center font-bold text-3xl">Cart</h1>

      <ul>
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="md:flex md:justify-between justify-center items-center gap-5 w-[80vw] mb-3 mt-3 border-b-2 border-slate-300"
          >
            <img
              src={item.imageUrl || item.img}
              alt={item.name }
              className="md:w-[20vw] md:h-[20vw] w-[50vw] h-[50vw] rounded-lg mb-3 mx-auto"
            />
            <div className="w-full">
              <h3 className="md:font-bold font-semibold text-lg md:text-left text-center my-2">
                {item.title || item.name}
              </h3>
              <p className="text-sm">{item.description}</p>
              <p className="font-semibold text-2xl md:text-left text-center">
                Price: Rs.{item.price}
              </p>
              <div className="flex flex-col md:items-center md:flex-row  gap-2 items-center my-4">
                <h2 className="font-bold  mt-4 text-lg">
                  Quantity: {item.quantity}
                </h2>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md ml-2"
                  onClick={() => {handleRemoveItem(item)
                  toastRemoveOnClick()
                  }}
                >
                  -
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md ml-2"
                  onClick={() => {handleAddItem(item)
                    toastAddOnClick()
                  }}
                >
                  +
                </button>
                <h2 className="font-bold  mt-4 text-lg">
                  Total: Rs.{calculateSubtotal(item).toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">
          Total Amount: Rs.{totalCost.toFixed(2)}
        </h2>
        <button className="bg-slate-700 px-4 py-2 rounded-lg my-4 text-center font-semibold text-white mt-4">
          Pay: Rs.{totalCost.toFixed(2)}
        </button>
      </div>
    </div>
    <ToastContainer/>
    </>

  ) : <h1 className="text-center font-semibold text-4xl my-4 h-screen w-screen">Your cart is empty</h1>;
  
};

export default Cartcopy;
