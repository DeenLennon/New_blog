import React from 'react';
import { FaAngleRight, FaExclamation, FaExpandAlt, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaMapMarkerAlt, FaRegEnvelope, FaRegUser, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { BsFillMegaphoneFill, BsTelephoneFill } from 'react-icons/bs';
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
        <div className="footerTop">
            <div className="footerTopWrapper">
                <div className="item">
                    <div className="title">
                        <h2 className="h4">About Us</h2>
                        <FaExclamation style={{ fontSize: "18px"}}/>
                    </div>
                    <div className="about">
                        <div className="content">
                            <p>Accessor properties do not contain a data value. Instead, they contain a combination of a getter 
                            function and a setter function</p>
                        </div>
                        <div className="action">
                            <a className="btn-link">
                                Read More
                                < TfiAngleDoubleRight style={{fontSize: "12px"}}/>
                            </a>
                        </div>
                        <ul>
                            <li>
                                <FaMapMarkerAlt style={{fontSize: "15px"}} className="icon"/> 
                                <span>Street Address, Benin City</span>
                            </li>
                            <li>
                                <FaRegEnvelope style={{fontSize: "15px"}} className="icon"/> 
                                <a>lennonabu21@yahoo.com</a>
                            </li>
                            <li>
                                <BsTelephoneFill style={{fontSize: "15px"}} className="icon"/> 
                                <a>+234 704 455 (9139)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <h2 className="h4">Usefull Info Links</h2>
                        <FaExpandAlt style={{fontSize: "18px"}} />
                    </div>
                    <div className="links">
                        <ul className="nav">
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Gadgets
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                   Shop
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                   Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                   Forums
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                   Top News of This Week
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                   Special Recipes
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                   Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <h2 className="h4">Advertisements</h2>
                        <BsFillMegaphoneFill style={{fontSize: "18px"}}/>
                    </div>
                    <div className="links">
                        <ul className="nav">
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Post an Add
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Adds Renew
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Price of Advertisements
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Adds Closed
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Monthly or Yearly
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Trial Adds
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Add Making
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <h2 className="h4">Career</h2>
                        <FaRegUser style={{fontSize: "18px"}}/>
                    </div>
                    <div className="links">
                        <ul className="nav">
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Available Post
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Career Details
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    How to Apply?
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Freelance Job
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Be a Member
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Apply Now
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaAngleRight />
                                    Send Your Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footerBottom">
            <div className="footerBottomWrapper">
                <div className="left">
                    <p>&copy; 2025 <a>usnews</a>. All Rights Reserved</p>
                </div>
                <div className="right">
                    <ul className="nav1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Support</a></li>
                    </ul>
                    <ul className="nav2">
                        <li><a>
                                <FaFacebookF style={{fontSize: "18px"}}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaTwitter style={{fontSize: "18px"}}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaGooglePlusG style={{fontSize: "18px"}}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaLinkedinIn style={{fontSize: "18px"}}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaYoutube style={{fontSize: "18px"}}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer