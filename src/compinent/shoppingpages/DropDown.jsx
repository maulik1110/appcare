import React, { useState } from 'react'

const DropDown = ({options}) => {
    const [selectedFilter, setSelectedFilter] = useState("All");
  const handleSelectChange = (e) => {
    setSelectedFilter(e.target.value);
  };
  return (
    <div>
        <div>
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
        </div>
    </div>
  )
}

export default DropDown