import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="dvHeader">
        <div className="container-lg">
          <div className="row align-items-center pt-1">
            <div className="col d-lg-none">
              <i class="fa-solid fa-bars"></i>
            </div>
            <div className="col col-lg-1 text-center text-lg-left">
              <img
                width={50}
                src="https://static.wixstatic.com/media/2c0034_a27b95faba1d432fbddcf6ac4e9683ba~mv2.png"
                alt=""
              />
            </div>
            <div className="dvSlideMenu col-lg-10 px-0 px-lg-3">
              <button className="btn btn-black closeBtn d-lg-none">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <ul className="dvMenu">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Signup</a>
                </li>
              </ul>
            </div>
            <div className="col col-lg-1 text-right">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
