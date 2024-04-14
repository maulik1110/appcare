import React from "react";

const ReviewDisplay = ({ reviews }) => {
  return (
    <div className="text-black rounded-lg p-4 w-full bg-gradient-to-br from-blue-200 to-purple-300">
      <h2 className="text-center font-semibold text-3xl">
        Customer Reviews👌
      </h2>
      <div className="flex justify-start flex-wrap flex-col md:flex-row gap-2 my-4">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="p-4 md:w-[30vw] w-full h-[20vh] rounded-lg bg-white shadow-lg"
          >
            <h1 className="font-semibold text-xl">{item.name},</h1>
            <p className="text-md text-zinc-500">{item.experience}</p>
            <hr className="w-full h-2 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewDisplay;
