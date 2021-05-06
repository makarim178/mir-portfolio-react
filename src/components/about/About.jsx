import { useEffect, useState } from "react";
import './about.scss';
import api from '../../_config/api-config.js';
import SocialLinks from "../socialLinks/SocialLinks";

const About = () => {

    const [data, setData] = useState(null);
    

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        let url = api + 'portfolio/6w6ZkoCSFxYIZzkUob2r';
        const response = await fetch(url);

        setData(await response.json());

        // console.log(data); 
    }

    return (
        <div className="about" id="about">
            <div className="content">
                <div className="left">
                    <div className="image">
                        { data !== null && <img src={data.aboutImgUrl} /> }
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>About <span>me</span></h1>
                    </div>
                    <div className="dashTop"></div>
                    
                    <div className="adjective">
                        <h4>{data !== null && data.adjectiveWords}</h4>
                    </div>
                    <div className="desc">
                        <p>{data !== null && data.aboutDesc}</p>
                    </div>

                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}

export default About
