import React from "react";
import Filter from "./filter/Filter";
import ProductListing from "./productlisting/ProductListing";
import Cart from "./cart/Cart";

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="dvFilter modal col-lg-3">
            <Filter />
          </div>
          <div className="dvProductListing col-sm-6">
            <ProductListing />
          </div>
          <div className="dvCart col-lg-3">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
