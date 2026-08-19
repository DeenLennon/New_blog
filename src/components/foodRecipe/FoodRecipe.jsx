import React from 'react';
import HeadingTitle from "/src/components/headingTitle/HeadingTitle";
import BoxOption from '/src/components/boxOption/BoxOption';
import {Food} from "/src/Category";
import "./foodRecipe.scss";

function FoodRecipe() {
  return (
    <div className="foodRecipe">
        <div className="foodRecipeWrapper">
            <div className="itemleft">
                <HeadingTitle title="Foods &amp; Recipes"/>
                <BoxOption {...Food}/>
            </div>
            <div className="itemright">
                <div className="itemRightWrapper">
                    <div className="advert1">
                        <a>
                            <img src="assets/ad-150x150-1.jpg" alt="" />
                        </a>
                    </div>
                    <div className="advert2">
                        <a>
                            <img src="assets/ad-150x150-2.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodRecipe