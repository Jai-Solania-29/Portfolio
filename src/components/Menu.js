import React from "react";
import "../styles/Menu.css"
import { AiTwotoneHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { BsFileCodeFill } from "react-icons/bs";
import { AiTwotoneTool } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Menu =()=>{
    return(
        <div className="menu">
           <div className="menu-bar">
            <a href="#intro"><p className="home"><AiTwotoneHome/></p></a>
            <a href="#about"><p className="about1"><BsPersonFill/></p></a>
            <a href="#skills"><p className="skill1"><BsFileCodeFill/></p></a>
            <a href="#tools2"><p className="tool1"><AiTwotoneTool/></p></a>
            <a href="#work"><p className="work1"><FaEye/></p></a>
            <a href="#contact"><p className="contact1"><IoMdMail/></p></a>

           </div>
        </div>
    )
    //   home about skills tools work contact
}
export default Menu