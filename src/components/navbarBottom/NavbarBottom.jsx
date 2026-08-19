import React, { useState } from "react";
import "./navbarBottom.scss";
import { MdFavoriteBorder, MdFlashOn, MdKeyboardArrowDown, MdNavigateNext, MdStarBorder, MdVisibility } from "react-icons/md";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import {HiViewGrid} from "react-icons/hi"

import post1 from "/assets/post-01.jpg";
import post2 from "/assets/post-02.jpg";
import post3 from "/assets/post-03.jpg";
import post4 from "/assets/post-04.jpg";

const navbarBottom = () => {
    const [fix, setFix] = useState(false);
    const [dropdownone, setDropdownone] = useState(false);
    const [dropdowntwo, setDropdowntwo] = useState(false);
    const [dropdownthree, setDropdownthree] = useState(false);

    const handleDropdownone = (e) => {
        setDropdownone(!dropdownone);
        setDropdowntwo(false);
        setDropdownthree(false);
    };

    const handleDropdowntwo = (e) => {
        setDropdowntwo(!dropdowntwo);
        setDropdownone(false);
        setDropdownthree(false);
    };

    const handleDropdownthree = (e) => {
        setDropdownthree(!dropdownthree);
        setDropdownone(false);
        setDropdowntwo(false);
    };

    const handleScroll = (e) => {
        if(window, scrollY >= 200){
            setFix(true);
        } else {
            setFix(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
    <div className={fix ? "navbarBottom fixed": "navbarBottom"}>
        <div className="navbarBottomWrapper">
            <div className="item" onClick={handleDropdownone}>
                <span>Home</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
                {dropdownone && (
                    <div className="dropDownMenu1">
                        <span>
                            <a href="#">Home Default</a>
                        </span>
                        <span className="active">
                            <a href="#">Home Boxed</a>
                        </span>
                        <span>
                            <a href="#">Home RTL</a>
                        </span>
                        <span>
                            <a href="#">Home RTL Boxed</a>
                        </span>
                        <span>
                            <a href="#">Home Versions
                            <MdNavigateNext style={{ fontSize: "20px"}}/>
                            </a>
                            
                        </span>
                        <span>
                            <a href="#">Menu Versions
                            <MdNavigateNext style={{ fontSize: "20px"}}/>
                            </a>
                            
                        </span>
                    </div>
                )}
            </div>
            <div className="item" onClick={handleDropdowntwo}>
                <span>Worlds News</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>

                {dropdowntwo && (
                    <div className="dropDownMenu2">
                        <div className="dropDownMenu2Wrapper">
                            <div className="left">
                                <div className="item">
                                    <span>All</span>
                                    <MdNavigateNext style={{fontSize: "20px"}}/>
                                </div>
                                <div className="item">
                                    <span>Latin America</span>
                                    <MdNavigateNext className="fa" style={{fontSize: "20px"}}/>
                                </div>
                                <div className="item">
                                    <span>Africa</span>
                                    <MdNavigateNext className="fa" style={{fontSize: "20px"}}/>
                                </div>
                                <div className="item">
                                    <span>Middle East</span>
                                    <MdNavigateNext className="fa" style={{fontSize: "20px"}}/>
                                </div>
                                <div className="item">
                                    <span>Europe</span>
                                    <MdNavigateNext className="fa" style={{fontSize: "20px"}}/>
                                </div>
                            </div>
                            <div className="right">
                                <div className="rightTop">
                                    <div className="item">
                                        <div className="img">
                                            <a href="#" className="thumb">
                                                <img src={post1} alt="" />
                                            </a>
                                            <a href="#" className="cat">Beach</a>
                                            <a href="#" className="icon">
                                                <MdVisibility style={{ fontSize: "20px"}}/>
                                            </a>
                                        </div>
                                        <a href="#" className="title">
                                            It is a long established fact that a reader will be distracted by
                                        </a>
                                    </div>
                                    <div className="item">
                                        <div className="img">
                                            <a href="#" className="thumb">
                                                <img src={post2} alt="" />
                                            </a>
                                            <a href="#" className="cat">News</a>
                                            <a href="#" className="icon">
                                                <MdStarBorder style={{ fontSize: "20px"}}/>
                                            </a>
                                        </div>
                                        <a href="#" className="title">
                                            It is a long established fact that a reader will be distracted by
                                        </a>
                                    </div>
                                    <div className="item">
                                        <div className="img">
                                            <a href="#" className="thumb">
                                                <img src={post3} alt="" />
                                            </a>
                                            <a href="#" className="cat">Ice Hiking</a>
                                            <a href="#" className="icon">
                                                <MdFlashOn style={{ fontSize: "20px"}}/>
                                            </a>
                                        </div>
                                        <a href="#" className="title">
                                            It is a long established fact that a reader will be distracted by
                                        </a>
                                    </div>
                                    <div className="item">
                                        <div className="img">
                                            <a href="#" className="thumb">
                                                <img src={post4} alt="" />
                                            </a>
                                            <a href="#" className="cat">Mountain</a>
                                            <a href="#" className="icon">
                                                <MdFavoriteBorder style={{ fontSize: "20px"}}/>
                                            </a>
                                        </div>
                                        <a href="#" className="title">
                                            It is a long established fact that a reader will be distracted by
                                        </a>
                                    </div>
                                </div>
                                <div className="rightBottom">
                                    <a className="prev" title="Previous">
                                        <FaLongArrowAltLeft style={{fontSize: "18px"}}/>
                                    </a>
                                    <a href="#" className="all" title="view All">
                                        <HiViewGrid style={{fontSize: "18px"}}/>
                                    </a>
                                    <a href="#" className="next" title="Next">
                                        <FaLongArrowAltRight style={{fontSize: "18px"}} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="item">
                <span>National</span>
            </div>
            <div className="item">
                <span>Finance</span>
            </div>
            <div className="item">
                <span>Entertainment</span>
            </div>
            <div className="item">
                <span>LifeStyle</span>
            </div>
            <div className="item">
                <span>Technology</span>
            </div>
            <div className="item">
                <span>Travel</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
            </div>
            <div className="item">
                <span>Sports</span>
            </div>
            <div className="item" onClick={handleDropdownthree}>
                <span>Category</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
                {dropdownthree && (
                    <div className="dropDownMenu3">
                        <div className="dropDownMenu3Wrapper">
                            <div className="col">
                                <div className="item">
                                    <a href="#" className="title">World's News</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">US &amp; Canada</a>
                                        </li>
                                        <li>
                                            <a href="#">Europe</a>
                                        </li>
                                        <li>
                                            <a href="#">Africa</a>
                                        </li>
                                        <li>
                                            <a href="#">Asia</a>
                                        </li>
                                        <li>
                                            <a href="#">MIddle East</a>
                                        </li>
                                        <li>
                                            <a href="#">Asia Pacific</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <a href="#" className="title">Documentation</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">Featured Documentation</a>
                                        </li>
                                        <li>
                                            <a href="#">Europe</a>
                                        </li>
                                        <li>
                                            <a href="#">Africa</a>
                                        </li>
                                        <li>
                                            <a href="#">Asia</a>
                                        </li>
                                        <li>
                                            <a href="#">MIddle East</a>
                                        </li>
                                        <li>
                                            <a href="#">Asia Pacific</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <a href="#" className="title">Documentation</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">Featured Documentation</a>
                                        </li>
                                        <li>
                                            <a href="#">People &amp; Power</a>
                                        </li>
                                        <li>
                                            <a href="#">Rebel Education</a>
                                        </li>
                                        <li>
                                            <a href="#">Rewind</a>
                                        </li>
                                        <li>
                                            <a href="#">Fault Lines</a>
                                        </li>
                                        <li>
                                            <a href="#">News 360 Degree World's</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <a href="#" className="title">Sports</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">Football</a>
                                        </li>
                                        <li>
                                            <a href="#">Cricket</a>
                                        </li>
                                        <li>
                                            <a href="#">Hocky</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="item">
                                    <a href="#" className="title">Movies</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">Hollywood</a>
                                        </li>
                                        <li>
                                            <a href="#">Dollywood</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <a href="#" className="title">Business</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">US Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Middle East Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Europe Business</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="item">
                                    <a href="#" className="title">Weather</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">North Pole</a>
                                        </li>
                                        <li>
                                            <a href="#">South Pole</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col">
                                <div className="item">
                                    <a href="#" className="title">Education</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">Africa Child Education</a>
                                        </li>
                                        <li>
                                            <a href="#">Bangladeshi Education</a>
                                        </li>
                                        <li>
                                            <a href="#">Middle East Education</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="item">
                                    <a href="#" className="title">Health</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">Africa Poor Child Health</a>
                                        </li>
                                        <li>
                                            <a href="#">Fitness and Health</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col">
                                <div className="item">
                                    <a href="#" className="title">Humanities</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">Help for Syrian Refugees</a>
                                        </li>
                                        <li>
                                            <a href="#">Help for Afgan Children</a>
                                        </li>
                                        <li>
                                            <a href="#">Help for African Children</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="item">
                                    <a href="#" className="title">Animals</a>
                                    <ul className="list">
                                        <li>
                                            <a href="#">African Animals</a>
                                        </li>
                                        <li>
                                            <a href="#">Austrialian Animals</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="item">
                <span>Pages</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
            </div>
            <div className="item">
                <FaSearch style={{ fontSize: "15px"}}/>
            </div>
        </div>
    </div>
);
}

export default navbarBottom;
//1:21:01