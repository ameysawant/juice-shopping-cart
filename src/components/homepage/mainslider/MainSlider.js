import React, { useEffect } from "react";
import "./mainslider.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMainSlider,
  fetchMainSliderFailure,
  fetchMainSliderRequest,
  fetchMainSliderSuccess,
  getMainSliderApi,
} from "../../../redux/actions/homepage/MainSliderActions";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import ErrorPage from "../../others/ErrorPage";
import Loading from "../../others/Loading";

const MainSlider = () => {
  const dispatch = useDispatch();
  // const mainSliderData = useSelector(
  //   (state) => state.mainSliderReducer.mainSliderData
  // );
  const { isLoading, error, mainSliderData } = useSelector(
    (state) => state.mainSliderReducer
  );

  useEffect(() => {
    dispatch(getMainSliderApi());
  }, []);

  // const getMainSliderApi = async () => {
  //   // const apikey = process.env.REACT_APP_API_KEY;
  //   // const response = await fetch(
  //   //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  //   // );
  //   try {
  //     dispatch(fetchMainSliderRequest());
  //     const response = await fetch(`http://localhost:8000/homepage`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       dispatch(fetchMainSliderSuccess(data.mainSlider));
  //     } else {
  //       throw new Error("MainSlider");
  //     }
  //   } catch (error) {
  //     dispatch(fetchMainSliderFailure(error.message));
  //   }
  // };

  if (isLoading) {
    return <Loading title={"MainSlider"} />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {mainSliderData &&
          mainSliderData.map((item) => {
            const { id, img, heading, description, smallHeading } = item;
            const bgColours = ["", "bg-yellow", "bg-green", "bg-red"];
            return (
              <SwiperSlide key={id}>
                <div
                  className={`dvMainSlider d-flex align-items-center ${bgColours[id]}`} //1
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <img src={img} alt={heading} className="img-fluid" />
                      </div>
                      <div className="col-md-6 text-center text-md-left d-md-flex flex-column align-items-start justify-content-center">
                        <h1 className="heading-lg">{heading}</h1>
                        <p className="py-2">{description}</p>
                        <button className="btn btn-black">Shop</button>
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

export default MainSlider;
