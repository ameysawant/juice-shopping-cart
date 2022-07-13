import React from "react";

const Filter = () => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-header d-flex justify-content-between align-items-center mb-3 d-lg-none">
          <h6 className="heading-sm">Filter</h6>
          <i class="fa-solid fa-xmark closeBtn btn btn-black py-1"></i>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-12 mb-3">
              <h6 className="heading-sm text-lg-right">Categories</h6>
              <label className="d-lg-flex flex-lg-row-reverse">
                <input type="radio" name="radio" />
                <span> All</span>
              </label>
              <label className="d-lg-flex flex-lg-row-reverse">
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
              </label>
            </div>
            <div className="col-6 col-md-4 col-lg-12 mb-3">
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
            </div>
          </div>
        </div>
        <div className="modal-footer d-lg-none">
          <button className="btn btn-black w-100">APPLY FILTERS</button>
        </div>
      </div>
    </>
  );
};

export default Filter;
