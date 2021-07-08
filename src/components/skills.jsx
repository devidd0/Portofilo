import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiWatch } from "react-icons/fi";
import Particles from "react-particles-js";
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
      //  autoplay={{
      //    delay: 5000,
      //    disableOnInteraction: true,
      //  }}
      onSlideChange={() => {
        if (showSlideBtn === true) {
          setShowSlideBtn(false);
          console.log("false");
        }
      }}
      slidesPerView={1}
    >
      <SwiperSlide className="slider-Item bg-[#222]">
      <Particles
        className="absolute w-full h-full top-0 left-0"
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
        <h1 className="font-bold text-5xl italic text-white mb-16 relative group">
          Coding Skills
          <span className="absolute left-0 -bottom-4 bg-[#007CED] w-1/2 h-1 group-hover:w-full transition-all"></span>
        </h1>
        {showSlideBtn ? (
          <div className="z-20 swipe absolute top-1/2 right-2 border-2 flex items-center justify-center h-12  rounded-lg px-10 animate-pulse opacity-0 transform -rotate-90 text-white bg-indigo-400">
            Swipe
            <span className="bg-indigo-400 transform rotate-45 w-8 h-8 absolute -bottom-2 z-[-10]"></span>
          </div>
        ) : null}
        <div className="cointaier border-8 border-double rounded p-4">
          <div className="skill-container flex mb-4">
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                Html
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-full h-full"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                Css
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-full h-full"></div>
              </div>
            </div>
          </div>
          <div className="skill-container flex mb-4">
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                JavaScript
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-3/4 h-full"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                Sass
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-full h-full"></div>
              </div>
            </div>
          </div>
          <div className="skill-container flex mb-4">
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                React
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-1/3 h-full"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                Npm/Yarn
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-1/2 h-full"></div>
              </div>
            </div>
          </div>
          <div className="skill-container flex mb-4">
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                Python
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-1/5 h-full"></div>
              </div>
            </div>
            <div className="skill mx-2">
              <label className="text-white font-bold text-xl block mb-2 ml-2">
                Tailwincss
              </label>
              <div className="skillbar border rounded-md h-4 w-80 overflow-hidden">
                <div className="bar bg-[#007CED] w-1/5 h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-Item bg-[#222]">
        <Particles
          className="absolute w-full h-full top-0 left-0 text-in"
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
        <h1 className="font-bold text-5xl italic text-white mb-16 relative group">
          Fun Facts
          <span className="absolute left-0 -bottom-2 bg-[#007CED] w-1/2 h-1 group-hover:w-full transition-all"></span>
        </h1>
        <div className="container flex justify-center w-full">
          <div className="box group transition-all transform hover:-translate-y-2 hover:shadow-2xl mx-4 border-2 w-64 rounded border-[#444] flex flex-col items-center justify-center bg-[#333] py-6">
            <AiOutlineHeart className="text-[#007CED] text-6xl mb-3 rounded-full p-1 group-hover:bg-white transition-all" />
            <div className="text-white font-semibold text-xl mb-3">
              Happy Clinets
            </div>
            <div className="count text-5xl text-[#D5D5D5]">0</div>
          </div>
          <div className="box group transition-all transform hover:-translate-y-2 hover:shadow-2xl mx-4 border-2 w-64 rounded border-[#444] flex flex-col items-center justify-center bg-[#333] py-6">
            <BiCoffeeTogo className="text-[#007CED] text-6xl mb-3 rounded-full p-1 group-hover:bg-white transition-all" />
            <div className="text-white font-semibold text-xl mb-3">
              Coffee Consumed
            </div>
            <div className="count text-5xl text-[#D5D5D5]">0</div>
          </div>
          <div className="box group transition-all transform hover:-translate-y-2 hover:shadow-2xl mx-4 border-2 w-64 rounded border-[#444] flex flex-col items-center justify-center bg-[#333] py-6">
            <FiWatch className="text-[#007CED] text-6xl mb-3 rounded-full p-1 group-hover:bg-white transition-all" />
            <div className="text-white font-semibold text-xl mb-3">
              Worked Hours
            </div>
            <div className="count text-5xl text-[#D5D5D5]">0</div>
          </div>
          <div className="box group transition-all transform hover:-translate-y-2 hover:shadow-2xl mx-4 border-2 w-64 rounded border-[#444] flex flex-col items-center justify-center bg-[#333] py-6">
            <AiOutlineStar className="text-[#007CED] text-6xl mb-3 rounded-full p-1 group-hover:bg-white transition-all" />
            <div className="text-white font-semibold text-xl mb-3">
              Completed Projects
            </div>
            <div className="count text-5xl text-[#D5D5D5]">0</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default About;
