import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchYoutube,
  fetchYoutubeFailure,
  fetchYoutubeRequest,
  fetchYoutubeSuccess,
  getYoutubeApi,
} from "../../../redux/actions/homepage/YoutubeActions";
import YoutubeVideo from "../../modals/YoutubeVideo";
import "./youtube.css";
import { openModal } from "../../../redux/actions/modals/ModalActions";
import ErrorPage from "../../others/ErrorPage";
import Loading from "../../others/Loading";

const Youtube = () => {
  const dispatch = useDispatch();
  const { isLoading, error, youtubeData } = useSelector(
    (state) => state.youtubeReducer
  );

  useEffect(() => {
    dispatch(getYoutubeApi());
  }, []);

  // const getYoutubeApi = async () => {
  //   // const apikey = process.env.REACT_APP_API_KEY;
  //   // const response = await fetch(
  //   //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  //   // );
  //   try {
  //     dispatch(fetchYoutubeRequest());
  //     const response = await fetch(`http://localhost:8000/homepage`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       dispatch(fetchYoutubeSuccess(data.youtube));
  //     } else {
  //       throw new Error("Youtube");
  //     }
  //   } catch (error) {
  //     dispatch(fetchYoutubeFailure(error.message));
  //   }
  // };

  if (isLoading) {
    return <Loading title={"Youtube"} />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      {youtubeData && (
        <div
          className="dvYoutube"
          style={{
            background: `url(${youtubeData.img})`,
          }}
        >
          <div className="opacity text-center">
            <h2 className="heading-lg">{youtubeData.heading}</h2>
            <p className="py-3">{youtubeData.description}</p>
            <button
              className="btn"
              onClick={() => dispatch(openModal("youtube-modal"))}
            >
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      )}

      {/* {isClicked ? <YoutubeVideo isClicked={isClicked} /> : ""} */}
    </>
  );
};

export default Youtube;
