import React from "react";
import loadinggif from "../../assets/loadinggif.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Overinclude = ({ data, loading, loadmore, handleAddToCart }) => {
  const toastOnClick = () => {
    toast("Added to cart");
  };
  return (
    <>
      <div className="w-full min-h-screen flex-wrap p-4 flex flex-col justify-between">
        <div className="w-full flex-wrap flex justify-evenly items-start p-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="md:w-[18%] w-full md:h-96 min-h-[50vh] hover:scale-[0.98] duration-300 transition-all rounded-lg my-2 bg-gray-100 p-2 flex flex-col justify-between items-start"
              >
                <img
                  className="w-full h-52 object-cover rounded-lg mb-2"
                  src={item.imageUrl}
                  alt=""
                />
                <h1 className="font-semibold text-sm my-1 tracking-tight mb-2">
                  {item.title}
                </h1>
                <h3 className="text-sm mb-2">{item.meta_category}</h3>
                <div className="w-full flex justify-between">
                  <button className="md:px-2 md:py-2 px-2 py-1 bg-gray-400 rounded-lg cursor-default font-semibold">
                    Rs.{item.price}/-
                  </button>
                  <button
                    // onClick={() => handleAddToCart(item)}
                    onClick={() => {
                      handleAddToCart(item);
                      toastOnClick(); // Trigger toast notification
                    }}
                    className="md:px-4 md:py-2 px-2 py-1 rounded-lg bg-gray-300 "
                  >
                    Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {loading && (
          <img
            className="w-screen h-screen object-cover rounded-lg"
            src={loadinggif}
            alt="Loading..."
          />
        )}
        {!loading && (
          <button
            onClick={loadmore}
            className="px-4 py-2 bg-red-700 rounded-md my-5 text-white mx-auto"
          >
            Load More
          </button>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Overinclude;
