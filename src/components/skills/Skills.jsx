import './skills.scss';
import { useState, useEffect } from "react";
import api from '../../_config/api-config.js';
import SkillCard from "../skillCard/SkillCard";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Skills = () => {
    const [feSkills, setfeSkills] = useState([]);
    const [beSkills, setBeSkills] = useState([]);
    const [dataSkills, setDataSkills] = useState([]);
    const [designSkills, setDesignSkills] = useState([]);
    const [others, setOthers] = useState([]);


    
    
    useEffect(() => {
        getData();
    }, [])
    
    const getData = async () => {
        const url = api + 'skills';

        const skills = [];

        const ref = await fetch(url);
        await ref.json().then((data) => {
            setfeSkills(data.filter((e) => e.category === 'FrontEnd'))
            setBeSkills(data.filter((e) => e.category === 'BackEnd'))
            setDataSkills(data.filter((e) => e.category === 'Data'))
            setDesignSkills(data.filter((e) => e.category === 'da'))
            setOthers(data.filter((e) => e.category === 'others'))
        });
    }

    return (
        <div className="skills" id="skills"> 
            <div className="title">
                <div className="titleTxt">
                    <h1>Skills</h1>
                </div>
            </div>

            

            <div className="skillsDiv">
                <div className="indSklDiv">

                    <Carousel 
                        responsive={responsive} 
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        focusOnSelect={true}
                        infinite={true}
                        autoPlay={true}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="transform 2000ms ease-in-out"
                    >

                    {
                        beSkills !== null && beSkills.map((item) => (
                            <SkillCard key={item.id} skill={item} />
                            ))
                        }
                    
                        </Carousel>
                        
                </div>
                <div className="indSklDiv">
                <Carousel 
                        responsive={responsive} 
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        focusOnSelect={true}
                        infinite={true}
                        autoPlay={true}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                        autoPlaySpeed={2500}
                        keyBoardControl={true}
                        customTransition="transform 2500ms ease-in-out"
                    >
                    {
                        feSkills !== null && feSkills.map((item) => (
                            <SkillCard key={item.id} skill={item} />
                        ))
                    }
                    </Carousel>
                </div>
                <div className="indSklDiv">
                <Carousel 
                        responsive={responsive} 
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        focusOnSelect={true}
                        infinite={true}
                        autoPlay={true}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                        autoPlaySpeed={3200}
                        keyBoardControl={true}
                        customTransition="transform 1500ms ease-in-out"
                    >
                    {
                        dataSkills !== null && dataSkills.map((item) => (
                            <SkillCard key={item.id} skill={item} />
                        ))
                    }
                    </Carousel>
                </div>
                <div className="indSklDiv">

                <Carousel 
                        responsive={responsive} 
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        focusOnSelect={true}
                        infinite={true}
                        autoPlay={true}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                        autoPlaySpeed={2200}
                        keyBoardControl={true}
                        customTransition="transform 1000ms ease-in-out"
                    >
                    {
                        designSkills !== null && designSkills.map((item) => (
                            <SkillCard key={item.id} skill={item} />
                        ))
                    }
                    </Carousel>
                </div>
                <div className="indSklDiv">

                <Carousel 
                        responsive={responsive} 
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        focusOnSelect={true}
                        infinite={true}
                        autoPlay={true}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                        autoPlaySpeed={3500}
                        keyBoardControl={true}
                        customTransition="transform 1500ms ease-in-out"
                    >
                    {
                        others !== null && others.map((item) => (
                            <SkillCard key={item.id} skill={item} />
                        ))
                    }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Skills
