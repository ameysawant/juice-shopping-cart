import React, { useEffect } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNavBg,
  closeSlideMenu,
  fetchHeader,
  openSlideMenu,
} from "../../redux/actions/header/HeaderActions";
import { Link } from "react-router-dom";
import { openModal } from "../../redux/actions/modals/ModalActions";

const Header = () => {
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.headerReducer.hData.logo);
  const parentLinks = useSelector(
    (state) => state.headerReducer.hData.parentLinks
  );
  const bgColour = useSelector((state) => state.headerReducer.background);
  const isSlide = useSelector((state) => state.headerReducer.isSlide);
  // console.log(isSlide);

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  useEffect(() => {
    getHeaderApi();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBG);
    return () => {
      window.removeEventListener("scroll", changeBG);
    };
  }, [bgColour]);

  const getHeaderApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/homepage`);
    const data = await response.json();
    // console.log(data);
    dispatch(fetchHeader(data.header));
  };

  const changeBG = () => {
    if (window.scrollY > 0) {
      dispatch(changeNavBg("bg-white"));
    } else {
      dispatch(changeNavBg("bg-transparent"));
    }
  };

  return (
    <>
      <div className={`dvHeader ${bgColour}`}>
        <div className="container-lg">
          <div className="row align-items-center pt-1">
            <div className="col d-lg-none">
              <i
                className="fa-solid fa-bars"
                onClick={() => dispatch(openSlideMenu(true))}
              ></i>
            </div>
            <div className="col col-lg-auto text-center text-lg-left">
              <Link to="/">
                <img width={50} src={logo && logo.url} alt="" />
              </Link>
            </div>
            <div
              className="dvSlideMenu col-lg-auto px-0 px-lg-3"
              style={{ left: isSlide ? "0" : "-100%" }}
            >
              <button
                className="btn btn-black closeBtn d-lg-none"
                onClick={() => dispatch(closeSlideMenu(false))}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <ul className="dvMenu">
                {parentLinks &&
                  parentLinks.map((item) => {
                    const { id, link } = item;
                    console.log(link);
                    return (
                      <li key={id}>
                        {link === "Login" ? (
                          <Link
                            to=""
                            onClick={() => dispatch(openModal("login-modal"))}
                          >
                            {link}
                          </Link>
                        ) : link === "Sign Up" ? (
                          <Link
                            to=""
                            onClick={() => dispatch(openModal("signup-modal"))}
                          >
                            {link}
                          </Link>
                        ) : (
                          <Link
                            to={link}
                            onClick={() => dispatch(closeSlideMenu(false))}
                          >
                            {link}
                          </Link>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col col-lg-auto ml-lg-auto text-right d-lg-none">
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => dispatch(openModal("cart-modal"))}
              ></i>
              {cartItems && cartItems.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
