import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/products/CartActions";
import {
  fetchProductList,
  fetchProductListFailure,
  fetchProductListRequest,
  fetchProductListSuccess,
  getProductListApi,
} from "../../../redux/actions/products/ProductListActions";
import OutOfStock from "../../others/OutOfStock";
import "./productlisting.css";
import { Link } from "react-router-dom";
import Loading from "../../others/Loading";
import ErrorPage from "../../others/ErrorPage";

const ProductListing = () => {
  const dispatch = useDispatch();
  // const productList = useSelector(
  //   (state) => state.productListReducer.productList
  // );
  // const filteredData = useSelector(
  //   (state) => state.productListReducer.filteredData
  // );
  // const error = useSelector(
  //   (state) => state.productListReducer.filteredData.error
  // );
  const { productList, filteredData, isLoading, error } = useSelector(
    (state) => state.productListReducer
  );
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  useEffect(() => {
    dispatch(getProductListApi());
  }, []);

  // const getProductListApi = async () => {
  //   // const apikey = process.env.REACT_APP_API_KEY;
  //   // const response = await fetch(
  //   //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  //   // );
  //   try {
  //     dispatch(fetchProductListRequest());
  //     const response = await fetch(`http://localhost:8000/shop`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       dispatch(fetchProductListSuccess(data.products));
  //     } else {
  //       dispatch(fetchProductListSuccess([]));
  //       throw new Error("Product List");
  //     }
  //   } catch (error) {
  //     dispatch(fetchProductListFailure(error.message));
  //   }
  // };

  if (isLoading) {
    return <Loading title={"Product List"} />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }
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
                  <Link to={`/detail/${id}`}>
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
        ) : filteredData.error ? (
          <OutOfStock error={filteredData.error} />
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
                  <Link to={`/detail/${id}`}>
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
