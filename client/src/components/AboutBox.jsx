import { Link } from "react-router-dom";

export const AboutBox = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center about-box">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal">Project Sublime</h1>
        <p className="lead fw-normal">
          An effort to tackle teenage depression through individual passion and
          a community of support.
        </p>
        <Link className="btn btn-outline-secondary" to={"/sublimation"}>
          What is Sublimation?
        </Link>
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
};
