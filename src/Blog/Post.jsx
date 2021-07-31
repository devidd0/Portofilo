import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Post = (post) => {
  return (
    <div>
      <Link to={`/blog/${post.post_slug}`}>
      <div
        className="w-72  cursor-pointer  bg-white bg-opacity-50 h-44 rounded overflow-hidden flex items-center justify-center transform transition-all hover:scale-110 m-4"
      >
        <h1 className="font-bold text-xl ">{post.post_title}</h1>
        
      </div>
    </Link>
    </div>
  );
};

export default Post;
