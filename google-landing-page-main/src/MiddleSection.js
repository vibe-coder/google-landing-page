import React from "react";
import GoogleImg from "./google-2015.png"


export default function MiddleSection(){
  return(
    <div className="middle-section">
      <img className="google-image" src={GoogleImg} alt="Google Img"  />
      <input className="search-box" placeholder="Search Google of type a URL"/>
      <div className="short-cut-wrapper">
        <div className="short-cut">Hey</div>
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