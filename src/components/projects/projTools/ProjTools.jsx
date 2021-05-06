import { useState, useEffect } from "react";
import './projTools.scss';

const ProjTools = ({tool}) => {

    


    return (
        <div className="prToolsCard">
            <div className="prToolsCardImgDiv">
                <img src={tool} alt="html" />
            </div>
        </div>
    )
}

export default ProjTools
