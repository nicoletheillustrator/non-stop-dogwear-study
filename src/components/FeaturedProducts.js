import React from "react";


export default function FeaturedProducts(props) {

    let pressed = false;
    let startx;
    let x;
    const fpscRef = React.useRef(); //"slider-container"
    const btn1 = React.useRef();
    const btn2 = React.useRef();
    const btn3 = React.useRef();
    const btn4 = React.useRef();
    const [currentIndex, setCurrentIndex] = React.useState(0);

  
    function mousedown(e) {
        pressed = true;
        startx = e.nativeEvent.offsetX - fpscRef.current.offsetLeft;
        fpscRef.current.style.cursor = "grabbing";
    };

    function mouseenter() {
        fpscRef.current.style.cursor = "grab";
    };
    function mouseup(e) {
        fpscRef.current.style.cursor = "grab";
        pressed = false;
        x = e.nativeEvent.offsetX;
        var currentPos =  x - startx;
     
    };

    function mousemove(e) {
        if (!pressed) return;
        e.preventDefault();

        x = e.nativeEvent.offsetX;

       var currentPos =  x - startx;
       
       fpscRef.current.style.transform =`translate(${currentPos}%)`;
    
    
    //boundaries
    //     if (currentPos >= 10) {
    //         fpscRef.current.style.transform = `translate(${0}%)`;
    //         setCurrentIndex(()=>{
    //             return 0
    //         })
    //     }
    //    if (currentPos < -10) {
    //     fpscRef.current.style.transform = `translate(${-25}%)`;
    //         setCurrentIndex(()=>{
    //             return 1
    //         })
          
    //    }

    //    if (currentPos < -20) {
    //     fpscRef.current.style.transform = `translate(${-50}%)`;
    //     setCurrentIndex(()=>{
    //         return 2
    //     })
       
    //    }

    //   if (currentPos < -28) {
    //     fpscRef.current.style.transform = `translate(${-75}%)`;
    //     setCurrentIndex(()=>{
    //         return 3
    //     })
    //    }
       console.log(currentPos)
    };
    

    
function bt2() {
    if (currentIndex === 0 || 2 || 3) {
        fpscRef.current.style.transform = `translate(${-25}%)`
        setCurrentIndex(()=>{
            return 1
        })
    }
}

function bt1(){
    if (currentIndex) {
        fpscRef.current.style.transform = `translate(${0}%)`
        setCurrentIndex(()=>{
            return 0
        })
    }
   
}
function bt3(){
    if (currentIndex === 0 || 1 || 3) {
        fpscRef.current.style.transform = `translate(${-50}%)`
        setCurrentIndex(()=>{
            return 2
        })
    }
}
function bt4(){
    if (currentIndex === 0 || 1 || 2) {
        fpscRef.current.style.transform = `translate(${-75}%)`
        setCurrentIndex(()=>{
            return 3
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


    return (
        <section className="fp-section">
            <h1 id="fp-t" >Top Products</h1>
            <div className="fp-container">
                <div className="fp-slider-container" ref={fpscRef}  onMouseDown={mousedown} onMouseEnter={mouseenter} onMouseUp={mouseup} onMouseMove={mousemove}>{props.data}</div>
            </div>
            <div className="indicator-slider">
            <button className="btn-indicator" onClick={bt1} ref={btn1} id="buttonOne" style={buttonColors(0)}></button>
            <button className="btn-indicator" onClick={bt2} ref={btn2} id="buttonTwo" style={buttonColors(1)}></button>
            <button className="btn-indicator" onClick={bt3} ref={btn3} id="buttonThree" style={buttonColors(2)}></button>
            <button className="btn-indicator" onClick={bt4} ref={btn4} id="buttonThree" style={buttonColors(3)}></button>
        </div>
        </section>
    )
}