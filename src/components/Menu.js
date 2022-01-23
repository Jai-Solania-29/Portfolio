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
               <p className="home"><AiTwotoneHome/></p>
               <p className="about1"><BsPersonFill/></p>
               <p className="skill1"><BsFileCodeFill/></p>
               <p className="tool1"><AiTwotoneTool/></p>
               <p className="work1"><FaEye/></p>
               <p className="contact1"><IoMdMail/></p>

           </div>
        </div>
    )
    //   home about skills tools work contact
}
export default Menu