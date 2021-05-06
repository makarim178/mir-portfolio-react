import './topbar.scss';

const Topbar = ({menuOpen, setMenuOpen, setMenuItem}) => {

    const setMenuOnClick = (item)  => {
        setMenuOpen(!menuOpen);
        setMenuItem(item);
    }
    return (
        <div className={"topbar " + (menuOpen && " active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" onClick={() => setMenuOnClick("intro")}>
                        <span>Mir</span>
                        <span>Mir</span>
                    </a>
                    {/* <div className="itemContainer">
                        <a href="tel:+19055985580">
                            <SmartphoneIcon className="icon" />
                            +1 (905) 598 - 5580
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="mailto:makarim178@gmail.com">
                            <EmailIcon  className="icon" />
                            makarim178@gmail.com
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/mir-ashiful-karim-94386523/">
                            <LinkedInIcon className="icon" />
                        </a>
                    </div> */}
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar
