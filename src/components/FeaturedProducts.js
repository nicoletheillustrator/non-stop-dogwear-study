import React from "react";
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/scss';
import "swiper/css/pagination";
import 'swiper/scss/pagination';
import  { Pagination } from 'swiper';

export default function FeaturedProducts(props) {
    
 
    return (
        <section className="fp-section">
            <h1 id="fp-t" >Top Products</h1>
            <Swiper
            pagination={{clickable:true}}
            modules={[Pagination]}
            effect
            speed={800}
            allowTouchMove = {true}
            direction='horizontal'
           
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
            >
             {props.data}
            </Swiper>
        
        </section>
    )
}


