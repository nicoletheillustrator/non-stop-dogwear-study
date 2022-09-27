import React from "react";

export default function ProductData(props) {
    return(
        <div className="Pd-card">
            <img className="item-img" src={props.data.itemImg} alt={props.data.itemName}></img>
            <h3 className="item-name">{props.data.itemName}</h3>
            <p className="item-price">{props.data.itemPrice}</p>
        </div>
    )
}