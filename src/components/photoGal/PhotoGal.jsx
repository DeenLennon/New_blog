import React from 'react'
import HeadingTitle from "../../components/headingTitle/HeadingTitle";
import BoxOption from "../../components/boxOption/BoxOption";
import {Photo} from "../../Category";
import {MdVisibility} from "react-icons/md";
import {FaQuoteLeft} from "react-icons/fa";
import "./photoGal.scss";

function PhotoGal() {
  return (
    <div className="photoGal">
        <div className="photoGalWrapper">
            <div className="photoGalImg">
                <HeadingTitle title="Photo Gallery"/>
                <div className="top">
                    <img src="assets/photo-gallery-01.jpg" alt="" />
                    <a className="cat">Nature</a>
                    <a className="icon">
                        <MdVisibility style={{fontSize: "20px"}}/>
                    </a>
                    <div className="postinfo">
                        <div className="postInfo">
                            <ul className="nav">
                                <li>Isa A. Honour</li>
                                <li>29 January 2025</li>
                            </ul>
                            <h3>As mentioned in the previous chapter, the simplest way to create a custom object is to create a 
                            new instance of Object and add properties and methods to it.</h3>
                        </div>
                    </div>
                </div>

                <BoxOption {...Photo}/>
            </div>
            <div className="photoGalReader">
            <HeadingTitle title="Reader's Opinion"/>
            <div className="readerListWrapper">
                <div className="readerListItem">
                    <div className="readerImg">
                        <img src="assets/readers-opinion-01.png" alt="" />
                    </div>
                    <div className="postInfo">
                        <div className="title">
                            <h3>
                                <FaQuoteLeft className="icon"/>
                                Data properties contain a single location for a data value.
                            </h3>
                        </div>
                        <ul>
                            <li>by Abu Qatada</li>
                            <li>28 Jan 2025</li>
                        </ul>
                    </div>
                </div>
                <div className="readerListItem">
                    <div className="readerImg">
                        <img src="assets/readers-opinion-02.png" alt="" />
                    </div>
                    <div className="postInfo">
                        <div className="title">
                            <h3>
                                <FaQuoteLeft className="icon"/>
                                Data properties contain a single location for a data value.
                            </h3>
                        </div>
                        <ul>
                            <li>by AbdulRahman</li>
                            <li>28 Jan 2025</li>
                        </ul>
                    </div>
                </div>
                <div className="readerListItem">
                    <div className="readerImg">
                        <img src="assets/readers-opinion-03.png" alt="" />
                    </div>
                    <div className="postInfo">
                        <div className="title">
                            <h3>
                                <FaQuoteLeft className="icon"/>
                                Data properties contain a single location for a data value.
                            </h3>
                        </div>
                        <ul>
                            <li>by Hamza</li>
                            <li>28 Jan 2025</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PhotoGal

