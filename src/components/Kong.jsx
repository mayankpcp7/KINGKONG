import React from "react";
import kingkong from "../images/png/Group 35415.png";
import hugh from "../images/png/Hugh.png";
import heman from "../images/png/He-Man.png";
import rambo from "../images/png/Rambo.png";
import anonymous from "../images/png/Anonymous.png";
import albert from "../images/png/Albert.png";
import tupac from "../images/png/2Pac.png";
import prince from "../images/png/Prince.png";
import elvis from "../images/png/Elvis.png";
import royals from "../images/png/Royals.png";
import hughtwo from "../images/png/hugh2.png";
import ellipse from "../images/png/kong-ellipse.png";
const Kong = () => {
  return (
    <section className="bg_black overflow-x-hidden py-5">
      <h4 className="ff_azo fs_xxl d-xl-none color_white text-center py-5">the kongs</h4>
      <div className="d-xl-flex justify-content-between">
        <div className="d-flex flex-xl-column justify-content-xl-center justify-content-between">
          <div className=" hugh">
            <img
              className="kong-shadow transition-kong"
              src={hugh}
              alt="hugh"
            />
          </div>
          <div className="  rambo">
            <img
              className="kong-shadow  transition-kong"
              src={rambo}
              alt="rambo"
            />
          </div>
          <div className="  albert">
            <img
              className="kong-shadow  transition-kong"
              src={albert}
              alt="albert"
            />
          </div>
          <div className="  prince">
            <img
              className="kong-shadow  transition-kong"
              src={prince}
              alt="prince"
            />
          </div>
          <div className="  royals">
            <img
              className="kong-shadow  transition-kong"
              src={royals}
              alt="royals"
            />
          </div>
        </div>
        <div>
          <div className="pt-5 d-none d-xl-block">
            <h4 className="ff_azo fs_xxl color_white text-center pt-4">
              the kongs
            </h4>
          </div>
          <div className="kingkong position-relative z-1">
            <div className="z-2 position-relative">
              <img
                className="w-100 width-xxl-80 "
                src={kingkong}
                alt="kingkong"
              />
            </div>
            <div className="ellipse-kong">
              <img className="w-100" src={ellipse} alt="ellipse" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-xl-column justify-content-between justify-content-xl-center">
          <div className="heman">
            <img
              className="kong-shadow  transition-kong"
              src={heman}
              alt="heman"
            />
          </div>
          <div className="anonymous">
            <img
              className="kong-shadow  transition-kong"
              src={anonymous}
              alt="rambo"
            />
          </div>
          <div className="tupac">
            <img
              className="kong-shadow  transition-kong"
              src={tupac}
              alt="albert"
            />
          </div>
          <div className="elvis">
            <img
              className="kong-shadow  transition-kong"
              src={elvis}
              alt="prince"
            />
          </div>
          <div className="hugh2">
            <img
              className="kong-shadow  transition-kong"
              src={hughtwo}
              alt="royals"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kong;
