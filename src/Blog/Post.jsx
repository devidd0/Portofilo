import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Post = (post) => {
  return (
    <div>
      <Link to={`/blog/${post.post_slug}`}>
      <div
        className="w-72 group border-2 cursor-pointer flex-col relative bg-bgBase3 text-baseHeaderColor h-44 rounded overflow-hidden flex items-center justify-center transform transition-all hover:scale-105 m-4"
      >
        <h1 className="font-bold text-xl ">{post.post_title}</h1>
          <div className="transform invisible absolute bottom-4 font-bold scale-0 group-hover:scale-100 transition-all group-hover:visible bg-gray-300 bg-opacity-20 px-2 rounded">{ post.post_date}</div>
      </div>
    </Link>
    </div>
  );
};

export default Post;
