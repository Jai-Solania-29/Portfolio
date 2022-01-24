import React from "react";
import"../styles/Skills.css"
import { FaAngleDoubleDown } from "react-icons/fa";

const Skills = () => {
    return(
        <div className="skills">
         <div className="scroll2">
            <p className="scrl3">scroll down</p>
            <p className="scrl4">scroll down</p>
        </div>
        <div className="icons2">
            <p className="icon3"><FaAngleDoubleDown/></p>
            <p className="icon4"><FaAngleDoubleDown/></p>
        </div>
        <div className="skills2">
            <div className="skl">
                <p className="h3">&lt; h1 &gt;</p>
                <h1 className="shead">Skills<span className="h3close"> &lt;/h1&gt;</span></h1>
            </div>
            <div className="fill">
                <p className="front">Front-End</p>
                <span className="front-measure">
                    <span className="front-per"></span>
                </span>
                <p className="react">ReactJS</p>
                <span className="react-measure">
                    <span className="react-per"></span>
                </span>
                <p className="c">C</p>
                <span className="c-measure">
                    <span className="c-per"></span>
                </span>
                <p className="python">Python</p>
                <span className="python-measure">
                    <span className="python-per"></span>
                </span>
            </div>
        

        </div>

        </div>
    )
}
export default Skills