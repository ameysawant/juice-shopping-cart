import React, { useEffect } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNavBg,
  closeSlideMenu,
  fetchHeader,
  fetchHeaderFailure,
  fetchHeaderRequest,
  fetchHeaderSuccess,
  openSlideMenu,
  getHeaderApi,
} from "../../redux/actions/header/HeaderActions";
import { Link, useLocation } from "react-router-dom";
import { openModal } from "../../redux/actions/modals/ModalActions";
import ErrorPage from "../others/ErrorPage";
import Loading from "../others/Loading";

const Header = () => {
  const dispatch = useDispatch();
  const hData = useSelector((state) => state.headerReducer.hData);
  const isLoading = useSelector((state) => state.headerReducer.isLoading);
  const error = useSelector((state) => state.headerReducer.error);
  // const logo = useSelector((state) => state.headerReducer.hData.logo);
  // const parentLinks = useSelector(
  //   (state) => state.headerReducer.hData.parentLinks
  // );
  const bgColour = useSelector((state) => state.headerReducer.background);
  const isSlide = useSelector((state) => state.headerReducer.isSlide);
  // console.log(isSlide);

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const pathUrl = useLocation();
  // console.log(pathUrl);

  useEffect(() => {
    dispatch(getHeaderApi());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBG);
    return () => {
      window.removeEventListener("scroll", changeBG);
    };
  }, [bgColour]);

  // const getHeaderApi = async () => {
  //   // const apikey = process.env.REACT_APP_API_KEY;
  //   // const response = await fetch(
  //   //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  //   // );
  //   try {
  //     dispatch(fetchHeaderRequest());
  //     const response = await fetch(`http://localhost:8000/homepage`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       dispatch(fetchHeaderSuccess(data.header));
  //     } else {
  //       throw new Error("Header");
  //     }
  //   } catch (error) {
  //     dispatch(fetchHeaderFailure(error.message));
  //   }
  // };

  const changeBG = () => {
    if (window.scrollY > 0) {
      dispatch(changeNavBg("bg-white"));
    } else {
      dispatch(changeNavBg("bg-transparent"));
    }
  };

  if (isLoading) {
    return <Loading title={"Header"} />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      {hData && (
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
                  <img width={50} src={hData.logo && hData.logo.url} alt="" />
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
                  {hData.parentLinks &&
                    hData.parentLinks.map((item) => {
                      const { id, link } = item;
                      // console.log(link);
                      return (
                        <li key={id}>
                          {link === "Login" ? (
                            <Link
                              to={pathUrl.pathname}
                              onClick={() => dispatch(openModal("login-modal"))}
                            >
                              {link}
                            </Link>
                          ) : link === "Sign Up" ? (
                            <Link
                              to={pathUrl.pathname}
                              onClick={() =>
                                dispatch(openModal("signup-modal"))
                              }
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
      )}
    </>
  );
};

export default Header;
