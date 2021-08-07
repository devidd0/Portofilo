import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostData from "./PostData/PostData.json";
import ReactMd from "react-md-file";
import OtherPost from "./OtherPost";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Autoplay]);
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";
const OnePost = () => {
  const slug = useParams();
  const [otherPosts, setOtherPosts] = useState([]);
  const finalOnePost = PostData.filter((post) => post.post_slug === slug.slug);
  useEffect(() => {
    setOtherPosts(PostData.filter((post) => post.post_slug !== slug.slug));
  }, []);
  return (
    <div className=" p-2 py-4 lg:p-10  w-full flex items-center flex-col">
      <div className="postTitle font-bold text-[#333] text-3xl mb-10 bg-white p-4 rounded text-center">
        {finalOnePost[0].post_title}
      </div>
      <pre className="post-content lg:text-lg  border-2 rounded w-full h-auto p-4 text-white font-mono">
        <ReactMd markdown={finalOnePost[0].post_content} />
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
      <h1 className="lg:text-3xl text-2xl text-white mt-10 font-bold">
        Other Blog Posts
      </h1>
      <Swiper
        loop="true"
        autoplay={true}
        slidesPerView={3}
        watchSlidesVisibility={true}
        direction="vertical"
        className="flex justify-around w-full h-56"
      >
        {otherPosts &&
          otherPosts.map((otherPost, key) => (
            <SwiperSlide>
              <OtherPost {...otherPost} key={key} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default OnePost;
