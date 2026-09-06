import React from "react";
import "./hotlinks.scss";
import {MdFavoriteBorder, MdFlashOn, MdStarBorder, MdVisibility, MdWhatshot} from "react-icons/md";

const Hotlinks = () => {
    return(
        <div className="hotLinks">
            <div className="hotLinksWrapper">
                <div className="item">
                    <a href="#">
                        <MdStarBorder style={{fontSize: "30px"}}/>
                        <span>Featured News</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <MdFavoriteBorder style={{fontSize: "30px"}}/>
                        <span>Most Popular</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <MdWhatshot style={{fontSize: "30px"}}/>
                        <span>Hot News</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <MdFlashOn style={{fontSize: "30px"}}/>
                        <span>Trending News</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <MdVisibility style={{fontSize: "30px"}}/>
                        <span>Most Watched</span>
                    </a>
                </div>
            </div>
            <div className="news--ticker">
                <div className="container">
                    <div className="title">
                        <h2>News Updates</h2>
                        <span>Update 20 minutes ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotlinks