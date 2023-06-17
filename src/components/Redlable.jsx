import React from "react";
import { useState } from "react";
import bottle from "../images/png/bottle.png";
import glass from "../images/png/glass.png";
import rightellipse from "../images/png/bottle-right-ellipse.png";
import leftellipse from "../images/png/bottele-left-ellipse.png";
import roadmapbg from "../images/png/roadmap-bg.png";
const Redlable = () => {
  const [first, setfirst] = useState(0);
  const [color, setcolor] = useState("text-danger");

  function increment() {
    setfirst(first + 1);
    setcolor("text-blue");
  }
  function decrement() {
    setfirst(first - 1);
    setcolor("text-danger");
  }
  function reset() {
    setfirst(0);
    setcolor("black");
  }
  function Taphere() {
    setfirst(0);
    setcolor("black");
  }
  return (
    <section className="bear-bg py-5 position-relative">
      <div className="bottleup">
        <img
          className="w-100  z-0 bottlebg"
          src={roadmapbg}
          alt="bottleup"
        />
      </div>
      <div className="bottle-right d-none d-lg-block">
        <img src={rightellipse} alt="right" />
      </div>
      <div className="bottle-left d-none d-lg-block">
        <img src={leftellipse} alt="right" />
      </div>
      <div className="container position-relative z-2">
        <div className="row align-items-center justify-content-lg-evenly justify-content-center">
          <div className="col-lg-6 col-10">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img className="w-100" src={bottle} alt="bottle" />
              </div>
              <div>
                <img className="w-100" src={glass} alt="glass" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-10">
            <div className="d-flex flex-column">
              <h4 className="ff_azo color_white fs_xxl fw-normal mb-0">
                mint nft
              </h4>
              <div className="d-flex justify-content-between pt-5">
                <div>
                  <h4 className="ff_montserrat fw-900 color_white fs_xl mb-0">
                    9999
                  </h4>
                  <p className="ff_montserrat fw-normal fs-sm color_white pt-14 mb-0">
                    of 10,000 minted
                  </p>
                </div>
                <div>
                  <h4 className="ff_montserrat fw-900 color_white fs_xl mb-0 ">
                    .2 ETH
                  </h4>
                  <p className="ff_montserrat fw-normal fs-sm color_white pt-14 mb-0">
                    per NFT
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-33">
                <div>
                  <h4 className="ff_montserrat fw-900 color_white fs_xl mb-0">
                    9999
                  </h4>
                  <p className="ff_montserrat fw-normal fs-sm color_white pt-14">
                    of 10,000 minted
                  </p>
                </div>
                <div>
                  <h4 className="ff_montserrat fw-900 color_white fs_xl mb-0 ">
                    .2 ETH
                  </h4>
                  <p className="ff_montserrat fw-normal fs-sm color_white pt-14">
                    per NFT
                  </p>
                </div>
              </div>
              <div className="d-flex jutify-content-between align-items-center pt-5">
                <div>
                  <div
                    className="bg-white px_30 py_13 rounded-1 z-3 pointer-curser"
                    onClick={increment}
                  >
                    <p className="ff_montserrat fw-900 fs_xl text-black mb-0">
                      -
                    </p>
                  </div>
                </div>
                <div>
                  <div className="px-3">
                    <input
                      className="min-height-65px w-100-lg bottle-input rounded-1 w-100"
                      type="text"
                      placeholder="03"
                    />
                  </div>
                </div>
                <div className="z-3">
                  <div
                    className="bg-white px_30 py_13 rounded-1 pointer-curser"
                    onClick={decrement}
                  >
                    <p className="ff_montserrat fw-900 fs_xl text-black mb-0">
                      +
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-29 z-3">
                <button className="ff_montserrat text-black bg_yellow w-100-lg min-width-419px fs_lg button_border py-3 fw-900 mint-shadow">
                  MINT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redlable;
