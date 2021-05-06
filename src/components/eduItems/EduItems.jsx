import {useState, useEffect} from 'react';
import api from '../../_config/api-config.js';
import CourseDetails from "../courseDetails/CourseDetails";
import './eduItems.scss';

const EduItems = ({edu}) => {
    const {id, instituteName, instituteAddress, gradName, completionRate, status, yearStarted, yearEnded, url} = edu;
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses();
    }, [])

    const getCourses = async () => {
        let url = api + `courses/edu/${id}`;
        const data = await fetch(url);
        await data.json().then(data => {
            setCourses(data);
        });
    }

    return (
        <div className="eduItems">

            <div className="topContent">
                <div className="left">
                    <h1>
                        <a href={url} target="_blank" rel="noopener noreferrer">

                            {instituteName}
                        </a>
                        <span>
                            {instituteAddress}
                        </span>
                    </h1>
                    <h2>{gradName}</h2>
                </div>
                <div className="right">
                    <div className="progressBar">
                        <div className="bgWhite">
                            <div className="bgBlue" style={{width: `${completionRate}`}}>
                            </div>
                        </div>
                        <div className="txt">
                            <span>{completionRate}</span>
                        </div>
                    </div>
                    <div className="duration">
                        <span>{yearStarted}</span>
                        <span>{yearEnded}</span>
                    </div>
                </div>
            </div>

            <div className="titleDivider"></div>

            <div className="midBody">
                <h3>
                    <span>Status: </span>
                {status}</h3>
            </div>

            <div className="footerBody">

                <div className="footerTitle">
                    <h4>Courses: </h4>
                </div>


                <div className="sgCourse">
                    { courses !== null && courses.map((course, index) => (
                            <CourseDetails key={index} course={course} />
                        ))
                    }
                </div>

                
            </div>

            <div className="divider">

            </div>
            

        </div>
    )
}

export default EduItems
