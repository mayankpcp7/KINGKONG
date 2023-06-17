import React from "react";
import headermonkey from "../images/png/header-monkey.png";
import headertwitter from "../images/svg/header-twitter.svg";
import headerboat from "../images/svg/header-boat.svg";
import headerdiscord from "../images/svg/header-discord.svg";
import headerm from "../images/svg/header-m.svg";
import headereye from "../images/svg/header-eye.svg";
import headertelegram from "../images/png/telegram.svg";
import headersemi from "../images/png/header-semi.png";
import rightcurtain from "../images/png/right-curtain.png";
import leftcurtain from "../images/png/left-curtain.png";
import headeralbert from "../images/png/header-albert.png";
import headerdon from "../images/png/don-header.png";
import headerroyal from "../images/png/royal-header.png";

const Header = () => {
  return (
    <>
      <header className="header-bg position-relative vh-110  d-flex flex-column overflow-hidden">
        <div className="semi">
          <img className="w-100" src={headersemi} alt="semi" />
        </div>

        <div className="container d-flex flex-column align-item-center  flex-grow-1 ">
          <div className="d-flex align-item-center justify-content-center bg-img">
            <div className="monkey z-1 ">
              <img src={headermonkey} alt="monkey" />
            </div>
            <div className="header-button">
              <button className="ff_azo  py-md-3 px-md-4 py-sm-2 px-sm-3 border-0 rounded-1 bg_yellow fs_sm cw">
                connect wallet
              </button>
            </div>
            <div className="d-flex header-icons">
              <div className="px-12">
                <img className="pointer-curser" src={headertwitter} alt="twitter" />
              </div>
              <div className="px-12">
                <img className="pointer-curser" src={headerboat} alt="boat" />
              </div>
              <div className="px-12">
                <img className="pointer-curser" src={headereye} alt="twitter" />
              </div>
              <div className="px-12">
                <img className="pointer-curser" src={headerdiscord} alt="twitter" />
              </div>
              <div className="px-12">
                <img className="pointer-curser" src={headerm} alt="twitter" />
              </div>
              <div className="px-12">
                <img className="pointer-curser" src={headertelegram} alt="twitter" />
              </div>
            </div>
            <div className="rightcurtain d-md-block d-none">
              <img className="w-100" src={rightcurtain} alt="rightcurtain" />
            </div>
            <div className="leftcurtain d-md-block d-none">
              <img className="w-100" src={leftcurtain} alt="leftcurtain" />
            </div>
          </div>
          <h1 className="text-center mb-0 ff_azo color_white mx-539px fs_xxl py-5 trtl-media">
            Welcome <br /> to
            <span className="color_yellow dompkong"> dompkong</span>
          </h1>
          <div className="d-flex justify-content-center pt-14">
            <p className="text-center mb-0 ff_montserrat color_white fs_sm mx-565">
              Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
              amet et. Erat nam molestie. Vita
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-sm-row flex-column pt-35 z-7 ">
            <div className="px-3 py-3 py-sm-0">
              <button className="ff_azo  py-md-3 px-md-4 py-sm-2 px-sm-3 border-0 rounded-1 bg_yellow fs_sm cw">
                Whitepaper
              </button>
            </div>
            <div className="px-3 py-3 py-sm-0">
              <button className="ff_azo  py-md-3 px-md-4 py-sm-2 px-sm-3 border-0 rounded-1 bg_yellow fs_sm cw">
                mint
              </button>
            </div>
            <div className="px-3 py-3 py-sm-0">
              <button className="ff_azo  py-md-3 px-md-4 py-sm-2 px-sm-3 border-0 rounded-1 bg_yellow fs_sm cw">
                opensea
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-end position-relative  py-100">
            <div className="don-h">
              <img className="w-80" src={headerdon} alt="headerdon" />
            </div>
            <div className="h-royal">
              <img className="w-90" src={headerroyal} alt="headerroyal" />
            </div>
            <div className="h-albert">
              <img className="W-80" src={headeralbert} alt="header-albert" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
