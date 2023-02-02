import React from "react";
import GoogleImg from "./google-2015.png"
import Data from "./Data";
import TwitterImage from "./shortcut-icon/twitter-3.svg"


export default function MiddleSection(props){
  return(
    <div className="middle-section">
      <img className="google-image" src={GoogleImg} alt="Google Img"  />
      <input className="search-box" placeholder="Search Google of type a URL"/>
      <div className="short-cut-wrapper">
        <div className="short-cut">
          <div className="icon-container">
            <img className="shortcut-icon" src={TwitterImage} alt="Shortcut Icon"/> 
          </div>
          <p className="shortcut-name">Twitter</p>
        </div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
        <div className="short-cut">Hey</div>
      </div>
    </div>
  )
}