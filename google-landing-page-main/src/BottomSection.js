import React from "react";
import PencilIcon from "./pencil.png"

export default function BottomSection(){
  return(
    <div className="bottom-section">
      <div className="pencil-wrapper">
        <img className="pencil-icon" src={PencilIcon} alt="Pencil Icon"/>
      </div>
      
    </div>
  )
}