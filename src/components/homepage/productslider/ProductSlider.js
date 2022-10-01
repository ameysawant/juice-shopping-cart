import React, { useEffect } from "react";
import "./productslider.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSlider } from "../../../redux/actions/homepage/ProductSliderActions";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ProductSlider = () => {
  const dispatch = useDispatch();
  const productSliderData = useSelector(
    (state) => state.productSliderReducer.productSliderData
  );
  // console.log(productSliderData);

  useEffect(() => {
    getProductSliderApi();
  }, []);

  const getProductSliderApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/homepage`);
    const data = await response.json();
    // console.log(data);
    dispatch(fetchProductSlider(data.productSlider));
  };

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        {productSliderData &&
          productSliderData.map((item) => {
            const { id, img, heading, description, aboutJuice } = item;
            return (
              <SwiperSlide key={id}>
                <div className="dvProductSlider">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-6 px-0">
                        <img
                          src={img}
                          alt={heading}
                          className="img-fluid d-block"
                        />
                      </div>
                      <div className="col-12 col-md-6 bg-color py-4 d-flex align-items-center">
                        <div>
                          <h2 className="heading-lg">{heading}</h2>
                          <ul className="points">
                            {aboutJuice &&
                              aboutJuice.map((item) => {
                                const { id, point } = item;
                                return <li key={id}>{point}</li>;
                              })}
                          </ul>
                          <p className="py-2">{description}</p>
                          <a href="" className="btn btn-black">
                            Shop
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default ProductSlider;
