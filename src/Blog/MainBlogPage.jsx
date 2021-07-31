import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPosts from "./AllPosts";
import OnePost from "./OnePost";
const MainBlogPage = () => {
  return (
    <div className="h-auto bg-bgBase2">
      <Router>
        <Switch>
          <Route component={AllPosts} path="/blog" exact/>
          <Route component={OnePost} path="/blog/:slug" />
        </Switch>
      </Router>
    </div>
  );
};

export default MainBlogPage;
