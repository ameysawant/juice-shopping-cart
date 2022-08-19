import React from "react";
import Filter from "./filter/Filter";
import ProductListing from "./productlisting/ProductListing";
import Cart from "./cart/Cart";
import ProductDetail from "./productdetail/ProductDetail";

const Index = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="dvFilter modal col-lg-3 col-xl-2">
            <Filter />
          </div>
          <div className="dvProductListing col-12 col-lg-6 col-xl-7 col-xxl-8">
            <ProductListing />
          </div>
          <div className="dvCart modal col-lg-3 col-xl-3 col-xxl-2">
            <Cart />
          </div>
        </div>
      </div>
      {/* <ProductDetail /> */}
    </>
  );
};

export default Index;
