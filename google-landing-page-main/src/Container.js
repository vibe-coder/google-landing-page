import React from "react";
import TopSection from "./TopSection";

export default function Container(){
  return(
    <div className="container">
      <div className="section-wrapper">
        <TopSection/>
        <div className="middle-section">Middle Section</div>
        <div className="Bottom Section">Bottom Section</div>

      </div>

    </div>
  )
}