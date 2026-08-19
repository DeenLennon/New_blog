import React from 'react';
import StyleOne from "../../components/styleOne/StyleOne";
import StyleTwo from "../../components/styleTwo/StyleTwo";
import {HealthFitness, LifeStyle} from "../../Category";
import "./mainBodyThree.scss";

function MainBodyThree() {
  return (
    <div className="mainBodyThree">
        <div className="mainBodyThreeWrapper">
            <div className="item">
                <StyleOne {...HealthFitness}/>
            </div>
            <div className="item">
                <StyleTwo {...LifeStyle}/>
            </div>
            <div className="item"></div>
        </div>
    </div>
  )
}

export default MainBodyThree