import React, { useState, useEffect } from "react";
//React Icons
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiWatch } from "react-icons/fi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import Particles from "react-particles-js";
//Import CountUp
import CountUp from "react-countup";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Autoplay]);
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const About = () => {
  const [showSlideBtn, setShowSlideBtn] = useState(true);
  return (
    <Swiper
      className="h-[calc(100vh-81px)]"
      direction="vertical"
      onSlideChange={() => {
        if (showSlideBtn === true) {
          setShowSlideBtn(false);
        }
      }}
      navigation={{
        nextEl: ".slide-next-button",
        prevEl: ".slide-prev-button",
      }}
      allowTouchMove={false}
      slidesPerView={1}
    >
      <SwiperSlide className="slider-Item bg-[#222]">
        <Particles
          className="main-bg-particles"
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 10,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: true,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#007CED",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "widnows",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 150,
                  line_linked: {
                    opacity: 1,
                  },
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
          }}
        />
        <h1 className="font-bold text-3xl lg:text-5xl italic text-white mb-3 mt-4 lg:mb-16 relative group">
          Fun Facts
          <span className="absolute left-0 -bottom-2 bg-[#007CED] w-1/2 h-1 group-hover:w-full transition-all"></span>
        </h1>
        <div className="container flex w-full flex-col lg:flex-row items-center overflow-auto lg:justify-center">
          <div className="fun-fact-box group">
            <AiOutlineHeart className="fun-fact-icon" />
            <div className="fun-fact-header-text">Happy Clinets</div>
            <div className="count-text">
              <CountUp
                start={0}
                end={120}
                duration={300}
                separator=","
                decimal=","
              ></CountUp>
            </div>
          </div>
          <div className="fun-fact-box group">
            <BiCoffeeTogo className="fun-fact-icon" />
            <div className="fun-fact-header-text">Coffee Consumed</div>
            <div className="count-text">
              <CountUp
                start={0}
                end={1245}
                duration={300}
                separator=","
                decimal=","
              ></CountUp>
            </div>
          </div>
          <div className="fun-fact-box group">
            <FiWatch className="fun-fact-icon" />
            <div className="fun-fact-header-text">Worked Hours</div>
            <div className="count-text">
              <CountUp
                start={0}
                end={5020}
                duration={300}
                separator=","
                decimal=","
              ></CountUp>
            </div>
          </div>
          <div className="fun-fact-box group">
            <AiOutlineStar className="fun-fact-icon" />
            <div className="fun-fact-header-text">Completed Projects</div>
            <div className="count-text">
              <CountUp
                start={0}
                end={300}
                duration={300}
                separator=","
                decimal=","
              ></CountUp>
            </div>
          </div>
          <div className=" text-bold fun-fact-box animate-bounce slide-next-button bottom-0 h-10 lg:absolute text-white ">
            Click For FunFacts
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-Item bg-bgBase1">
        <Particles
          className="main-bg-particles"
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 10,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: true,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#fff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "widnows",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 150,
                  line_linked: {
                    opacity: 1,
                  },
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
          }}
        />
        <h1 className="font-bold text-3xl lg:text-5xl italic text-white mb-3 mt-4 lg:mb-16 relative group">
          Coding Skils
          <span className="absolute left-0 -bottom-2 bg-[#007CED] w-1/2 h-1 group-hover:w-full transition-all"></span>
        </h1>
        <div className="cointaier lg:flex items-center justify-center flex-col z-30 border-8 border-double rounded p-4 h-96 w-full lg:w-[50rem] overflow-x-hidden overflow-y-auto">
          <div className="skill-container lg:flex-row flex-col flex mb-4">
            <div className="skill mx-2">
              <label className="coding-language-name">Html</label>
              <div className="skill-bar">
                <div className="skill-bar-content"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="coding-language-name">Css</label>
              <div className="skill-bar">
                <div className="skill-bar-content"></div>
              </div>
            </div>
          </div>
          <div className="skill-container lg:flex-row flex-col flex mb-4">
            <div className="skill mx-2">
              <label className="coding-language-name">JavaScript</label>
              <div className="skill-bar">
                <div className="skill-bar-content w-3/4"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="coding-language-name">Sass</label>
              <div className="skill-bar">
                <div className="skill-bar-content"></div>
              </div>
            </div>
          </div>
          <div className="skill-container lg:flex-row flex-col flex mb-4">
            <div className="skill mx-2">
              <label className="coding-language-name">React</label>
              <div className="skill-bar">
                <div className="skill-bar-content w-1/2"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="coding-language-name">Npm/Yarn</label>
              <div className="skill-bar">
                <div className="skill-bar-content w-3/5"></div>
              </div>
            </div>
          </div>
          <div className="skill-container lg:flex-row flex-col flex mb-4">
            <div className="skill mx-2">
              <label className="coding-language-name">Python</label>
              <div className="skill-bar">
                <div className="skill-bar-content w-1/3"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="coding-language-name">Tailwincss</label>
              <div className="skill-bar">
                <div className="skill-bar-content w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <BsArrowUp className="font-bold text-[2.3rem] animate-bounce slide-prev-button w-16 h-16 bottom-3 right-3 block text-center absolute z-30 text-white bg-bgBase2 transition-all hover:bg-bgBase3 rounded" />
      </SwiperSlide>
    </Swiper>
  );
};

export default About;
