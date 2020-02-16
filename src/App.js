import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteState from "./context/SiteState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import NotFound from "./components/sections/NotFound";

import "./css/App.css";

function App() {
  return (
    <SiteState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </SiteState>
  );
}

export default App;
