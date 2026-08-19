import React from "react";
import "./advertTop.scss";
import logo from "/assets/logo.png";
import advert from "/assets/advertttt.gif";

const AdvertTop = () => {
    return(
        <div className="advertTop">
            <div className="advertTopContainer">
                <div className="left">
                    <a href="#">
                        <img src={logo} alt="News Logo" />;
                    </a>
                </div>
                <div className="right">
                    <a href="#">
                        <img src={advert} alt="Advertisement Logo" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default AdvertTop