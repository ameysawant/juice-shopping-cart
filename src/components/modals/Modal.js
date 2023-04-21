import React from "react";
import Cart from "../products/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modals/ModalActions";
import YoutubeVideo from "./YoutubeVideo";

const Modal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalReducer.modalState);
  console.log(modalState);

  const url =
    modalState === "youtube-modal"
      ? "https://www.youtube.com/embed/SKT622-qvKk?autoplay=1"
      : "https://www.youtube.com/embed/SKT622-qvKk";

  let modalContent;

  if (modalState === "cart-modal") {
    modalContent = <Cart />;
  } else if (modalState === "youtube-modal") {
    modalContent = <YoutubeVideo url={url} />;
  } else {
    return null;
  }

  return (
    <div
      className={`modal d-flex justify-content-center align-items-center ${
        modalState === "cart-modal"
          ? "dvCart d-lg-none"
          : modalState === "youtube-modal"
          ? "dvYoutubeVideo"
          : "d-none"
      }`}
    >
      <div className="modal-container">
        <div className="modal-header d-flex justify-content-between mb-3">
          <h6 className="heading-sm">
            {modalState === "cart-modal"
              ? "Cart Items"
              : modalState === "youtube-modal"
              ? "Youtube Video"
              : ""}
          </h6>
          <i
            className="fa-solid fa-xmark closeBtn btn btn-black py-1"
            onClick={() => dispatch(closeModal(false))}
          ></i>
        </div>
        <div className="modal-body">{modalContent}</div>
        {/* <div className="modal-footer">
          <h1>modal footer</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
