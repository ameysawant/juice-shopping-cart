import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="dvAbout py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 mb-4 text-center">
              <h2 className="heading-lg">Juice Shop</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual.In publishing and
                graphic design.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 text-center mb-4">
              <img
                width={50}
                src="https://static.wixstatic.com/media/2c0034_ca86212b4cb8403a91414198dcb82618~mv2.png"
                alt=""
                className="img-fluid"
              />
              <h6 className="heading-sm py-2">Always Fresh</h6>
              <p>
                Always Fresh Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 text-center mb-4">
              <img
                width={50}
                src="https://static.wixstatic.com/media/2c0034_e72cf1ca3caa436cb4016c99f5a98c7c~mv2.png"
                alt=""
                className="img-fluid"
              />
              <h6 className="heading-sm py-2">Always Fresh</h6>
              <p>
                Always Fresh Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 text-center mb-4">
              <img
                width={50}
                src="https://static.wixstatic.com/media/2c0034_89082b03c72343ba8c281296a5ca6e40~mv2.png"
                alt=""
                className="img-fluid"
              />
              <h6 className="heading-sm py-2">Always Fresh</h6>
              <p>
                Always Fresh Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
