import React, { useContext } from "react";
import { MainContext } from "../MainContext";
import PostData from "./PostData/PostData.json";
const FilterPost = () => {
  const { allPosts, setAllPosts } = useContext(MainContext);
  const handleSearchPost = (e) => {
    if (e.target.value) {
      setAllPosts(
        allPosts.filter((p) => p.post_title.trim().toLowerCase().includes(e.target.value))
      );
    } else {
      setAllPosts(PostData);
    }
  };
  return (
    <div className="w-full h-14 hidden lg:flex items-center px-10 bg-bgBase3 justify-between">
      <div className="text-white font-bold text-xl">Search Posts</div>
      <input type="text" className="border-2 h-10 text-white bg-transparent outline-none rounded text-center w-72" placeholder="Use LowerCase For Serach" onChange={handleSearchPost} />
    </div>
  );
};

export default FilterPost;
