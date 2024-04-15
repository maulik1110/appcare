import React from "react";
import { alldogitem } from "../../utils/alldogitem";
import SearchAndFilter from "./SearchAndFilter";
import Shop from "../Shop";

const DogPage = () => {
  return (
    <div>
      {/* <Shop/> */}
      <SearchAndFilter data={alldogitem} />
    </div>
  );
};

export default DogPage;
