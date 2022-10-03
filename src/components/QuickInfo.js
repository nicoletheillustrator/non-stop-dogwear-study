import React from "react";

export default function QuickInfo() {
    return (
        <div className="quick-info">
            <div className="info-container">
                <div className="info info1">
                <i className="fa-solid fa-credit-card"></i>
                    <h3>Secure Payment</h3>
                    <p>Paypal or Visa/Mastercard.</p>
                </div>
                <div className="info info2">
                <i className="fa-solid fa-campground"></i>
                    <h3>No Surprises</h3>
                    <p>Taxes, VAT and fees are prepaid and included in our prices.</p>
                </div>
                <div className="info info3">
                <i className="fa-solid fa-truck-fast"></i>
                    <h3>Worldwide Shipping</h3>
                    <p>Free over US$120.00. 60-day free return policy</p>
                </div>
                <div className="info info4">
                <i className="fa-solid fa-headset"></i>
                    <h3>Support Center</h3>
                    <p>Answering all your questions.</p>
                </div>
            </div>
        </div>
    )
};