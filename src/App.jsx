import React, { useRef } from "react";
import Header from "./components/header";
import Skills from "./components/skills";
import Home from "./components/home";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThankYou from "./components/thankyou";
import ErrorPage from "./components/ErrorPage";
import { MainContextProvider } from "./MainContext";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainBlogPage from "./Blog/MainBlogPage";

function App() {
  return (
    <Router>
      <Header />
      <MainContextProvider>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/blog" component={MainBlogPage} />
        <Route path="*" component={ErrorPage}/>
      </Switch>
      </MainContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
