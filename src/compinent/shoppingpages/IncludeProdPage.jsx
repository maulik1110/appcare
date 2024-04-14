import React, { useState } from "react";

const IncludeProdPage = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const handleSelectChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  console.log(selectedFilter);
  console.log(data);
  return (
    <div className="md:flex my-4 w-screen h-screen ">
      <form action="">
        <input placeholder="Search" type="text" name="" id="" />
      </form>
      <div>
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
            Popular
          </option>
          <option value="new">New</option>
          <option value="highRated">High Rated</option>
        </select>
        <div className="price"></div>
      </div>
    </div>
  );
};

export default IncludeProdPage;
