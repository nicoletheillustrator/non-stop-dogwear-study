import React from "react";


export default function HighlightSection(props) {
    let pressed = false;
    let startx;
    let x;
    const scRef = React.useRef(); //"slider-container"
    const btn1 = React.useRef();
    const btn2 = React.useRef();
    const btn3 = React.useRef();
    
    const [currentIndex, setCurrentIndex] = React.useState(0);

    function mousedown(e) {
        pressed = true;
        startx = e.nativeEvent.offsetX - scRef.current.offsetLeft;
        scRef.current.style.cursor = "grabbing";
    };

    function mouseenter() {
        scRef.current.style.cursor = "grab";
    };
    function mouseup() {
        scRef.current.style.cursor = "grab";
        pressed = false;
    };

    function mousemove(e) {
        if (!pressed) return;
        e.preventDefault();

        x = e.nativeEvent.offsetX;

       var currentPos =  x - startx;
        scRef.current.style.transform = `translate(${currentPos}%)`;
        
    //boundaries
        if (currentPos >= 10) {
            scRef.current.style.transform = `translate(${0}%)`;
            setCurrentIndex(()=>{
                return 0
            })
        }
       if (currentPos < -28) {
        scRef.current.style.transform = `translate(${-33.333}%)`;
            setCurrentIndex(()=>{
                return 1
            })
          
       }

       if (currentPos < -60) {
        scRef.current.style.transform = `translate(${-66.6667}%)`;
        setCurrentIndex(()=>{
            return 2
        })
       
       }
    };


    
function bt2() {
    if (currentIndex === 0 || 2) {
        scRef.current.style.transform = `translate(${-33.333}%)`
        setCurrentIndex(()=>{
            return 1
        })
    }
}

function bt1(){
    if (currentIndex) {
        scRef.current.style.transform = `translate(${0}%)`
        setCurrentIndex(()=>{
            return 0
        })
    }
   
}
function bt3(){
    if (currentIndex === 0 || 1) {
        scRef.current.style.transform = `translate(${-66.6667}%)`
        setCurrentIndex(()=>{
            return 2
        })
    }
}

const activestyle = {
    backgroundColor: '#FF3600',
}
const idlestyle = {
    backgroundColor: '#0E0E0E',
}
function buttonColors(x){
    if (currentIndex === x) {
       return activestyle
    }
    else {
     return idlestyle
    };
};

   
    return(
        <>
        <section className="highlight-section" >

                <div className="slider-container"  ref={scRef}  onMouseDown={mousedown} onMouseEnter={mouseenter} onMouseUp={mouseup} onMouseMove={mousemove}>{props.data}</div>
           
        </section>
        <div className="indicator-slider">
            <button className="btn-indicator" onClick={bt1} ref={btn1} id="buttonOne" style={buttonColors(0)}></button>
            <button className="btn-indicator" onClick={bt2} ref={btn2} id="buttonTwo" style={buttonColors(1)}></button>
            <button className="btn-indicator" onClick={bt3} ref={btn3} id="buttonThree" style={buttonColors(2)}></button>
        </div>
        </>
    )
}