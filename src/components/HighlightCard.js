import React from "react";


export default function HighlightCard(props) {

    return(
        <div className="highlight-card">
            <h2 className="highlight-t">{props.data.hlTitle}</h2>
            <p className="highlight-d">{props.data.hlDescript}</p>
        </div>
    )
}