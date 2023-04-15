import React, { useEffect } from "react";
import Cart from "../cart/Cart";
import "./productdetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../../../redux/actions/products/ProductDetailActions";
import { addToCart } from "../../../redux/actions/products/CartActions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  // console.log(productID);

  const singleItem = useSelector(
    (state) => state.productDetailReducer.productDetailItems
  );
  console.log(singleItem);

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  // const singleItem = productList.filter(
  //   (item) => item.id === parseInt(productID)
  // );

  useEffect(() => {
    if (productID !== "") {
      getProductDetailApi();
    }
  }, [productID]);

  const getProductDetailApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/shop`);
    const data = await response.json();
    // console.log(data.products);
    dispatch(fetchProductDetail({ data: data.products, productID }));
  };

  return (
    <>
      {singleItem &&
        singleItem.map((item) => {
          const {
            id,
            heading,
            category,
            description,
            detailsTable,
            image,
            pack,
            packOf,
            size,
            price,
          } = item;
          return (
            <div key={id} className="dvProductDetail">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-xl-9 col-xxl-10">
                    <div className="row mb-4">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 col-lg-4 text-center">
                            <img
                              src={image}
                              alt={heading}
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-12 col-lg-8 text-center text-lg-left">
                            <h2 className="heading-lg">{heading}</h2>
                            <p>{description}</p>
                            <p className="py-2">
                              <span className="price pr-2">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                {price}
                              </span>
                              <span className="size px-2">{size}</span>
                              <span className="packs px-2">{packOf}</span>
                              <span className="category pl-2">{category}</span>
                            </p>
                            <button
                              disabled={
                                cartItems.find((item) => item.id === id)
                                  ? true
                                  : false
                              }
                              className={`btn ${
                                cartItems.find((item) => item.id === id)
                                  ? "btn-disabled"
                                  : "btn-black"
                              } `}
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
                            {detailsTable &&
                              detailsTable.map((item) => {
                                const { id, details, weight, glass250ml } =
                                  item;
                                return (
                                  <tr key={id}>
                                    <td>{details}</td>
                                    <td>{weight}</td>
                                    <td>{glass250ml}</td>
                                  </tr>
                                );
                              })}
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
          );
        })}
    </>
  );
};

export default ProductDetail;
