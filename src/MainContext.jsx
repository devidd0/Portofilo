import React, { createContext } from "react";
import { useState } from "react";
import PostData from "./Blog/PostData/PostData.json";
export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState(PostData);
  const [searchVal, setSearchVal] = useState();
  const data = {
    allPosts,
    setAllPosts,
    searchVal,
    setSearchVal,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
