import React from "react";
import { SwiperSlide } from 'swiper/react';

export default function ProductData(props) {
    return(
        <SwiperSlide>
            <div className="pd-section">
                <div className="pd-container">
                    <img className="item-img" src={props.data.itemImg} alt={props.data.itemName}></img>
                    <h3 className="item-name">{props.data.itemName}</h3>
                    <p className="item-price">{props.data.itemPrice}</p>
                </div>
            </div>
        </SwiperSlide>
    )
};

ProductData.displayName = 'SwiperSlide';