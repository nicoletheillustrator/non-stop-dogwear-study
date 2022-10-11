import React from "react";

export default function UserCustomerization() {
    return(
        <div className="usc-wrapper">
            <div className="dropdowns" >
                 <select className="ul-drop-btn language-btn" name="country">
                <option>American English</option>
                </select>
               <br></br>
               
                <select className="ul-drop-btn country-btn" name="country">
                <option>United States of America</option>
                </select>
            </div>
            <div className="site-sug-wrap">
                <h2>Follow Us</h2>
                <i class="fa-brands fa-square-facebook"></i><i class="fa-brands fa-square-instagram"></i><i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    )
}