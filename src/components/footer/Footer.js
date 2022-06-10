import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="dvFooter pt-3 pb-3">
      <div className="container-lg">
        <div className="row dvLogo">
          <div className="col-12 text-center mb-3">
            <img
              width={50}
              src="https://static.wixstatic.com/media/2c0034_a27b95faba1d432fbddcf6ac4e9683ba~mv2.png"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 mb-3">
            <div className="row">
              <div className="col-6 col-md-6 col-xl-12 mb-3">
                <h6 className="heading-sm">AboutUs</h6>
                <p>
                  Footer Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="col-6 col-md-6 col-xl-12 mb-3">
                <h6 className="heading-sm">Contact Us</h6>
                <p>+91 0000-000-000</p>
                <p>sample@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3 dvLinks">
            <h6 className="heading-sm">Shop</h6>
            <ul>
              <li>
                <a href="">Process</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Beyond the Bottle</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3 dvLinks">
            <h6 className="heading-sm">Learn</h6>
            <ul>
              <li>
                <a href="">Subscriptions</a>
              </li>
              <li>
                <a href="">Value Packs</a>
              </li>
              <li>
                <a href="">Cleanses</a>
              </li>
              <li>
                <a href="">Juices</a>
              </li>
              <li>
                <a href="">Almons Milks</a>
              </li>
              <li>
                <a href="">Protein Milkshake</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-xl-3 dvSubscribe mb-3">
            <h6 className="heading-sm">Subscribe Us</h6>
            <form>
              <input
                type="text"
                className="f-control"
                placeholder="email@example"
              />
              <button className="btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="row dvSocial">
          <div className="col-12 text-center mb-2">
            <a href="" className="mx-1">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="" className="mx-1">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="" className="mx-1">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="col-12 text-center">
            <p>
              Copyright &copy; 2022 All Rights Reserved. Website designed and
              developed by Kishori Tutorials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
