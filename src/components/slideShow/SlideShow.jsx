import React from 'react';
import Pic1 from "../image/supcalPic1.jpg"
import Pic2 from "../image/supcalPic2.jpg"
import Pic3 from "../image/supcalPic3.jpg"



const SlidShow = () => {
    return (  
        <>
              <div
      id="carouselExampleIndicators"
      className="carousel slide slideShow"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Pic1}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={Pic2}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={Pic3}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="container-fluid mt-3 p-5">
      <div className="row items bg-light">
        <div className="item col-6 bg-light">
          <i title="Free Delivery" className="fas fa-truck fa-2x"></i>
        </div>
        <div className="item col-6 bg-light">
          <i title="Local" className="fas fa-map-marker-alt fa-2x"></i>
        </div>
        <div className="item col-6 bg-light">Free Delivery</div>
        <div className="item col-6 bg-light">Local</div>
      </div>
    </div>

        </>
    );
}
 
export default SlidShow;
