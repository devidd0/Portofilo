import React from "react";
import Lottie from "react-lottie";
import { useLocation } from "react-router";
import ErrorAnimationData from "../animations/errorLottie.json";
const ErrorPage = () => {
    const location = useLocation()
  const errorAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ErrorAnimationData,
  };
  return (
    <div className="h-[calc(100vh-81px)] flex items-center justify-center bg-black text-white">
      <Lottie options={errorAnimationOptions} height="80vh" width="full" />
          <div className="absolute text-white top-20 lg:top-24 font-bold left-1/2 lg:left-6 lg:translate-x-0 transform -translate-x-1/2 animate-pulse text-3xl">Can't find path <span className="italic">{location.pathname}</span></div>
    </div>
  );
};

export default ErrorPage;
