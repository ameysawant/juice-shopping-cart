import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="d-lg-flex align-items-lg-center py-3 py-lg-0">
        <div className="col-lg-6 px-lg-0">
          <img
            src="https://static.wixstatic.com/media/2c0034_120b994eb4044695afef5a324a03c4be~mv2.png"
            alt=""
            className="img-fluid d-none d-lg-block"
          />
        </div>
        <div className="col-lg-6">
          <form className="row">
            <div className="col-12 mb-3">
              <h6 className="heading-sm mb-2">SignUp</h6>
              <input type="text" className="f-control" placeholder="Name" />
            </div>
            <div className="col-12 mb-3">
              <input type="text" className="f-control" placeholder="SurName" />
            </div>
            <div className="col-12 mb-3">
              <input type="text" className="f-control" placeholder="Phone" />
            </div>
            <div className="col-12 mb-3">
              <input type="text" className="f-control" placeholder="Email" />
            </div>
            <div className="col-12">
              <button className="btn btn-black w-100">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
