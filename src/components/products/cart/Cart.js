import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  // console.log(cartItems);
  return (
    <>
      <div className="modal-container">
        <div className="modal-header d-flex justify-content-between align-items-center mb-3 d-lg-none">
          <h6 className="heading-sm">Cart</h6>
          <i className="fa-solid fa-xmark closeBtn btn btn-black py-1"></i>
        </div>
        <div className="modal-body">
          <div className="row mb-3">
            <div className="col-12 d-flex justify-content-between">
              <h6 className="heading-sm">Cart Items 0</h6>
              <button className="btn clearAllBtn">Clear All</button>
            </div>
            <div className="col-12">
              <h6 className="heading-sm text-red">Cart is Empty</h6>
              <p className="text-red">
                Go ahead, order some items from the menu.
              </p>
            </div>
          </div>
          <div className="row scrollbar">
            {cartItems &&
              cartItems.map((item) => {
                const { id, heading, size, packOf, price } = item;
                return (
                  <div key={id} className="col-12 mb-3 pr-lg-0">
                    <div className="bg-gray">
                      <div className="d-flex justify-content-between">
                        <h6 className="heading-sm">{heading}</h6>
                        <button className="btn removeBtn">
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                      <div className="d-flex">
                        <span className="size mr-3">{size}</span>
                        <span className="packs">{packOf}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="quantity d-flex ">
                          <button className="btn p-2">
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <input
                            className="f-control"
                            type="text"
                            readOnly
                            placeholder="1"
                          />
                          <button className="btn p-2">
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </div>
                        <div className="price">
                          <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                          {price}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="row mb-2">
            <div className="col-12 d-flex justify-content-between pt-2">
              <h6 className="heading-sm">Subtotal</h6>
              <h6 className="heading-sm">0.00</h6>
            </div>
            <div className="col-12">
              <p className="small-text">Extra charges may apply.</p>
            </div>
          </div>
        </div>
        <div className="modal-footer d-lg-none">
          <button className="btn btn-black w-100">PROCEED</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
