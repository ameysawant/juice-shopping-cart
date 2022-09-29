import React, { useEffect } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader } from "../../redux/actions/header/HeaderActions";

const Header = () => {
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.headerReducer.hData.logo);
  const parentLinks = useSelector(
    (state) => state.headerReducer.hData.parentLinks
  );
  // console.log(headerData);

  useEffect(() => {
    getHeaderApi();
  }, []);

  const getHeaderApi = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    );
    const data = await response.json();
    console.log(data.homepage.header);
    dispatch(fetchHeader(data.homepage.header));
  };

  return (
    <>
      <div className="dvHeader">
        <div className="container-lg">
          <div className="row align-items-center pt-1">
            <div className="col d-lg-none">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="col col-lg-auto text-center text-lg-left">
              <img width={50} src={logo && logo.url} alt="" />
            </div>
            <div className="dvSlideMenu col-lg-auto px-0 px-lg-3">
              <button className="btn btn-black closeBtn d-lg-none">
                <i className="fa-solid fa-xmark"></i>
              </button>
              <ul className="dvMenu">
                {parentLinks &&
                  parentLinks.map((item) => {
                    const { id, link } = item;
                    return (
                      <li key={id}>
                        <a href="">{link}</a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col col-lg-auto ml-lg-auto text-right">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
