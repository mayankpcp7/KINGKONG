import React from "react";
import evening from "../images/png/evening.png";
import nft from "../images/png/nft.png";
import furniture from "../images/png/furniture.png";
import fannie from "../images/png/fannie.png";
import border from "../images/png/yellow=border.png";
import Slider from "react-slick";

const Partners = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    pouseonhover: true,
    autoplaySpeed: 0,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2000,
          infinite: true,
          dots: true,
          autoplay: true,
          pouseonhover: true,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          speed: 3000,
          infinite: true,
          dots: true,
          autoplay: true,
          pouseonhover: true,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <>
      <section className="bg_black">
        <div className="container">
          <h2 className="text-center color_white fs_xxl mb-0 fw-normal ff_azo py-5">
            Parrtners
          </h2>
          <Slider {...settings} >
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img
                    className="w-100 kong-shadow transition-kong"
                    src={evening}
                    alt="evening"
                  />
                </div>
                <div>
                  <img src={border} alt="border " />
                </div>
              </div>
            </div>
            <div className=" col-lg-3  col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center">
                <div className="pe-2">
                  <img
                    className="w-100 kong-shadow transition-kong"
                    src={nft}
                    alt="nft"
                  />
                </div>

                <div>
                  <img src={border} alt="border " />
                </div>
              </div>
            </div>
            <div className=" col-lg-3  col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img
                    className="w-100 kong-shadow transition-kong"
                    src={furniture}
                    alt="evening"
                  />{" "}
                </div>
                <div>
                  <img src={border} alt="border " />{" "}
                </div>
              </div>
            </div>
            <div className=" col-lg-3  col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img
                    className="w-100 kong-shadow transition-kong"
                    src={fannie}
                    alt="evening"
                  />
                </div>
                <div>
                  <img src={border} alt="border " />
                </div>
              </div>
            </div>
            <div className=" col-lg-3  col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center">
                <div className="pe-2">
                  <img
                    className="w-100 kong-shadow transition-kong"
                    src={nft}
                    alt="nft"
                  />
                </div>

                <div>
                  <img src={border} alt="border " />
                </div>
              </div>
            </div>
            <div className=" col-lg-3  col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img
                    className="w-100 kong-shadow transition-kong"
                    src={furniture}
                    alt="evening"
                  />{" "}
                </div>
                <div>
                  <img src={border} alt="border " />{" "}
                </div>
              </div>
            </div>
            <div className=" col-lg-3  col-md-4 col-sm-6">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img
                    className="w-100 kong-shadow transition-kong"
                    src={fannie}
                    alt="evening"
                  />
                </div>
                <div>
                  <img src={border} alt="border " />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Partners;
