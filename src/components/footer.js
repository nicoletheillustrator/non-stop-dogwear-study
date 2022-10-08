import React from "react";

export default function Footer() {

    const svwRef = React.useRef()
    const supRef = React.useRef()
    const proRef = React.useRef()

    const arrow1Ref = React.useRef()
    const arrow1twinRef = React.useRef()

    const arrow2Ref = React.useRef()
    const arrow2twinRef = React.useRef()
    
    const arrow3Ref = React.useRef()
    const arrow3twinRef = React.useRef()


    function revealHandler() {
    svwRef.current.classList.toggle('show-list')
    arrow1Ref.current.classList.toggle('down-arrow')
    arrow1twinRef.current.classList.toggle('down-arrow')
    }
   
    function revealHandlerSup() {
    supRef.current.classList.toggle('show-list')
    arrow2Ref.current.classList.toggle('down-arrow')
    arrow2twinRef.current.classList.toggle('down-arrow')
    }
    function revealHandlerPro() {
        proRef.current.classList.toggle('show-list')
        arrow3Ref.current.classList.toggle('down-arrow')
    arrow3twinRef.current.classList.toggle('down-arrow')
        }

    return(
        <section className="footer-section">
            <div className="service-section">
                <ul className="footer-ul" onClick={revealHandler}> <i class="fa-solid fa-play" ref={arrow1twinRef}></i>Service<i class="fa-solid fa-play last" ref={arrow1Ref}></i>
                    <div className="footer-wrapper hide-list" ref={svwRef}>
                        <li>Contact</li>
                        <li>Store Locator</li>
                        <li>Pro Program</li>
                        <li>B2B media</li>
                        <li>B2B</li>
                    </div>
                </ul>
            </div>
            <div className="support-section">
                <ul className="footer-ul" onClick={revealHandlerSup}> <i class="fa-solid fa-play" ref={arrow2twinRef}> </i>Support Center<i class="fa-solid fa-play last" ref={arrow2Ref}></i>
                    <div className="footer-wrapper hide-list" ref={supRef}>
                        <li>General FAQ</li>
                        <li>Payment ${`&`} Orders</li>
                        <li>Shipping ${`&`} Delivery</li>
                        <li>Returns ${`&`} Exchange</li>
                        <li>Reclaims</li>
                    </div>
                </ul>
            </div>
            <div className="product-section">
                <ul className="footer-ul" onClick={revealHandlerPro}><i class="fa-solid fa-play" ref={arrow3twinRef}> </i> Products<i class="fa-solid fa-play last" ref={arrow3Ref}></i>
                    <div className="footer-wrapper hide-list" ref={proRef}>
                        <li>Catalog</li>
                        <li>Product Care</li>
                        <li>Materials</li>
                        <li>Our Responsibility</li>
                        <li>Athletes</li>
                        <li>Jobs</li>
                        <li>Sponsoring</li>
                        <li>Activity Calendar</li>
                    </div>
                </ul>
            </div>

        </section>
    )
}