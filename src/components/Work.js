import React from "react";
import "../styles/Work.css";
import Language from '../Images/Language.png';
import Code from '../Images/Code.png';
import Zomato from '../Images/Zomato.png';
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { FaLink } from "react-icons/fa";

const Work = () =>{
    return(
        <div id="work">
            <div className="work1">
                <p className="h6">&lt; h1 &gt;</p>
                <h1 className="w-head">Projects<span className="h6close"> &lt;/h1&gt;</span></h1>
                <p className="w-para">I love what i do and constantly trying to go above and beyond. Check out some of my best Work.</p>
            </div>

            <div className="project1">
                <img className="img1" src={Language} alt="Language"/>
                <div className="card1">
                    <h1 className="l-head">Language Translator<p className="l-icon1"><SiReact/></p><p className="l-icon2"><SiJavascript/></p></h1>
                    <p id="l-para">An online language translator which first converts an image into text and then translate that text into chosen language.</p>
                    <div id="github">
                        <a target="_blank" id="i-git" href="https://github.com/Jaideep2912/language-translator"><p><GoMarkGithub/></p></a>
                        <a target="_blank" id="i-link" href="https://language-lt.netlify.app/"><p><FaLink/></p></a>
                    </div>
                </div>
            </div>

            <div className="project2">
                <img className="img2" src={Code} alt="Code"/>
                <div className="card1">
                    <h1 className="l-head">Code Your Way<p className="l-icon3"><SiReact/></p><p className="l-icon4"><SiJavascript/></p></h1>
                    <p id="l-para">An online code editor in which you can write and test your code of HTML, CSS and JavaScript.</p>
                    <div id="github">
                        <a target="_blank" id="i-git" href="https://github.com/Jaideep2912/Online-code-Editor"><p><GoMarkGithub/></p></a>
                        <a target="_blank" id="i-link" href="https://github.com/Jaideep2912"><p><FaLink/></p></a>
                    </div>
                </div>
            </div>

            <div className="project3">
                <img className="img3" src={Zomato} alt="Zomato"/>
                <div className="card1">
                    <h1 className="l-head">Zomato Clone<p className="l-icon5"><SiHtml5/></p><p className="l-icon6"><SiCss3/></p><p className="l-icon7"><SiJavascript/></p></h1>
                    <p id="l-para">Clone of Zomato website made using only basic HTML, CSS, and JavaScript.</p>
                    <div id="github">
                        <a target="_blank" id="i-git" href="https://github.com/Jaideep2912/Zomato-Clone"><p><GoMarkGithub/></p></a>
                        <a target="_blank" id="i-link" href="https://zomato-clone29.netlify.app/"><p><FaLink/></p></a>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Work