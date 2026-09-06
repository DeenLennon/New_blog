import React from "react";
import "./mainContent.scss";
import {MdFlashOn} from "react-icons/md";

const usUkraine = `${import.meta.env.BASE_URL}assets/usUkraine.jpg`;
const banner2 = `${import.meta.env.BASE_URL}assets/banner-02.jpg;`
const banner3 = `${import.meta.env.BASE_URL}assets/banner-03.jpg;`
const banner4 = `${import.meta.env.BASE_URL}assets/banner-04.jpg;`

const MainContent= () =>{
    return(
        <div className="mainContent">
            <div className="col">
                <div className="row">
                   <img src={usUkraine} alt="US Ukraine" />
                    <a href="#" className="cat">Politics</a>
                    <a href="#" className="icon"> <MdFlashOn style={{fontSize: "20px"}}/> </a>
                    <div className="postInfo">
                        <ul className="nav">
                            <li>Molly Nagle</li>
                            <li>10th January, 2023</li>
                        </ul>
                        <h3>My favorite thing about Academic City is 
                            interacting with my fellow classmates
                            who come from different backgrounds and therefore
                            have interesting views on many issues.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src={banner2} alt="" />
                            <a href="#" className="cat">Travel</a>
                            <a href="#" className="icon"> <MdFlashOn style={{fontSize: "20px"}}/> </a>
                            <div className="postInfo">
                                <ul className="nav">
                                    <li>Molly Nagle</li>
                                    <li>10th January, 2023</li>
                                </ul>
                                <h3>My favorite thing about Academic!
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src={banner3} alt="" />
                            <a href="#" className="cat">Education</a>
                            <a href="#" className="icon"> <MdFlashOn style={{fontSize: "20px"}}/> </a>

                            <div className="postInfo">
                                <ul className="nav">
                                    <li>Molly Nagle</li>
                                    <li>10th January, 2023</li>
                                </ul>
                                <h3>My favorite thing about Academic!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src={banner4} alt="" />
                    <a href="#" className="cat">Election</a>
                    <a href="#" className="icon"> <MdFlashOn style={{fontSize: "20px"}}/> </a>
                    <div className="postInfo">
                        <ul className="nav">
                            <li>Molly Nagle</li>
                            <li>10th January, 2023</li>
                        </ul>
                        <h3>My favorite thing about Academic City offers 
                            me the opportunity to explore, and identify 
                            my passion and interest.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

//2:13:09

export default MainContent;