import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Education from "./components/Education";
import More from "./components/More";
import Projects from "./components/Projects.js";



function App() {
  return (
    <div>
        <Navigation />
        <div id={'intro'}>
          <Intro/>
        </div>
        <div id={'education'}>
          <Education/>
        </div>
        <div id={'projects'}>
          <Projects/>
        </div>
        <div id={'more'}>
          <More/>
        </div>
      </div>
  );
}

export default App;


