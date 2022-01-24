import React from "react";
import "../styles/About.css"
import jai from '../Images/jai 2.jpg';

const About = () =>{
    return(
        <div className="about">
            <div className="about2">
            <p className="h2">&lt; h1 &gt;</p>
            <h1 className="about-me">About Me<span className="h2close"> &lt;/h1&gt;</span></h1>
            <p className="p1">&lt; p &gt;</p>
            <p className="me">
                Hey! My name is Jaideep Solania. I'm a student based in Bulandshahr, Uttar Pradesh, India.
                I'm a beginer-level Web Developer, an AI-ML and open source enthusiast.
                I believe in learning while doing, so I'm always ready to learn new and interesting things. 
            </p>
            <p className="p1close">&lt; /p &gt;</p>
            <button className="resume">RESUME</button>
            </div>
            <div className="profile">
                <img className="image" src={jai} alt="jai" />;
            </div>
            
        </div>
    )
}

export default About