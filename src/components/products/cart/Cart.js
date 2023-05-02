import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  minusQty,
  plusQty,
  removeItem,
} from "../../../redux/actions/products/CartActions";
import "./cart.css";
import { closeModal } from "../../../redux/actions/modals/ModalActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  // console.log(cartItems);

  // const arr = [1, 2, 3];
  // const subtotal = arr.reduce((total, item) => {
  //   return total + item; //3 + 3
  // }, 0);

  const subtotal = cartItems.reduce((total, item) => {
    return (
      total + (item.quantity <= 0 ? item.price : item.price * item.quantity)
    );
  }, 0);

  // console.log(subtotal);

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between">
          <h6 className="heading-sm">
            Cart Items {cartItems && cartItems.length}
          </h6>
          <button
            className="btn clearAllBtn"
            onClick={() => dispatch(clearAll([]))}
          >
            Clear All
          </button>
        </div>
        {cartItems && cartItems.length <= 0 && (
          <div className="col-12">
            <h6 className="heading-sm text-red">Cart is Empty</h6>
            <p className="text-red">
              Go ahead, order some items from the menu.
            </p>
          </div>
        )}
      </div>
      <div className="d-flex flex-wrap scrollbar">
        {cartItems &&
          cartItems.map((item) => {
            const { id, heading, size, packOf, price, quantity } = item;
            return (
              <div key={id} className="col-12 mb-3 px-lg-0">
                <div className="bg-gray">
                  <div className="d-flex justify-content-between">
                    <h6 className="heading-sm">{heading}</h6>
                    <button
                      className="btn removeBtn"
                      onClick={() => dispatch(removeItem(id))}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="d-flex">
                    <span className="size mr-3">{size}</span>
                    <span className="packs">{packOf}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="quantity d-flex ">
                      <button
                        className="btn p-2"
                        onClick={() => dispatch(plusQty(id))}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <input
                        className="f-control"
                        type="text"
                        readOnly
                        placeholder={quantity}
                      />
                      <button
                        className="btn p-2"
                        onClick={() => dispatch(minusQty(id))}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    <div className="price">
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {quantity <= 0 ? price : quantity * price}
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
          <h6 className="heading-sm">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {subtotal}
          </h6>
        </div>
        <div className="col-12">
          <p className="small-text">Extra charges may apply.</p>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className={`btn ${
            cartItems.length <= 0 ? "btn-disabled" : "btn-black"
          } w-100`}
          disabled={cartItems.length <= 0 ? true : false}
        >
          PROCEED
        </button>
      </div>
    </>
  );
};

export default Cart;
