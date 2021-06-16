import { useState, useEffect } from "react";

import './socialLinks.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


import api from "../../_config/api-config.js";


const SocialLinks = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        getLinks();
    }, []);


    const getLinks = async () => {
        //const lnkRef = [];
        const url = api + 'links';

        const ref = await fetch(url);
        ref.json().then((data) => {
            setLinks(data);
        });
    }

    return (
        <div className="socialIcons">
            {
                links.length > 0 && links.map((link) => (
                    <div className="icon" key={link.id}>
                        {link.linkName === "linkedIn" && <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className="icontext"/>
                            </a>
                        }
                        {link.linkName === "github" && <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="icontext"/>  
                            </a>
                        }
                        {link.linkName === "heroku" && <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <LanguageIcon className="icontext"/>
                            </a>
                        }
                        {link.linkName === "facebook" && <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="icontext"/>
                            </a>
                        }
                        {link.linkName === "twitter" && <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className="icontext"/> 
                            </a>
                        }
                        {link.linkName === "instagram" && <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="icontext"/>  
                            </a>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default SocialLinks
