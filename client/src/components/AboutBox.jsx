import { Link } from "react-router-dom";
import logo from '../img/ProjectSublime_big_logo.png';
import painting_image from "../img/4b2cfa59c42c887e494b1facdbd85b87.jpg";
import bball_image from "../img/04cbfcbbe02db4654d7758d240205798.jpg";
import photography_image from "../img/c45f2ca2-bda8-42ae-be2c-bf1e4b4c47ec.webp";

export const AboutBox = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center about-box">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal"><img src={logo} /></h1>
        <p className="lead fw-normal">
          An effort to tackle teenage depression through individual passion and
          a community of support.
        </p>
        <Link className="btn btn-outline-secondary" to={"/sublimation"}>
          What is Sublimation?
        </Link>
      </div>
      <div id="carouselIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={painting_image}/>
          </div>
          <div className="carousel-item">
            <img src={bball_image}/>
          </div>
          <div className="carousel-item">
            <img src={photography_image}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
