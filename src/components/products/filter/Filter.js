import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFilters,
  sendFilters,
} from "../../../redux/actions/products/FilterActions";
import "./filter.css";
import { closeModal } from "../../../redux/actions/modals/ModalActions";

const Filter = () => {
  const dispatch = useDispatch();
  const filterList = useSelector((state) => state.filterReducer.filterList);
  // console.log(filterList);

  const checkedID = useSelector((state) => state.productListReducer.checkedID);
  console.log(checkedID);

  useEffect(() => {
    getFilterApi();
  }, []);

  const getFilterApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/shop`);
    const data = await response.json();
    // console.log(data.filters);
    dispatch(fetchFilters(data.filters));
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-header d-flex justify-content-between align-items-center mb-3 d-lg-none">
          <h6 className="heading-sm">Filter</h6>
          <i
            className="fa-solid fa-xmark closeBtn btn btn-black py-1"
            onClick={() => dispatch(closeModal(false))}
          ></i>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-12 mb-3">
              {filterList &&
                filterList.map((item) => {
                  const { id, name } = item;
                  return (
                    <div key={id}>
                      <h6
                        className={`heading-sm text-lg-right ${
                          id === 6 ? "mt-3" : id === 9 ? "mt-3" : ""
                        }`}
                      >
                        {id === 1
                          ? "Categories"
                          : id === 6
                          ? "Size"
                          : id === 9
                          ? "Packs"
                          : ""}
                      </h6>
                      <label className="d-lg-flex flex-lg-row-reverse">
                        <input
                          defaultChecked={checkedID === id}
                          type="radio"
                          name="radio"
                          onChange={() => dispatch(sendFilters({ id, name }))}
                        />
                        <span> {name}</span>
                      </label>
                    </div>
                  );
                })}
              {/* <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>Juices</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>Almond Milks</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>Cleanses</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span> Protein Milkshake</span>
              </label> */}
            </div>
            {/* <div className="col-6 col-md-4 col-lg-12 mb-3">
              <h6 className="heading-sm text-lg-right">Size</h6>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span> 200ml</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>250ml</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>1itre</span>
              </label>
            </div>
            <div className="col-6 col-md-4 col-lg-12 mb-3">
              <h6 className="heading-sm text-lg-right">Packs</h6>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span> Pack of 5</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>Pack of 10</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>Pack of 15</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span>Pack of 20</span>
              </label>
            </div> */}
          </div>
        </div>
        <div className="modal-footer d-lg-none">
          <button
            className="btn btn-black w-100"
            onClick={() => dispatch(closeModal(false))}
          >
            APPLY FILTERS
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
