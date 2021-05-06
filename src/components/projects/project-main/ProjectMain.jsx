import { useState, useEffect } from "react";
import api from '../../../_config/api-config.js';
import './projectMain.scss';
import ProjTools from '../projTools/ProjTools';
import VideoContainer from '../vdoContainer/VideoContainer';
import PublicIcon from '@material-ui/icons/Public';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ProjectMain = () => {

    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        getData();
    }, [])

    const handleClick = (ways) => {
        ways === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
    }

    const getData = async () => {
        const url = api + "projects";
        const dataRef = await fetch(url);
        //console.log(await dataRef.json());
        await dataRef.json().then((data) => { 
            setData(data);
        });
    }

    return (
        <div className="projMain" id="portfolio">

                <div className="projTitle">
                    <h1>Portfolio / Projects</h1>
                </div>

                {

                    data !== null && data.map((d) => (
                    
                    <div className="projContainer" key={d.id} style={{left: `${((d.id -1)*100)}vw`, transform: `translateX(-${currentSlide * 100}vw)`}}>
                        <div className="projItem">
                        <div className="projLeft">
                            <div className="leftContainer">
                                <div className="lcFront">
                                    <div className="projLcTitle">
                                        <h2>{d.category}</h2>
                                        <div className="lcTitleBack">
                                            <h1>-{d.id > 9 ? d.id.toString() : "0" + d.id.toString()}-</h1>
                                        </div>
                                    </div>

                                    <h5>
                                        {d.title}
                                    </h5>
                                    
                                    <p>
                                        {d.desc}
                                    </p>

                                    <div className="visitBtn">
                                        <a href={d.siteUrl} target="_blank">
                                            <PublicIcon  className="lcProjGlobeBtn" />
                                        </a>
                                    </div>

                                </div>
                                
                            </div>
                        </div>

                        <div className="projRight">
                            <div className="projRImageBg">
                                <img src={d.mainImage} alt={d.title} />
                            </div>
                            {d.videoUrls !== null && 
                                <div className="videoDiv">
                                    {d.videoUrls.map((video) => (
                                        <VideoContainer video={video.videoUrl} key={video.id}/>
                                        ))}
                                </div>
                            }


                            <div className="prToolsUsedDiv">
                                {d.tools.map((tool) => (
                                    <ProjTools tool={tool.tool} key={tool.id} />
                                ))}
                            </div>
                            
                        </div>

                    
                </div>

            </div>
            
            )
            )
                }
            <div className="projArrowRight">
                <ArrowForwardIosIcon className="projArrowRightIcon" onClick={() => handleClick()}/>
            </div>
            <div className="projArrowLeft">
                <ArrowBackIosIcon className="projArrowleftIcon" onClick={() => handleClick("left")} />
            </div>


        </div>
    )
}

export default ProjectMain