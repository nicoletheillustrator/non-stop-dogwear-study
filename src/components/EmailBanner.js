import React from "react";

export default function EmailBanner() {
    return (
        <div className="email-banner">
            <h2 className="banner-t">Do you want more?</h2>
            <p className="banner-p">Sign up to get news and informations about new products, upcoming events, and other news from Non-stop dogwear.</p>
            <input type="email" placeholder="Your email address" className="email-input"></input> <button className="email-btn">GO</button>
        </div>
    )
};