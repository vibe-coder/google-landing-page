import React from "react";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";

export default function Container(){
  return(
    <div className="container">
      <div className="section-wrapper">
        <TopSection/>
        <MiddleSection/>
        <div className="Bottom Section">Bottom Section</div>
      </div>
    </div>
  )
}