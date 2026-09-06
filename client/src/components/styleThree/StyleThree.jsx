import React from 'react'
import HeadingTitle from "../../components/headingTitle/HeadingTitle";
import "./styleThree.scss";

function StyleThree() {
  return (
    <div className="styleThree">
        <div className="styleThreeWrapper">
            <div className="widget3">
                <HeadingTitle title="voting Poll (Checkbox)"/>
                <div className="pollWidget">
                    <div className="title">
                        <h3>Which was the best World Cup ever in your opinion?</h3>
                    </div>
                    <div className="options">
                        <form>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" />
                                    <span>Qatar 2022</span>
                                </label>
                                <p>
                                    <span style={{width: "65%"}}></span>
                                </p>
                                <div className="perc">65%</div>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" />
                                    <span>Russia 2018</span>
                                </label>
                                <p>
                                    <span style={{width: "25%"}}></span>
                                </p>
                                <div className="perc">25%</div>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" />
                                    <span>Brazil 2014</span>
                                </label>
                                <p>
                                    <span style={{width: "10%"}}></span>
                                </p>
                                <div className="perc">10%</div>
                            </div>
                            <button type="submit">Vote Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="widget3">
                <HeadingTitle title="Voting Poll (Radio)"/>
                <div className="pollWidget">
                    <div className="title">
                        <h3>Do you think the cost of sending money to mobile phones should be reduced?</h3>
                    </div>
                    <div className="options">
                        <form>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="option-1"/>
                                    <span>Yes</span>
                                </label>
                                <p>
                                    <span style={{width: "55%"}}></span>
                                </p>
                                <div className="perc">55%</div>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="option-1"/>
                                    <span>No</span>
                                </label>
                                <p>
                                    <span style={{width: "25%"}}></span>
                                </p>
                                <div className="perc">25%</div>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="option-1"/>
                                    <span>Average</span>
                                </label>
                                <p>
                                    <span style={{width: "20%"}}></span>
                                </p>
                                <div className="perc">20%</div>
                            </div>
                            <button type="submit">Vote Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StyleThree

//5:01