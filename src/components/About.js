import React from "react";
import "../styles/About.css"
import jai from '../Images/jai 2.jpeg';

const About = () =>{
    return(
        <div id="about">
            <div className="about2">
            <p className="h2">&lt; h1 &gt;</p>
            <h1 className="about-me">About Me<span className="h2close"> &lt;/h1&gt;</span></h1>
            <p className="p1">&lt; p &gt;</p>
            <p className="me">
                Hey! My name is Jaideep Solania. I'm a student based in Bulandshahr, Uttar Pradesh, India.
                I'm a Web Developer, currently learning DevOps.
                I believe in learning while doing, so I'm always ready to work on new and interesting things. 
            </p>
            <p className="p1close">&lt; /p &gt;</p>
            <a target="_blank" href="https://drive.google.com/file/d/11dpHiC-S8QgRmfc6u0SIGj6uR2cm71pQ/view?usp=sharing"><button className="resume">RESUME</button></a>
            </div>
            <div className="profile">
                <img className="image" src={jai} alt="jai" />
            </div>
            
        </div>
    )
}

export default About