import React from "react";

export default function FaqCard(props) {
const styles = {
    backgroundImage: `url(${props.data.bgImg})`
}

    return(
        <div className="faq-container">
            <div className="faq-bg" style={styles}></div>
        <div className="faq-info">
            <h3 className="faq-t">{props.data.faqName}</h3>
            <p className="faq-d">{props.data.faq}</p>
            <a className="faq-link" href="/#">
                {props.data.faqlead}
                <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
        </div>
    )
};