import React from "react";

export default function AdCard(props) {

let styling = {
    backgroundImage: `url(${props.data.itemImage})`,
}
    return(
        <div className="--ad-container">
            <div className="image-content" style={styling}>
            <div className="--ad-card" id={props.data.itemIC}>
                <h1>{props.data.itemDescription}</h1>
                <button className="adcard-btn">{props.data.itemName}</button>
            </div>
            </div>
        </div>
    )
}



/* <img className="--img-container" alt="img" src={props.data.itemImage} ></img> */