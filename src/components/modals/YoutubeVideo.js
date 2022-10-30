import React from "react";
import "./youtubevideo.css";
import { useDispatch, useSelector } from "react-redux";
import { closeVideo } from "../../redux/actions/homepage/YoutubeActions";

const YoutubeVideo = ({ isClicked }) => {
  const dispatch = useDispatch();
  console.log(isClicked);
  const url = isClicked
    ? "https://www.youtube.com/embed/SKT622-qvKk?autoplay=1"
    : "https://www.youtube.com/embed/SKT622-qvKk";
  return (
    <>
      <div
        className={`dvYoutubeVideo modal ${isClicked ? "d-block" : "d-none"}`}
      >
        <div className="modal-container py-lg-0 pl-lg-0">
          <div className="modal-body">
            <i
              className="fa-solid fa-xmark closeBtn btn btn-black py-1"
              onClick={() => dispatch(closeVideo(false))}
            ></i>
            <iframe
              width="100%"
              height="500"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeVideo;
