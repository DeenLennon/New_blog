import React from 'react';
import StyleTwo from "../../components/styleTwo/StyleTwo";
import StyleOne from "../../components/styleOne/StyleOne";
import StyleThree from '/src/components/styleThree/StyleThree';
import {Politics, Entertainment} from "../../Category";
import "./mainBodyFour.scss";

function MainBodyFour() {
  return (
    <div className="mainBodyFour">
        <div className="mainBodyFourWrapper">
            <div className="styleOne1">
                <StyleTwo {...Politics} />
            </div>
            <div className="styleTwo2">
                <StyleOne {...Entertainment} />
            </div>
            <div className="styleThree3">
                <StyleThree />
            </div>
        </div>
    </div>
  )
}

export default MainBodyFour