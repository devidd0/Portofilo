import React, { useRef } from "react";
import Header from "./components/header";
import Skills from "./components/skills";
import Home from "./components/home";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThankYou from "./components/thankyou";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/thankyou" component={ThankYou} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
