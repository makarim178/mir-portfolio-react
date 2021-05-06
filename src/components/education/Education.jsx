import { useState, useEffect } from "react";
import './education.scss';
import api from "../../_config/api-config.js";
import EduItems from "../eduItems/EduItems";

const Education = () => {

    const [education, setEducation] = useState([]);
    useEffect(() => {
        getEducation();
    }, []);
    
    const getEducation = async () => {
        let url = api + 'educations';
        
        const response = await fetch(url);
        
        //console.log(await response.json());
        
        setEducation(await response.json());
        
    }

    return (
        <div className="education" id="education">
            <div className="title">
                <div className="titleTxt">
                    <h1>Education</h1>
                </div>
            </div>
            <div className="content">
                { education !== null && 
                    education.map((edu) => (
                        <EduItems key={edu.id} edu={edu} />
                        
                    ))
                }
            </div>
        </div>
    )
}

export default Education
