import { useState } from "react";
import './portfolio.scss';
import PortfolioList from "../portfolioList/PortfolioList";

const Portfolio = () => {

    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>

            <div className="container">
                <div className="item">
                    <img src="https://res.cloudinary.com/makarim/image/upload/v1617606662/profile-mir/Web/thumbnails/08_Breakout_JS_lv5rhd.jpg" alt="" />
                    <h3>Some App</h3>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/makarim/image/upload/v1617606662/profile-mir/Web/thumbnails/08_Breakout_JS_lv5rhd.jpg" alt="" />
                    <h3>Some App</h3>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/makarim/image/upload/v1617606662/profile-mir/Web/thumbnails/08_Breakout_JS_lv5rhd.jpg" alt="" />
                    <h3>Some App</h3>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/makarim/image/upload/v1617606662/profile-mir/Web/thumbnails/08_Breakout_JS_lv5rhd.jpg" alt="" />
                    <h3>Some App</h3>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/makarim/image/upload/v1617606662/profile-mir/Web/thumbnails/08_Breakout_JS_lv5rhd.jpg" alt="" />
                    <h3>Some App</h3>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/makarim/image/upload/v1617606662/profile-mir/Web/thumbnails/08_Breakout_JS_lv5rhd.jpg" alt="" />
                    <h3>Some App</h3>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/makarim/image/upload/v1617606662/profile-mir/Web/thumbnails/08_Breakout_JS_lv5rhd.jpg" alt="" />
                    <h3>Some App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
