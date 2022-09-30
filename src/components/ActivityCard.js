import React from "react";

export default function ActivityImage(props) {

    const styles = {
        backgroundImage: `url(${props.data.img})`
    }
    return(
      
        <div className="a-image-container" id={props.data.imgnumber} style={styles}>
            <div className="title-nest">
                <p className="a-title">{props.data.name}</p>
            </div>
           
        </div>
    
    )
};
