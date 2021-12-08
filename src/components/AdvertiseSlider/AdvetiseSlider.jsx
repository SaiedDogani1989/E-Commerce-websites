import React from 'react';
import Pic1 from "../image/supcalPic1.png"
import Pic2 from "../image/supcalPic2.png"
import Pic3 from "../image/supcalPic3.png"
import Pic4 from "../image/supcalPic4.png"



const AdvertiseSlider = () => {
    return ( 
        <div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1 className="sliderHeader bg-light">The holiday shop</h1>
                    <div
                        id="carouselFirst"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselFirst"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselFirst"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselFirst"
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
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Lorem, ipsum dolor.</h5>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Nemo, sed.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={Pic2}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>
                                        Some representative placeholder content for the second
                                        slide.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={Pic3}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>
                                        Some representative placeholder content for the third
                                        slide.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselFirst"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselFirst"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <h1 className="sliderHeader bg-light">The holiday shop</h1>
                    <div
                        id="carouselSecond"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselSecond"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselSecond"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselSecond"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={Pic2}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>
                                        Some representative placeholder content for the first
                                        slide.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={Pic4}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>
                                        Some representative placeholder content for the second
                                        slide.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={Pic1}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>
                                        Some representative placeholder content for the third
                                        slide.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselSecond"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselSecond"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default AdvertiseSlider;