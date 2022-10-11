import React from "react";

const  NavMenu = React.forwardRef((props, ref) => {

const callGroup1Ref = React.useRef()

function clickHandler() {
    callGroup1Ref.current.classList.toggle("open-group")

}
    return (
        <div className="nav-wrapper" ref={ref}>
            
                <div className="nav-li" onClick={clickHandler}> For Dogs</div>
                <div className="nav-dogs-group" ref={callGroup1Ref}>
                                <li className="back-btn" onClick={clickHandler}>Back</li>
                            
                                <li className="nav-li">Belts</li>
                                <li className="nav-li">Collars</li>
                                <li className="nav-li">Leashes</li>
                                <li className="nav-li">Dog Jackets</li>
                                <li className="nav-li">Booties</li>
                                <li className="nav-li">Gear</li>
                                <li className="nav-li">Spare Parts</li>
                                <li className="nav-li">Nutrition and Care</li>
                                <li className="nav-li">Kits</li>
                                <li className="nav-li">Gift Cards</li>
                            
                </div>
                
                <ul className="nav-li">For Humans</ul>
                <ul className="nav-li">Activities</ul>
        <ul className="nav-ul">
                <li className="nav-li">About Us</li>
                <li className="nav-li">Magazine</li>
                <li className="nav-li">Athletes</li>
                <li className="nav-li">Store Locator</li>
                <li className="nav-li last-li"></li>
            </ul>
        </div>
    )
});

export default NavMenu;

