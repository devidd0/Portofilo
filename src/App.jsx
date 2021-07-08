import React from "react";
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
        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
