import { useState, useEffect } from "react";

import Topbar from './components/topbar/Topbar';
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
// import Portfolio from "./components/projects/project-main/ProjectMain";
import ProjectMain from "./components/projects/project-main/ProjectMain";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import WorkExperience from "./components/workexperience/WorkExperience";
import Menu from "./components/menu/Menu";

import api from './_config/api-config.js'

import "./app.scss";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItem, setMenuItem] = useState("intro");
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {

    const url = api + 'portfolio/6w6ZkoCSFxYIZzkUob2r';
    const dataRef = await fetch(url);

    await dataRef.json().then(data => {
      setProfileData(data);
    });

  }
  
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  setMenuItem={setMenuItem}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuItem={menuItem} setMenuItem={setMenuItem}/>
      <div className="sections">
        <Intro 
          title={profileData.firstName+ ' ' + profileData.lastName}
          subTitle="a Full-stack" 
          desc="Application Developer" 
          slogan="One of my greatest passion is to enhance my knowledge on new technologies to help building interesting applications to better serve users." 
          linktoResume={profileData.resumeLink}
        />
        <About />
        <Education />
        <WorkExperience />
        <Skills />
        <ProjectMain />
        <Contact />
      </div>
    </div>
  );
}



export default App;
