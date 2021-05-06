import { useState, useEffect } from "react";
import './workexperience.scss';
import WorkIcon from '@material-ui/icons/Work';
import api from '../../_config/api-config.js';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PublicIcon from '@material-ui/icons/Public';

const WorkExperience = () => {
    const [we, setWe] = useState([]);

    const iconStyles = {background: "#518de0", color: "white"};
    useEffect(() => {
        getData();
    }, [])
    
    const getData = async () => {
        const workExp = [];
        const url = api + "workexperiences";

        const response = await fetch(url);
        await response.json().then((data) => {
            setWe(data.sort((a,b) => {
                return b.yearEnded - a.yearEnded
            }));
        })
    }

    return (
        <div className="we" id="workexperience">
            <div className="title">
                <div className="titleTxt">
                    <h1>Experience</h1>
                </div>
            </div>
            <div className="timeline">
                <VerticalTimeline>
                    {

                    we.map(item => {

                        let dateString = `${item.yearStarted.toString()} - ${item.yearEnded.toString()}`;

                        return(
                        <VerticalTimelineElement
                            key={item.id}
                            date={dateString}
                            dateClassName="date" 
                            iconStyle={iconStyles}
                            icon={<WorkIcon/>}
                        >

                            <h3 className="vertical-timeline-element-title">
                                {item.jobTitle}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {item.companyName + ", " + item.companyLocation}
                            </h5>
                            <div className="desc">
                                
                                <ul className="ListItems">
                                    {
                                        item.jobDescs.map((i) => {
                                            return (
                                                <li className="indItem" key={i.id}>{i.jobDesc}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="footerElement">
                                <div className="dur">
                                    <span>{item.yearStarted + " - " + item.yearEnded}</span>
                                </div>

                                { item.url !== "" && 
                                    <div className="link">

                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            <PublicIcon />
                                        </a>
                                    </div>
                                }
                            </div>
                        </VerticalTimelineElement>
                    )}
                    )}
                    
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default WorkExperience
