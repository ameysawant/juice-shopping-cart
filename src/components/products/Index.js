import React from "react";
import Filter from "./filter/Filter";
import ProductListing from "./productlisting/ProductListing";
import Cart from "./cart/Cart";
import ProductDetail from "./productdetail/ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/modals/ModalActions";

const Index = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalReducer.modalState);
  const { productList } = useSelector((state) => state.productListReducer);
  window.scrollTo(0, 0);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`dvFilter modal col-lg-3 col-xl-2 ${
              modalState === "filter-modal" ? "" : "d-none d-lg-block"
            }`}
          >
            <div className="sticky-top top90 d-flex justify-content-center align-items-center align-items-lg-start h-100 h-lg-auto">
              <Filter />
            </div>
          </div>
          <div className="dvProductListing col-12 col-lg-6 col-xl-7 col-xxl-8">
            <div className="row mb-3 d-lg-none">
              <div className="col-12">
                <button
                  className={`btn ${
                    productList && productList.length <= 0
                      ? "btn-disabled"
                      : "btn-black"
                  } w-100`}
                  onClick={() => dispatch(openModal("filter-modal"))}
                  disabled={productList && productList.length <= 0 && true}
                >
                  Apply Filters
                </button>
              </div>
            </div>
            <ProductListing />
          </div>
          <div className="dvCart col-lg-3 col-xl-3 col-xxl-2 d-none d-lg-block">
            <div className="sticky-top top90">
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
