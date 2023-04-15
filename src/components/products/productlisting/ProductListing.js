import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/products/CartActions";
import { fetchProductList } from "../../../redux/actions/products/ProductListActions";
import OutOfStock from "../../others/OutOfStock";
import "./productlisting.css";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state) => state.productListReducer.productList
  );
  const filteredData = useSelector(
    (state) => state.productListReducer.filteredData
  );
  const error = useSelector(
    (state) => state.productListReducer.filteredData.error
  );
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  // console.log(cartItems);

  useEffect(() => {
    getProductListApi();
  }, []);

  const getProductListApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/shop`);
    const data = await response.json();
    // console.log(data.products);
    dispatch(fetchProductList(data.products));
  };
  return (
    <>
      <div className="row">
        {filteredData.length <= 0 ? (
          productList.map((product) => {
            const {
              id,
              heading,
              description,
              category,
              image,
              pack,
              packOf,
              price,
              size,
            } = product;
            return (
              <div
                key={id}
                className="col-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3 text-center mb-3"
              >
                <div className="shadow">
                  {packOf === "pack of 0" ? (
                    ""
                  ) : (
                    <span className="packs">{packOf}</span>
                  )}
                  <Link to={`/${id}`}>
                    <img
                      width={60}
                      src={image}
                      alt={heading}
                      className="img-fluid"
                    />
                  </Link>
                  <h6 className="heading-sm">{heading}</h6>
                  <div className="d-flex justify-content-between">
                    <div className="price">
                      <i className="fa-solid fa-indian-rupee-sign"></i> {price}
                    </div>
                    <div className="size">{size}</div>
                  </div>
                  <button
                    disabled={
                      cartItems.find((item) => item.id === id) ? true : false
                    }
                    className={`btn ${
                      cartItems.find((item) => item.id === id)
                        ? "btn-disabled"
                        : "btn-black"
                    } w-100`}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id,
                          heading,
                          description,
                          category,
                          image,
                          pack,
                          packOf,
                          price,
                          size,
                        })
                      )
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })
        ) : error ? (
          <OutOfStock error={error} />
        ) : (
          filteredData.map((product) => {
            const {
              id,
              heading,
              description,
              category,
              image,
              pack,
              packOf,
              price,
              size,
            } = product;
            return (
              <div
                key={id}
                className="col-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3 text-center mb-3"
              >
                <div className="shadow">
                  {packOf === "pack of 0" ? (
                    ""
                  ) : (
                    <span className="packs">{packOf}</span>
                  )}
                  <Link to={`/${id}`}>
                    <img
                      width={60}
                      src={image}
                      alt={heading}
                      className="img-fluid"
                    />
                  </Link>
                  <h6 className="heading-sm">{heading}</h6>
                  <div className="d-flex justify-content-between">
                    <div className="price">
                      <i className="fa-solid fa-indian-rupee-sign"></i> {price}
                    </div>
                    <div className="size">{size}</div>
                  </div>
                  <button
                    disabled={
                      cartItems.find((item) => item.id === id) ? true : false
                    }
                    className={`btn ${
                      cartItems.find((item) => item.id === id)
                        ? "btn-disabled"
                        : "btn-black"
                    } w-100`}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id,
                          heading,
                          description,
                          category,
                          image,
                          pack,
                          packOf,
                          price,
                          size,
                        })
                      )
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })
        )}
        {/* <div className="col-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3 text-center mb-3">
          <div className="shadow">
            <span className="packs">Pack of 5</span>
            <img
              width={60}
              src="https://static.wixstatic.com/media/2c0034_2844dfb7b6dd4845ae990f66e13b2816~mv2.png"
              alt=""
              className="img-fluid"
            />
            <h6 className="heading-sm">Valencia Orange</h6>
            <div className="d-flex justify-content-between">
              <div className="price">
                <i className="fa-solid fa-indian-rupee-sign"></i> 240
              </div>
              <div className="size">1Litre</div>
            </div>
            <button className="btn w-100 btn-disabled">ADD TO CART</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ProductListing;
