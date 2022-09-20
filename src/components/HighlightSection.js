import React from "react";


let sliderContainer = document.getElementById('highlight-wrap');
let innerSlide = document.getElementById('card-wrap');

let pressed = false;
let startX;
let x;


function mousedownSC(e) {
    pressed = true;
    startX = e.offsetX - innerSlide.offsetLeft;
    sliderContainer.style.cursor= "grabbing";
}
console.log(sliderContainer)

function mouseenterSc() {
    sliderContainer.style.cursor = "grab";
}

function mouseupSc() {
    sliderContainer.style.cursor = "grab";
    pressed = false;
}

function mousemoveSc(e) {
    if(!pressed) return;
    x = e.offsetX;
    innerSlide.style.right = `${x - startX}px`;
}
export default function HighlightSection(props) {
    
   
    return(
        <section className="highlight" id="highlight-wrap"  >
            <div className="highlight-wrapper" id="card-wrap">
                <div className="card-wrapper" onMouseDown={mousedownSC} onMouseEnter={mouseenterSc} onMouseUp={mouseupSc} onMouseMove={mousemoveSc} >{props.data}</div>
            </div>
        </section>
    )
}