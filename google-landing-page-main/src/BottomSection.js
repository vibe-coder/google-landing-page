import React,  { useState } from "react";
import "./App.css"
import PencilIcon from "./pencil.png"

export default function BottomSection(){

  const [isOpen, setIsOpen] = useState(false);



  return(
    <div className="bottom-section">
      {isOpen && <div className="customize-wrapper">
        <p>Background</p>
        <p>Shortcuts</p>
        <p>Color and Theme</p>
      </div>}
      
      <button onClick={() => setIsOpen(!isOpen)} className="pencil-button">
        <img className="pencil-icon" src={PencilIcon} alt="Pencil Icon"/>
      </button>
      
    </div>
  )
}