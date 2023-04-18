import React from "react";
import Cart from "../products/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modals/ModalActions";

const Modal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalReducer.modalState);
  console.log(modalState);
  return (
    <div
      className={`modal d-flex justify-content-center align-items-center ${
        modalState === "cart-modal" ? "dvCart d-lg-none" : "d-none"
      }`}
    >
      <div className="modal-container">
        <div className="modal-header d-flex justify-content-between mb-3">
          <h6 className="heading-sm">Modal Title</h6>
          <i
            className="fa-solid fa-xmark closeBtn btn btn-black py-1"
            onClick={() => dispatch(closeModal(false))}
          ></i>
        </div>
        <div className="modal-body">
          <Cart />
        </div>
        {/* <div className="modal-footer">
          <h1>modal footer</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
