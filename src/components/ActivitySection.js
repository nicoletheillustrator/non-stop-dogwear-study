import React from "react";

export default function Activity(props){

    return (
        <section className="activity-section">
            <h2 className="section-title">Activities</h2>
            
          <div className="a-cont">
              <div className="grid-container">{props.data}</div>
          </div>
        </section>
    )
}