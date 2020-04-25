import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Education from "./components/Education";
import More from "./components/More";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <div>
        <Navigation />
        <div id={'intro'}>
          <Intro/>
        </div>
        <div style={{backgroundColor:'black'}} id={'education'}>
          <Education/>
        </div>
        <div id={'projects'}>
          <Projects/>
        </div>
        <div id={'more'}>
          <More/>
        </div>
        <div style={{fixed:'bottom', backgroundColor:'black'}} class="text-center">
          <Footer/>
        </div>
      </div>
  );
}

export default App;


