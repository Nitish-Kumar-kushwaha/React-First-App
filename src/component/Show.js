import React from "react";

import '../index.css'

function Show(props){

    const year = props.year
    const title = props.title;
    const link = props.imgSrc;
    return <div className="image-box">
        
        <img src={link} alt="image"/>
        <p>{title}</p>
        <p>{year}</p>
    </div>
}

export default Show;