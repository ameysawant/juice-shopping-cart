import React from "react";
import Cart from "../products/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modals/ModalActions";
import YoutubeVideo from "./YoutubeVideo";
import Login from "./Login";
import SignUp from "./SignUp";

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
  } else if (modalState === "login-modal") {
    modalContent = <Login />;
  } else if (modalState === "signup-modal") {
    modalContent = <SignUp />;
  } else {
    return null;
  }

  return (
    // modal class names
    <div
      className={`modal d-flex justify-content-center align-items-center ${
        modalState === "cart-modal"
          ? "dvCart d-lg-none"
          : modalState === "youtube-modal"
          ? "dvYoutubeVideo"
          : modalState === "login-modal"
          ? "dvLogin"
          : modalState === "signup-modal"
          ? "dvLogin"
          : "d-none"
      }`}
    >
      {/* Modal title name */}
      <div className="modal-container">
        <div
          className={`modal-header d-flex justify-content-between ${
            modalState === "login-modal" ||
            modalState === "signup-modal" ||
            modalState === "youtube-modal"
              ? ""
              : "mb-3"
          }`}
        >
          <h6
            className={`heading-sm ${
              modalState === "login-modal" ||
              modalState === "signup-modal" ||
              modalState === "youtube-modal"
                ? "d-none"
                : ""
            }`}
          >
            {modalState === "cart-modal"
              ? "Cart Items"
              : modalState === "youtube-modal"
              ? "Youtube Video"
              : modalState === "login-modal"
              ? "User Login Form"
              : modalState === "signup-modal"
              ? "User Signup Form"
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
