import React, { useContext } from "react";
import Post from "./Post";
import FilterPost from "./FilterPost";
import { MainContext } from "../MainContext";
import CantFindPost from "./CantFindPost";
const AllPosts = () => {
  const { allPosts } = useContext(MainContext);
  return (
    <div>
      <FilterPost />
      <div className="overflow-auto flex w-full justify-center lg:justify-around flex-wrap min-h-[calc(100vh-81px)] lg:p-10">
        {allPosts.length > 0 ? (
          <>
            {allPosts.map((post, key) => (
              <Post {...post} key={key} />
            ))}
          </>
        ) : (
          <CantFindPost />
        )}
      </div>
    </div>
  );
};

export default AllPosts;
