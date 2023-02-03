import React from "react";
import GoogleImg from "./google-2015.png"
import Data from "./Data";
import Shortcut from "./Shortcut";
// import TwitterImage from "./shortcut-icon/twitter-3.svg"


export default function MiddleSection(){
  console.log(Data)
  return(
    <div className="middle-section">
      <img className="google-image" src={GoogleImg} alt="Google Img"  />
      <input className="search-box" placeholder="Search Google of type a URL"/>
      <div className="short-cut-wrapper">
        
        {/* Shortcut-icon */}
        <div className="short-cut">
          <Shortcut/>
        </div>
      </div>
    </div>
  )
}