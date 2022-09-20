import React from "react";

export default function AdCard(props) {

    return(
        <div className="--ad-container">
            <img className="--img-container" alt="img" src={props.data.itemImage}></img>
            <div className="--ad-card">
                <h1>{props.data.itemDescription}</h1>
                <button>{props.data.itemName}</button>
            </div>
        </div>
    )
}