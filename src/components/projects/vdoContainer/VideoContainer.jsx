import YouTube from "react-youtube";

import './vdoContainer.scss';


const VideoContainer = ({video}) => {

    const opts = {
        height: '195',
        width: '320',

    }

    return (
        <div className="vdo2ndContainer">
            <YouTube videoId={video} opts={opts} />
            {/* <h1>Videos Here</h1>
            <p>{video}</p> */}
            {/* <video autoPlay loop muted className="prVideo">
                <source src={video} type="video/mp4"/>
            </video> */}
        </div>
    )
}

export default VideoContainer
