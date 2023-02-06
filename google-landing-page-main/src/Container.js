import React from "react";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

export default function Container(){
  return(
    <div className="container">
      <div className="section-wrapper">
        <TopSection/>
        <MiddleSection/>
        <BottomSection/>
      </div>
    </div>
  )
}