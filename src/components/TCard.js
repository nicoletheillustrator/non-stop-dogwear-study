import React from "react";
import { Swipe, SwiperSlide } from 'swiper/react';
export default function TDataCard(props) {

    const styles = {
        backgroundImage: `url(${props.data.bg})`
    }
    return(
        <SwiperSlide>
    <div className="page-swiper-card">
        <div className="testimonials">
            <div className="testimonial-card" style={styles}>
                      <img className="testimonial-img" src={props.data.tImg} alt="img"></img>
                        <div className="t-card-info">
                            <p className="country-name"><span className={props.data.tCountryFlag}></span>{props.data.tCountryName}</p>
                            <h3 className="testimonial-name">{props.data.tName}</h3>
                            <p className="testimonial-occupation">{props.data.tOccupation}</p>
                        </div>
             </div>
             <div className="testimonial-product-card">
                        <h2 className="t-item-name">{props.data.tItemName}</h2>
                        <img className="t-item-img" src={props.data.tItemImg} alt="img"></img>
            </div>
        </div>
    </div>
     </SwiperSlide>
    )
};

TDataCard.displayName = 'SwiperSlide'