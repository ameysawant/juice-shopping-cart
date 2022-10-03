import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooter } from "../../redux/actions/footer/FooterActions";
import "./footer.css";

const Footer = () => {
  const dispatch = useDispatch();
  const footerData = useSelector((state) => state.footerReducer.footerData);
  const contactLinks = useSelector(
    (state) => state.footerReducer.footerData.contactLinks
  );
  const shopLinks = useSelector(
    (state) => state.footerReducer.footerData.shopLinks
  );
  const learnLinks = useSelector(
    (state) => state.footerReducer.footerData.learnLinks
  );
  // console.log(footerData);

  useEffect(() => {
    getFooterApi();
  }, []);

  const getFooterApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/homepage`);
    const data = await response.json();
    // console.log(data.footer);
    dispatch(fetchFooter(data.footer));
  };

  return (
    <>
      {footerData && (
        <div className="dvFooter pt-3 pb-3">
          <div className="container-lg">
            <div className="row dvLogo">
              <div className="col-12 text-center mb-3">
                <img width={50} src={footerData.img} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-xl-3 mb-3">
                <div className="row">
                  <div className="col-6 col-md-6 col-xl-12 mb-3">
                    <h6 className="heading-sm">{footerData.about}</h6>
                    <p>{footerData.aboutText}</p>
                  </div>
                  <div className="col-6 col-md-6 col-xl-12 mb-3">
                    <h6 className="heading-sm">{footerData.contact}</h6>
                    {contactLinks &&
                      contactLinks.map((item) => {
                        const { id, link } = item;
                        return <p key={id}>{link}</p>;
                      })}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3 dvLinks">
                <h6 className="heading-sm">{footerData.shop}</h6>
                <ul>
                  {shopLinks &&
                    shopLinks.map((item) => {
                      const { id, link } = item;
                      return (
                        <li key={id}>
                          <a href="">{link}</a>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="col-6 col-md-3 mb-3 dvLinks">
                <h6 className="heading-sm">{footerData.learn}</h6>
                <ul>
                  {learnLinks &&
                    learnLinks.map((item) => {
                      const { id, link } = item;
                      return (
                        <li key={id}>
                          <a href="">{link}</a>
                        </li>
                      );
                    })}
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
                <p>{footerData.copyRightText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
