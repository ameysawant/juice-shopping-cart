import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchYoutube,
  openVideo,
} from "../../../redux/actions/homepage/YoutubeActions";
import YoutubeVideo from "../../modals/YoutubeVideo";
import "./youtube.css";

const Youtube = () => {
  const dispatch = useDispatch();
  const youtubeData = useSelector((state) => state.youtubeReducer.youtubeData);
  const isClicked = useSelector((state) => state.youtubeReducer.isClicked);
  // console.log(isClicked);

  useEffect(() => {
    getYoutubeApi();
  }, []);

  const getYoutubeApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/homepage`);
    const data = await response.json();
    // console.log(data);
    dispatch(fetchYoutube(data.youtube));
  };

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
            <button className="btn" onClick={() => dispatch(openVideo(true))}>
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      )}

      {isClicked ? <YoutubeVideo isClicked={isClicked} /> : ""}
    </>
  );
};

export default Youtube;
