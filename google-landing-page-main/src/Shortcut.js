import React from "react";


export default function Shortcut(props){
  return(
    <div className="short-cut">
      <div className="icon-container">
        <img className="shortcut-icon" src={`../shortcut-icon/${props.icon}`} alt="Shortcut Icon"/> 
      </div>
      <p className="shortcut-name">{props.name}</p>
    </div>
  )
}