import React, { useContext } from "react";
import { useState } from "react";
import { MainContext } from "../MainContext";
import PostData from "./PostData/PostData.json";
const FilterPost = () => {
  const { allPosts, setAllPosts, searchVal, setSearchVal } =
    useContext(MainContext);
  const [stcikyFilter, setStickyFilter] = useState(false);
  const handleSearchPost = (e) => {
    setSearchVal(e.target.value);
    if (searchVal) {
      setAllPosts(
        allPosts.filter((p) =>
          p.post_title.trim().toLowerCase().includes(searchVal)
        )
      );
    }
  };
  if (!searchVal) {
    setAllPosts(PostData);
  }
  window.onscroll = (e) => {
    window.pageYOffset < 80 ? setStickyFilter(false) : setStickyFilter(true);
  };
  return (
    <div
      className={`w-full transition-all h-14 hidden lg:flex items-center px-10 bg-bgBase3 justify-between ${
        stcikyFilter ? "sticky top-0 border-b-2 z-50  " : null
      }`}
    >
      <div className="text-white font-bold text-xl">Search Posts</div>
      <input
        type="text"
        value={searchVal}
        className="border-2 h-10 text-white bg-transparent outline-none rounded text-center w-72"
        placeholder="Use LowerCase For Serach"
        onChange={handleSearchPost}
      />
    </div>
  );
};

export default FilterPost;
