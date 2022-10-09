import React from "react";

export default function NavMenu() {

    const navRef = React.useRef()

    document.addEventListener('click', () =>{
        navRef.current.classList.toggle('open-nav')  
    })
       


    return (
        <div className="nav-wrapper" ref={navRef}>
            <h1>NavMenu</h1>
        </div>
    )
}