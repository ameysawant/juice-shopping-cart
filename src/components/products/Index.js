import React from "react";
import Filter from "./filter/Filter";
import ProductListing from "./productlisting/ProductListing";
import Cart from "./cart/Cart";
import ProductDetail from "./productdetail/ProductDetail";
import { useSelector } from "react-redux";

const Index = () => {
  const modalState = useSelector((state) => state.modalReducer.modalState);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="dvFilter modal col-lg-3 col-xl-2 d-none">
            <div className="sticky-top top90">
              <Filter />
            </div>
          </div>
          <div className="dvProductListing col-12 col-lg-6 col-xl-7 col-xxl-8">
            <ProductListing />
          </div>
          <div
            className={`dvCart modal col-lg-3 col-xl-3 col-xxl-2 ${
              modalState === true ? "" : "d-none d-lg-block"
            }`}
          >
            <div className="sticky-top top90 d-flex justify-content-center align-items-center align-items-lg-start h-100 h-lg-auto">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      {/* <ProductDetail /> */}
    </>
  );
};

export default Index;
