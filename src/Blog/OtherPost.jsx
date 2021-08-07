import React from "react";
import { Link } from "react-router-dom";

const OtherPost = (otherPost) => {
  return (
    <Link
      target="_blank"
      to={`${otherPost.post_slug}`}
      className="flex bg-gray-600 text-white w-full mt-6 rounded px-10 h-12 transition-all items-center justify-between"
    >
      <div>{otherPost.post_title}</div>
      <div>{otherPost.post_date}</div>
    </Link>
  );
};

export default OtherPost;
