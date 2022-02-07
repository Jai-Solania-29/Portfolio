import React from "react";
import "../styles/Tools.css";
import python from '../Images/python.png';
import clang from '../Images/clang.png';
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaAngleDoubleDown } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";

const Tools = () =>{
    return(
        <div id="tools">
            <div id="tools2">
            <p className="h4">&lt; h1 &gt;</p>
            <h1 className="thead">Tools<span className="h4close"> &lt;/h1&gt;</span></h1>
            </div>
            <div className="icons2">
                <p className="i-html"><SiHtml5/></p><p id="name">HTML</p>
                <p className="i-css"><SiCss3/></p><p id="name">CSS</p>
                <p className="i-java"><SiJavascript/></p><p id="name">JAVASCRIPT</p>
                <p className="i-boot"><BsFillBootstrapFill/></p><p id="name">BOOTSTRAP</p>
            </div>
            <div className="icons3">
                <p className="i-python"><img id="img" src={python} alt="python" /></p><p id="ptn">PYTHON</p>
                <p className="i-clang"><img id="img" src={clang} alt="clang" /></p><p className="ptn">C</p>
                <p className="i-react"><SiReact/></p><p id="name">REACT</p>
                {/* <p className="i-html"><SiHtml5/></p><p id="name">HTML</p> */}

            </div>

  
        </div>
    )
}
export default Tools