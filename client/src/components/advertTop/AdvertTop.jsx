import React from "react";
import "./advertTop.scss";


const AdvertTop = () => {
    const advert = `${import.meta.env.BASE_URL}assets/advertttt.gif`;
    const logo = `${import.meta.env.BASE_URL}assets/logo.png`;
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