import React from "react";
import Cart from "../cart/Cart";
import "./productdetail.css";

const ProductDetail = () => {
  return (
    <>
      <div className="dvProductDetail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9 col-xxl-10">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                      <img
                        src="https://static.wixstatic.com/media/2c0034_2844dfb7b6dd4845ae990f66e13b2816~mv2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-lg-8 text-center text-lg-left">
                      <h2 className="heading-lg">Valencia Orange</h2>
                      <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual.
                      </p>
                      <p className="py-2">
                        <span className="price pr-2">
                          <i className="fa-solid fa-indian-rupee-sign"></i>240
                        </span>
                        <span className="size px-2">1Litre</span>
                        <span className="packs px-2">pack of 5</span>
                        <span className="category pl-2">Juice</span>
                      </p>
                      <button className="btn btn-black">ADD TO CART</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Weight</th>
                        <th>1Glass 250ml</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td>Valencia Orange amount somehting.</td>
                        <td>250ml</td>
                        <td>456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="dvCart col-lg-4 col-xl-3 col-xxl-2 d-none d-lg-block">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
