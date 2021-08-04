import React, { useContext } from "react";
import CantFindAnimationData from "../animations/cantFind.json";
import Lottie from "react-lottie";
import { MainContext } from "../MainContext";

const CantFindPost = () => {
  const { allPosts, setSearchVal } = useContext(MainContext);
  const cantFindAnimationOptions = {
    loop: true,
    animationData: CantFindAnimationData,
    autoplay: true,
  };
  return (
    <div className="text-white">
      <div className="flex items-center justify-center">
        <div className="mr-4 font-semibold text-4xl italic">
          {" "}
          Cant find post
        </div>{" "}
        <Lottie options={cantFindAnimationOptions} width={90} height={90} />
      </div>
      <button
        className="border-2 transition-all hover:bg-indigo-500 outline-none rounded flex items-center justify-center px-10 mx-auto mt-10 py-3"
        onClick={() => {
          setSearchVal("");
        }}
      >
        Show all Posts
      </button>
    </div>
  );
};

export default CantFindPost;
