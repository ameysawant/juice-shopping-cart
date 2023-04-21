import React from "react";
import "./youtubevideo.css";

const YoutubeVideo = ({ url }) => {
  return (
    <>
      <iframe
        width="100%"
        height="500"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default YoutubeVideo;
