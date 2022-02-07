import React from "react";
import "../styles/Education.css";
import { IoSchool } from "react-icons/io5";

const Education = () =>{
    return(
        <div id="education">
            <div id="edu">
                <div className="edu1">
                   <p className="h5">&lt; h1 &gt;</p>
                   <h1 className="e-head">Education<span className="h5close"> &lt;/h1&gt;</span></h1>
                   <p className="p2">&lt; p &gt;</p>
                   <p className="deg">Bachelor's Degree in Computer Science & Engineering (AI)</p>
                   <p className="clg">ABESIT College of Engineering</p>
                   <p className="year">2020-2024</p>
                   <p className="p2close">&lt; /p &gt;</p>
                </div>
                <div className="edu2">
                    <p className="i-edu"><IoSchool/></p>
                </div>

            </div>

        </div>

    )
}
export default Education