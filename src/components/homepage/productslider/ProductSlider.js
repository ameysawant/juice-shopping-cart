import React from "react";
import "./productslider.css";

const ProductSlider = () => {
  return (
    <>
      <div className="dvProductSlider">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 px-0">
              <img
                src="https://static.wixstatic.com/media/2c0034_4b4539716bfe4376ae643cb8cb46053e~mv2.png"
                alt=""
                className="img-fluid d-block"
              />
            </div>
            <div className="col-12 col-md-6 bg-color py-4 d-flex align-items-center">
              <div>
                <h2 className="heading-lg">Valencia Orange</h2>
                <ul className="points">
                  <li>Valencia</li>
                  <li>Fresh</li>
                  <li>Natural</li>
                </ul>
                <p className="py-2">
                  Valencia Food Safety Fresh Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard.
                </p>
                <a href="" className="btn btn-black">
                  Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
