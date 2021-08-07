import React, { useState } from "react";
import Logo from "../img/avatar.png";
import Typewritter from "typewriter-effect";
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
const Home = () => {
  return (
    <div className="min-w-scren min-h-scren bg-bgBase1 px-24 py-8 relative">
      <div border="0" className="absolute top-0 left-0 transition-all text-white flex items-center">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7848400&style=0010&nbdigits=5&type=page&initCount=0" />
        <span className="ml-2 font-bold">Ziyarətci</span>
      </div>

      <Particles
        className="main-bg-particles"
        params={{
          particles: {
            number: {
              value: 60,
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
      <div className="aboutme flex flex-col lg:flex-row  h-[calc(100vh-20.1vh)] w-full items-center justify-center">
        <div className="avatar-image">
          <img src={Logo} className=" object-cover w-full h-full" />
        </div>
        <div className="about-text">
          <div className="font-semibold mb-4 text-xl">
            <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
            >
              <SwiperSlide>Front end Coder</SwiperSlide>
              <SwiperSlide>Web Developer</SwiperSlide>
              <SwiperSlide>Pen Spinner</SwiperSlide>
            </Swiper>
          </div>
          <div className="font-bold text-baseHeaderColor text-3xl mb-4 group-hover:animate-bounce">
            Aziz Imranzade
          </div>
          <p className="text-lg bg-bgBase2 p-2 rounded font-bold">
            <Typewritter
              onInit={(typewritter) => {
                typewritter
                  .typeString(
                    "Hello ! I am Aziz and I am from Azerbajan I love writing code And here is my mini portofilo web-page Also I love playing video games and pen spinning"
                  )
                  .start();
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
