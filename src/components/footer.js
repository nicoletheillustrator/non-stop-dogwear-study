import React from "react";

export default function Footer() {

    const svwRef = React.useRef()
    const supRef = React.useRef()
    const proRef = React.useRef()
    function revealHandler() {
    svwRef.current.classList.toggle('hide-list')
    }
   
    function revealHandlerSup() {
    supRef.current.classList.toggle('hide-list')
    }
    function revealHandlerPro() {
        proRef.current.classList.toggle('hide-list')
        }

    return(
        <section className="footer-section">
            <div className="service-section">
                <ul className="footer-ul" onClick={revealHandler}> Service
                    <div className="footer-wrapper show-list" ref={svwRef}>
                        <li>Contact</li>
                        <li>Store Locator</li>
                        <li>Pro Program</li>
                        <li>B2B media</li>
                        <li>B2B</li>
                    </div>
                </ul>
            </div>
            <div className="support-section">
                <ul className="footer-ul" onClick={revealHandlerSup}> Support Center
                    <div className="footer-wrapper show-list" ref={supRef}>
                        <li>General FAQ</li>
                        <li>Payment ${`&`} Orders</li>
                        <li>Shipping ${`&`} Delivery</li>
                        <li>Returns ${`&`} Exchange</li>
                        <li>Reclaims</li>
                    </div>
                </ul>
            </div>
            <div className="product-section">
                <ul className="footer-ul" onClick={revealHandlerPro}> Products
                    <div className="footer-wrapper show-list" ref={proRef}>
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