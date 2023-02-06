import React from "react";
import GoogleImg from "./google-2015.png"
import Data from "./Data";
import Shortcut from "./Shortcut";



export default function MiddleSection(){
  const dataComp = Data.map((data) =>{
    return(
      <Shortcut 
      icon = {data.icon}
      name = {data.name}
      />
    )
  })
  
  return(
    <div className="middle-section">
      <img className="google-image" src={GoogleImg} alt="Google Img"  />
      <input className="search-box" placeholder="Search Google of type a URL"/>
      
      <div className="short-cut-wrapper">
          {dataComp}
      </div>
    </div>
  )
}