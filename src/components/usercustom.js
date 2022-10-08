import React from "react";

export default function UserCustomerization() {
    return(
        <div className="usc-wrapper">
            <div >
                <ul className="ul-drop-btn"> Language <i class="fa-solid fa-chevron-down"></i>
                </ul>
                <ul className="ul-drop-btn"> Country <i class="fa-solid fa-chevron-down"></i>
                </ul>
            </div>
            <div>
                <h2>Follow Us</h2>
                <i class="fa-brands fa-square-facebook"></i><i class="fa-brands fa-square-instagram"></i><i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    )
}