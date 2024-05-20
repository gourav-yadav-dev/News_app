import React from "react";

export default function About() {
  return (
    <div className="about-page">
       <img src={"logo192.png"} className="about-image" ></img>
     <pre className="about-text">I’m a freelance <p></p> and blogger</pre>
     <pre className="about-text2">After working in IT for many years, I’m now a full-<br/>time freelance 
        writer, helping people get more exposure<br/>and generate more leads for their businesses.</pre>
        <button className="about-button">Learn more</button>
      <div className="about-page2"></div>
    </div>
  );
}
