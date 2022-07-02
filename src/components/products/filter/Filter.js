import React from "react";

const Filter = () => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-header d-flex justify-content-between align-items-center mb-3 d-lg-none">
          <h6 className="heading-sm">Modal Title</h6>
          <i class="fa-solid fa-xmark closeBtn"></i>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-12 mb-3">
              <h6 className="heading-sm">Categories</h6>
              <label>
                <input type="radio" name="radio" />
                All
              </label>
              <label>
                <input type="radio" name="radio" />
                Juices
              </label>
              <label>
                <input type="radio" name="radio" />
                Almond Milks
              </label>
              <label>
                <input type="radio" name="radio" />
                Cleanses
              </label>
              <label>
                <input type="radio" name="radio" />
                Protein Milkshake
              </label>
            </div>
            <div className="col-6 col-md-4 col-lg-12 mb-3">
              <h6 className="heading-sm">Categories</h6>
              <label>
                <input type="radio" name="radio" />
                All
              </label>
              <label>
                <input type="radio" name="radio" />
                Juices
              </label>
              <label>
                <input type="radio" name="radio" />
                Almond Milks
              </label>
              <label>
                <input type="radio" name="radio" />
                Cleanses
              </label>
              <label>
                <input type="radio" name="radio" />
                Protein Milkshake
              </label>
            </div>
            <div className="col-6 col-md-4 col-lg-12 mb-3">
              <h6 className="heading-sm">Categories</h6>
              <label>
                <input type="radio" name="radio" />
                All
              </label>
              <label>
                <input type="radio" name="radio" />
                Juices
              </label>
              <label>
                <input type="radio" name="radio" />
                Almond Milks
              </label>
              <label>
                <input type="radio" name="radio" />
                Cleanses
              </label>
              <label>
                <input type="radio" name="radio" />
                Protein Milkshake
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer d-lg-none">
          <h6 className="heading-sm">Modal Footer</h6>
        </div>
      </div>
    </>
  );
};

export default Filter;
