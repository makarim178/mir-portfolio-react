import './socialLinks.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const SocialLinks = () => {
    return (
        <div className="socialIcons">
            <div className="icon">
                <LinkedInIcon className="icontext"/>
            </div>
            <div className="icon">
                <FacebookIcon className="icontext"/>
            </div>
            <div className="icon">
                <TwitterIcon className="icontext"/>      
            </div>
            <div className="icon">
                <InstagramIcon className="icontext"/>      
            </div>
            <div className="icon">
                <GitHubIcon className="icontext"/>      
            </div>
            <div className="icon">
                <LanguageIcon className="icontext"/>
            </div>
        </div>
    )
}

export default SocialLinks
