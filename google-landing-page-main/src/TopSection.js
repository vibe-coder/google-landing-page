import React from "react";
import myImage from "./me.jpg"
import googleApps from "./google-apps.png"

export default function TopSection(){
  return(
    <div>
      <div className="top-section">
        <a className="page-link" href="www.gmail.com">Gmail</a>
        <a className="page-link" href="www.unsplash.com">Images</a>
        <img className="google-apps" src={googleApps} alt="Google Apps"/>
        <img className="my-image" src={myImage} alt="Profile Img"/>
      </div>
   </div>
  )
}