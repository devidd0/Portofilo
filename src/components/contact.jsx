import React from "react";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Particles from "react-particles-js";
import TypewriterComponent from "typewriter-effect";
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
const Contact = () => {
  return (
    <div className="h-[calc(100vh-81px)] bg-[#222] flex flex-col relative">
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
      <div className="flex-1 flex items-center justify-center flex-col">
        <h1 className="font-bold italic mb-4 text-4xl text-white">
          Contact With Me
        </h1>
        <form
          action="https://formsubmit.co/i.am.hacker.eziz@gmail.com"
          method="POST"
          className="border-4 border-double rounded py-6 px-12 h-82 z-10"
        >
          <div className="form-header h-full flex">
            <div className="inputs mr-4">
              <label className="mb-2 block">
                <div className="text-white mb-1 font-semibold">Name</div>
                <input
                  type="text"
                  name="User Name"
                  placeholder="Enter your Name"
                  className=" transition-all focus:border-indigo-500 border-2 bg-transparent p-2 rounded w-72 outline-none text-white"
                  required
                />
              </label>
              <label className="mb-2 block">
                <div className="text-white mb-1 font-semibold">E-mail</div>
                <input
                  type="email"
                  name="User Gmail"
                  placeholder="Enter your Email"
                  className=" transition-all focus:border-indigo-500 border-2 bg-transparent p-2 rounded w-72 outline-none text-white"
                  required
                />
              </label>
              <input
                type="hidden"
                name="_autoresponse"
                value="Your message sended succesfuly"
              />
              <input
                type="hidden"
                name="_next"
                value="https://azizportofilio.netlify.app/"
              />
              <input type="hidden" name="_template" value="table" />
              <button className=" transition-all hover:bg-indigo-500 border-2 rounded text-center px-10 h-10 text-white mx-auto mt-10 block">
                Send
              </button>
            </div>
            <textarea
              id=""
              cols="30"
              name="User Message"
              rows="10"
              placeholder="Enter Your Message"
              className="transition-all focus:border-indigo-500 text-white p-4 bg-transparent border-2 outline-none rounded resize-none"
            ></textarea>
          </div>
        </form>
      </div>
      <Swiper
        className="bg-[#333] h-28 w-full"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide className="w-full h-full flex items-center justify-between px-56 group">
          <p className="text-white font-bold text-2xl text-center italic">
            My Github Account I share my projects over here.
            <div>JUST FOLLOW</div>
          </p>
          <a
            href="https://github.com/IamEziz"
            target="_blank"
            className="group-hover:text-[#6e5494]  transition-all transform group-hover:scale-125"
          >
            <VscGithub className="text-5xl" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-between px-56 group">
          <p className="text-white font-bold text-2xl text-center italic">
            My YouTube Channel I share Coding tutorials and videos over here .
            <div>JUST FOLLOW</div>
          </p>
          <a
            href="https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw"
            target="_blank"
            className="group-hover:text-[#ff0000]  transition-all transform group-hover:scale-125"
          >
            <AiOutlineYoutube className="text-5xl" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-between px-56 group">
          <p className="text-white font-bold text-2xl text-center italic">
            My Instagram Account I share mini videos over here.
            <div>JUST FOLLOW</div>
          </p>
          <a
            href="https://www.instagram.com/i.am.coder.e/"
            target="_blank"
            className="group-hover:text-[#e1306c]  transition-all transform group-hover:scale-125"
          >
            <FiInstagram className="text-5xl" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Contact;
