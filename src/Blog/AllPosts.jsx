import React from "react";
import PostsData from "../Blog/PostData/PostData.json";
import Post from "./Post";
const AllPosts = () => {
  return (
    <div className="overflow-auto flex w-full justify-center lg:justify-around flex-wrap min-h-[calc(100vh-81px)] lg:p-10">
      {PostsData.map((post, key) => (
        <Post {...post} key={key} />
      ))}
    </div>
  );
};

export default AllPosts;
