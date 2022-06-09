import React from "react";
import "./youtube.css";

const Youtube = () => {
  return (
    <>
      <div
        className="dvYoutube"
        style={{
          background: `url(https://static.wixstatic.com/media/2c0034_fc43f01850924a8e9cf5695d060ff42f~mv2.png)`,
        }}
      >
        <div className="opacity text-center">
          <h2 className="heading-lg">Only Juice Nothing Else</h2>
          <p className="py-3">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual.In publishing and graphic
            design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual.
          </p>
          <button className="btn">
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Youtube;
