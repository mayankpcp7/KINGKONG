import React from "react";
import Roadmapbg from "../images/png/roadmap-bg.png";
import roadmap from "../images/png/roadmap.png";
import godzilla from "../images/png/roadmap-monkey.png";
import line from "../images/svg/line.svg";
import line2 from "../images/svg/line2.svg";
import line3 from "../images/svg/line3.svg";
import line4 from "../images/svg/line4.svg";
import line5 from "../images/svg/line5.svg";
import roadcircle from "../images/png/circles-group.png";
const Roadmap = () => {
  return (
    <>
      <section className="bg_black  py-5">
        <div className="container">
          <h4 className=" fs_xxl ff_azo  color_white text-center mb-0 z-1 py-lg-5 pt-lg-5">
            roadmap
          </h4>
          <div className="flex-lg-row d-flex flex-column align-items-center  pt-lg-5  ">
            <div className="col-md-2">
              <div className="road-monkey  position-lg-reative z-2 pt-5">
                <div className="pt-lg-5">
                  <img src={godzilla} alt="godzilla" />
                </div>
                <div className="circle-group d-none d-lg-block">
                  <img className="w-100" src={roadcircle} alt="circles" />
                </div>
              </div>
            </div>
            <div className="col-md-8 position-phases ">
              <div className="transform-md-lg ">
                <div className="d-flex align-items-center phase-1 py-3  phase1">
                  <div className="road-line d-none d-lg-block">
                    <img className="" src={line} alt="line" />
                  </div>
                  <div className="px-3">
                    <button className="py-4 px-3 radius-50 ff_montserrat border-0 fw-900 color_black bg_white">
                      20%
                    </button>
                  </div>
                  <div className="px-4 hover_gold">
                    <h3 className="ff_azo color_white fs_md mb-0">Phase 1</h3>
                    <p className="ff_montserrat color_white fw_normal fs_sm mb-0 pt-2">
                      Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                      arcu viverra ullamcorper condimentum massa laoree
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center phase-1 phase2 py-3">
                  <div className="road-line d-none d-lg-block">
                    <img className="" src={line2} alt="line" />
                  </div>
                  <div className="px-3">
                    <button className="py-4 px-3 radius-50 ff_montserrat border-0 fw-900 color_black bg_white">
                      40%
                    </button>
                  </div>
                  <div className="px-4 hover_gold">
                    <h3 className="ff_azo color_white fs_md mb-0">Phase 2</h3>
                    <p className="ff_montserrat color_white fw_normal fs_sm mb-0 pt-2">
                      Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                      arcu viverra ullamcorper condimentum massa laoree
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center phase-1 phase3 py-3">
                  <div className="road-line d-none d-lg-block">
                    <img className="" src={line3} alt="line" />
                  </div>
                  <div className="px-3">
                    <button className="py-4 px-3 radius-50 ff_montserrat border-0 fw-900 color_black bg_white">
                      60%
                    </button>
                  </div>
                  <div className="px-4 hover_gold">
                    <h3 className="ff_azo color_white fs_md mb-0">Phase 3</h3>
                    <p className="ff_montserrat color_white fw_normal fs_sm mb-0 pt-2">
                      Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                      arcu viverra ullamcorper condimentum massa laoree
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center phase-1 phase4 py-3">
                  <div className="road-line d-none d-lg-block">
                    <img className="" src={line4} alt="line" />
                  </div>
                  <div className="px-3">
                    <button className="py-4 px-3 radius-50 ff_montserrat border-0 fw-900 color_black bg_white">
                      80%
                    </button>
                  </div>
                  <div className="px-4 hover_gold">
                    <h3 className="ff_azo color_white fs_md mb-0">Phase 4</h3>
                    <p className="ff_montserrat color_white fw_normal fs_sm mb-0 pt-2">
                      Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                      arcu viverra ullamcorper condimentum massa laoree
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center phase-1 phase5 py-3">
                  <div className="road-line d-none d-lg-block">
                    <img className="" src={line5} alt="line" />
                  </div>
                  <div className="px-3">
                    <button className="py-4 px-3 radius-50 ff_montserrat border-0 fw-900 color_black bg_white">
                      100%
                    </button>
                  </div>
                  <div className="px-4 hover_gold">
                    <h3 className="ff_azo color_white fs_md mb-0">Phase 5</h3>
                    <p className="ff_montserrat color_white fw_normal fs_sm mb-0 pt-2">
                      Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                      arcu viverra ullamcorper condimentum massa laoree
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;



