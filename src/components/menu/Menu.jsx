import './menu.scss';
import SocialLinks from "../socialLinks/SocialLinks";

import ContactDetails from "../contactDetails/ContactDetails";

const Menu = ({menuOpen, setMenuOpen, menuItem, setMenuItem}) => {

    const setMenuOnClick = (item)  => {
        setMenuOpen(!menuOpen);
        setMenuItem(item);
    }
    return (
        <div className={"menu " + (menuOpen && " active")}>
            <div className="left"></div>
            <div className="right">
                <div className="menuItems">
                    <ul>
                        <li>
                            <a href="#intro" className={(menuItem === "intro") ? "active" : ""} onClick={() => setMenuOnClick("intro")}>Home</a>
                        </li>
                        <li>
                            <a href="#about" className={(menuItem === "about") ? "active" : ""}  onClick={() => setMenuOnClick("about")}>About</a>
                        </li>
                        <li>
                            <a href="#education" className={(menuItem === "education") ? "active": ""} onClick={() => setMenuOnClick("education")}>Education</a>
                        </li>
                        <li>
                            <a href="#workexperience" className={(menuItem === "workexperience") ? "active" : ""} onClick={() => setMenuOnClick("workexperience")}>Experience</a>
                        </li>
                        <li>
                            <a href="#skills" className={(menuItem === "skills") ? "active" : ""} onClick={() => setMenuOnClick("skills")}>Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio" className={(menuItem=== "portfolio") ? "active" : ""} onClick={() => setMenuOnClick("portfolio")}>Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className={(menuItem === "contact") ? "active" : ""} onClick={() => setMenuOnClick("contact")}>Contact</a>
                        </li>
                    </ul>

                </div>

                <ContactDetails />

                <SocialLinks />
                
            </div>

        </div>
    )
}

export default Menu
