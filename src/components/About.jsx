import React from "react";
import group from "../images/png/boats.png";
import ellipse from "../images/png/about-ellipse.png";
const About = () => {
  return (
    <>
      <section className="bg_black py-5 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <h2 className="fs_xxl color_white ff_azo fw-normal mb-0 ">About </h2>
                <p className="ff_montserrat color_white fw-normal text-start mw-522px mb-0 lh-25px ">
                  Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae
                  viverra amet et. Erat nam molestie. Vitae mollis lacus
                  senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac
                  sed tellus.
                </p>
              </div>
            </div>
            <div className="col-md-6 position-relative py-2 py-sm-3">
              <div className="ellipse z-0">
                <img className="w-100" src={ellipse} alt="ellipse z-2" />
              </div>
              <div className="group">
                <img className="w-100" src={group} alt="group" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
