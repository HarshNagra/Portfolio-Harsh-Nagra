import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollableAnchor from "react-scrollable-anchor";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Education from "./components/Education";



function App() {
  return (
    <React.Fragment>
        {/* <Navigation /> */}
        <ScrollableAnchor id={"intro"}>
          <Intro />
        </ScrollableAnchor>
        <ScrollableAnchor id={"intro"}>
          <Education />
        </ScrollableAnchor>
        {/* <ScrollableAnchor id={"about"}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={"projects"}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={"contacts"}>
          <Links />
        </ScrollableAnchor> */}
      </React.Fragment>
  );
}

export default App;
