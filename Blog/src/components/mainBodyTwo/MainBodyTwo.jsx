import React from 'react';
import StyleTwo from "/src/components/styleTwo/StyleTwo";
import StyleOne from "/src/components/styleOne/StyleOne";
import {Finance, Sports} from "/src/Category";
import {FaRegNewspaper} from "react-icons/fa";
import {GoMegaphone} from "react-icons/go";
import "./mainBodyTwo.scss";

function MainBodyTwo() {
  return (
    <div className='mainBodyTwo'>
        <div className="mainBodyTwoWrapper">
            <div className="styleOne1">
                <StyleTwo {...Finance}/>
            </div>
            <div className="styleTwo2">
                <StyleOne {...Sports}/>
            </div>
            <div className="styleThree">
                <div className="widgets">
                    <div className="widgetTitle">
                        <h2>Featured News</h2>
                        <FaRegNewspaper className='icon'/>
                    </div>
                    <div className="list">
                    <div className="top">
                        <ul>
                            <li>
                                <a className='hotNews'>Hot News</a>
                            </li>
                            <li className='active'>
                                <a className='trendyNews'>Trendy News</a>
                            </li>
                            <li>
                                <a className='mostWatched'>Most Watched</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <div className="item">
                            <div className="left">
                                <img src="assets/news-widget-01.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Hantu Raya</li>
                                    <li>20 Jan 2025</li>
                                </ul>
                                <h3>Describe two possible ways that Broadcast routing can be implemented</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src="assets/news-widget-02.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Hantu Raya</li>
                                    <li>20 Jan 2025</li>
                                </ul>
                                <h3>Describe two possible ways that Broadcast routing can be implemented</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src="assets/news-widget-03.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Hantu Raya</li>
                                    <li>20 Jan 2025</li>
                                </ul>
                                <h3>Describe two possible ways that Broadcast routing can be implemented</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src="assets/news-widget-04.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Hantu Raya</li>
                                    <li>20 Jan 2025</li>
                                </ul>
                                <h3>Describe two possible ways that Broadcast routing can be implemented</h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className='widgets'>
                    <div className="widgetTitle">
                        <h2 className='h4'>Advertisement</h2>
                        <GoMegaphone className='icon' />
                    </div>
                    <div className="adWidget">
                            <a>
                                <img src="assets/ad-300x250-2.jpg" alt="" />
                            </a>
                    </div>
                </div>
            </div>    
        </div>
        </div>
    </div>
  );
};

export default MainBodyTwo;