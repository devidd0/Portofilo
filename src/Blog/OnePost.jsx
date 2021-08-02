import React from "react";
import { Link, useParams } from "react-router-dom";
import PostData from "./PostData/PostData.json";
import ReactMd from "react-md-file";
const OnePost = () => {
  const slug = useParams();

  const finalOnePost = PostData.filter((post) => post.post_slug === slug.slug);
  return (
    <div className=" p-2 py-4 lg:p-10  w-full flex items-center flex-col">
      <div className="postTitle font-bold text-[#333] text-3xl mb-10 bg-white p-4 rounded text-center">
        {finalOnePost[0].post_title}
      </div>
      <pre className="post-content lg:text-lg  border-2 rounded w-full h-auto p-4 text-white font-mono">
        <ReactMd markdown={finalOnePost[0].post_content}/>
      </pre>
      <div className="post-date text-white text-2xl font-bold italic mt-4 tracking-widest">
        {finalOnePost[0].post_date}
      </div>
      <Link
        to="/blog"
        className=" mt-6 text-white bg-[#444] px-4 py-2 rounded "
      >
        Go To The MainPage
      </Link>
    </div>
  );
};

export default OnePost;
