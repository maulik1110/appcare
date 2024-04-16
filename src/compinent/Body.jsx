import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import DogPage from "./shoppingpages/DogPage";
import CatPage from "./shoppingpages/CatPage";
import ClothPage from "./shoppingpages/ClothPage";
import TagsPage from "./shoppingpages/TagsPage";
import Shop from "./Shop";
import GamePage from "./shoppingpages/GamePage";
import ToysPage from "./shoppingpages/ToysPage";
import Cartcopy from "./Cartcopy";
import JoinUs from "./JoinUs";

const Body = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />}>
          <Route index element={<Navigate to="dogproducts" />} /> {/* Default redirect */}
          <Route path="dogproducts" element={<DogPage />} />
          <Route path="catproducts" element={<CatPage />} />
          <Route path="tagproducts" element={<TagsPage />} />
          <Route path="clothproducts" element={<ClothPage />} />
          <Route path="gameproducts" element={<GamePage />} />
          <Route path="toyproducts" element={<ToysPage />} />
        </Route>
        <Route path="/cart" element={<Cartcopy />} />
        {/* <Route path="/joinus" element={<JoinUs />} /> */}

      </Routes>
      <Footer />
    </div>
  );
};

export default Body;
