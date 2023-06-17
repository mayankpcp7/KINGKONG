import React from "react";
import footermonkey from "../images/png/footer-kong.png";
import footertwitter from "../images/svg/f-twitter.svg";
import boat from "../images/svg/board.svg";
import eye from "../images/svg/eye.svg";
import discord from "../images/svg/discord.svg";
import m from "../images/svg/M.svg";
import telegram from "../images/svg/telegram.svg";
import footerellipse from "../images/png/footer-ellipse.png";
import faqsbg from "../images/png/faqs-background.png" 
const Faqs = () => {
  return (
    <>
      <section className="footer-bg position-relative overflow-hidden position-relative">
        <div className="faqs-bg z-0"><img className="w-100 " src={faqsbg} alt="faqsbg" /></div>
        <div className="container">
          <h4 className=" fs_xxl ff_azo  color_white text-center mb-0 z-1 position-absolute faqs">
            faqs
          </h4>
          <div class="accordion bg-transparent py-5 accordian-position">
            <div class="accordion-item">
              <div class="accordion-item-header">
                <p className="ff_montserrat fw-bold fs_md mb-0">
                  Arcu faucibus diam feugiat magna etiam.{" "}
                </p>
              </div>
              <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                  <p className=" mb-0 ff_montserrat fw-normal fs_sm color_white">
                    Arcu faucibus diam feugiat magna etiam. Leo ridiculus
                    mauris, risus vitae luctus volutpat turpis. Nisl, consequat
                    tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at
                    nibh nibh.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-item-header">
                <p className="ff_montserrat fw-bold fs_md mb-0">
                  Fermentum tortor aenean.
                </p>
              </div>
              <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                  <p className=" mb-0 ff_montserrat fw-normal fs_sm color_white">
                    Arcu faucibus diam feugiat magna etiam. Leo ridiculus
                    mauris, risus vitae luctus volutpat turpis. Nisl, consequat
                    tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at
                    nibh nibh.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-item-header">
                <p className="ff_montserrat fw-bold fs_md mb-0">
                  Dictum est amet sollicitudin.
                </p>
              </div>
              <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                  <p className=" mb-0 ff_montserrat fw-normal fs_sm color_white">
                    Arcu faucibus diam feugiat magna etiam. Leo ridiculus
                    mauris, risus vitae luctus volutpat turpis. Nisl, consequat
                    tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at
                    nibh nibh.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-item-header">
                <p className="ff_montserrat fw-bold fs_md mb-0">
                  Sed vulputate mi faucibus.
                </p>
              </div>
              <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                  <p className=" mb-0 ff_montserrat fw-normal fs_sm color_white">
                    Arcu faucibus diam feugiat magna etiam. Leo ridiculus
                    mauris, risus vitae luctus volutpat turpis. Nisl, consequat
                    tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at
                    nibh nibh.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-item-header">
                <p className="ff_montserrat fw-bold fs_md mb-0">
                  Nunc amet cursus morbi donec.
                </p>
              </div>
              <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                  <p className=" mb-0 ff_montserrat fw-normal fs_sm color_white mx-820">
                    Arcu faucibus diam feugiat magna etiam. Leo ridiculus
                    mauris, risus vitae luctus volutpat turpis. Nisl, consequat
                    tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at
                    nibh nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <img className="pointer-curser pt-5 mt-3" src={footermonkey} alt="footer" />
          </div>
          <div className="d-flex justify-content-center py-4">
            <div className="px-12">
              <img className="pointer-curser" src={footertwitter} alt="footertwitter" />
            </div>
            <div className="px-12">
              <img className="pointer-curser" src={boat} alt="boat" />
            </div>
            <div className="px-12">
              <img className="pointer-curser" src={eye} alt="eye" />
            </div>
            <div className="px-12">
              <img className="pointer-curser" src={discord} alt="discord" />
            </div>
            <div className="px-12">
              <img className="pointer-curser" src={m} alt="footertwitter" />
            </div>
            <div className="px-12">
              <img className="pointer-curser" src={telegram} alt="footertwitter" />
            </div>
          </div>
          <div className="footerline"></div>
          <p className="text-center ff_montserrat fs_sm fw-normal py-3 color_white mb-0">© DomPKong 2022</p>
              </div>
              <img className="footer-ellipse" src={footerellipse} alt="footerellipse"/>
      </section>
    </>
  );
};

export default Faqs;
