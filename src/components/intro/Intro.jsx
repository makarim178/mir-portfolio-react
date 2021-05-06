import { useEffect, useRef } from 'react';
import './intro.scss';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';
import { init } from 'ityped';

const Intro = ({title, subTitle, linktoResume, desc, slogan}) => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, 
            { 
                showCursor: true, 
                backDelay: 1500,
                backSpeed: 50,
                strings: ['Web ', 'Mobile '] 
            })
    }, [])
    return (
        <div className="intro" id="intro">
            <video autoPlay loop muted className="introBg">
                <source src="assets/introBg4.mp4" type="video/mp4"/>
            </video>
            <div className="contents">
                <div className="introText">
                    <div className="txtBg">
                        <h1>Hello! I am <span>{title}</span></h1>
                        <h3>
                            {subTitle} <span ref={textRef}></span> 
                            
                        </h3>
                        <h3>
                            {desc}
                        </h3>

                        <RemoveIcon  className="dash" />
                        <div className="slogan">
                            <p>{slogan}</p>
                        </div>
                        
                        <a href={linktoResume} target="_blank" rel="noopener noreferrer">
                            <div className="resumeDiv">
                                <div className="btnResume">
                                        <span>Download Resume</span>
                                        <ArrowDropDownCircleRoundedIcon className="arrow" />
                                </div>
                                <div className="btnResumeHover">
                                        <span>Download Resume</span>
                                        <ArrowDropDownCircleRoundedIcon className="arrow" />
                                </div>
                            </div>
                        </a>
                        


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
