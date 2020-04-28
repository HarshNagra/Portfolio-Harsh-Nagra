import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Education from "./components/Education";
import More from "./components/More";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import WorkExperience from './components/WorkExperience';


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
        <div id={'workexperience'} style={{backgroundColor:'black'}}>
          <WorkExperience/>
        </div>
        <div id={'more'}>
          <More/>
        </div>
        {/* Do not remove the FOOTER.  */}
        <div id={'footer'} style={{fixed:'bottom', backgroundColor:'black', paddingBottom:'20px'}} class="text-center">
          <Footer/>
        </div>
        {/* Do not remove the FOOTER.  */}
      </div>
  );
}

export default App;


