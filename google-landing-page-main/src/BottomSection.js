import React from "react";
import PencilIcon from "./pencil.png"

export default function BottomSection(){
  return(
    <div className="bottom-section">
      <div className="customize-wrapper">
        <ul className="list-items">
          <p>Color</p>
          <p>Background</p>
          <p>Color</p>
        </ul>
      </div>
      <button className="pencil-button">
        <img className="pencil-icon" src={PencilIcon} alt="Pencil Icon"/>
      </button>
      
    </div>
  )
}