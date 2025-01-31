import React from 'react'
import HeadingTitle from "/src/components/headingTitle/HeadingTitle";
import "./audioVideo.scss";

function AudioVideo() {
  return (
    <div className='audioVideo'>
        <div className="audioVideoWrapper">
            <HeadingTitle title = "Audio &amp; Videos"/>
            <div className="body">
                <div className="videoWrapper">
                    <video width="100%" controls autoPlay loop>
                        <source src="/assets/newUpdate.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="listWrapper">
                    <div className="list">
                        <div className="item">
                            <div className="left">
                                <img src="assets/audio-video-02.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Deen L</li>
                                    <li>16 April 2025</li>
                                </ul>
                                <h3>what are the merit of time shared Operating System</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src="assets/audio-video-03.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Cat Williams</li>
                                    <li>12 May 2025</li>
                                </ul>
                                <h3>what are the merit of time shared Operating System</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src="assets/audio-video-04.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Eddi Griffine</li>
                                    <li>02 June 2025</li>
                                </ul>
                                <h3>what are the merit of time shared Operating System</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src="assets/audio-video-02.jpg" alt="" />
                            </div>
                            <div className="right">
                                <ul className="nav">
                                    <li>Manuel Ugarte</li>
                                    <li>25 June 2025</li>
                                </ul>
                                <h3>what are the merit of time shared Operating System</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AudioVideo

//4:43:40