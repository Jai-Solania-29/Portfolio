import React from "react";
import "../styles/Contact.css";
import { IoMdMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsMedium } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

const Contact = () =>{
    return(
        <div id="contact">
            <div id="contact2">
                <p className="h7">&lt; h1 &gt;</p>  
                <h1 className="c-head">Why working<br></br><span className="alone">Alone!</span><span className="h7close"> &lt;/h1&gt;</span></h1>
                <p className="c-para">Let's make something incredible together!</p>
            </div>
            <div className="contact3">
                <div className="table">
                    <h4 className="h-mail">CONTACT</h4>
                    <p className="j-mail"><IoMdMail/><p id="m-name">jaideep2912@gmail.com</p></p>
                    <p className="c-mail"><IoMdMail/><p id="m-name">jaideep2020csai096@abesit.edu.in</p></p>
                    <h4 className="h-social">SOCIAL</h4>
                    <div className="i-social">
                    <a target="_blank" className="i-first" href="https://www.instagram.com/jai_solania_29/"><p className="insta"><BsInstagram/></p></a>
                    <a target="_blank" id="s-icon" href="https://www.facebook.com/jaideep.chaudhary.180"><p className="fb"><FaFacebookSquare/></p></a>
                    <a target="_blank" id="s-icon" href="https://www.linkedin.com/in/jaideep-solania-a426691b6/"><p className="ln"><BsLinkedin/></p></a>
                    <a target="_blank" id="s-icon" href="https://twitter.com/jai_solania_29"><p className="twt"><FaTwitterSquare/></p></a>
                    <a target="_blank" id="s-icon" href="https://github.com/Jaideep2912"><p className="git"><GoMarkGithub/></p></a>
                    <a target="_blank" id="s-icon" href="https://dribbble.com/jai_solania_29"><p className="dbl"><BsDribbble/></p></a>
                    <a target="_blank" id="s-icon" href="https://medium.com/@jai_solania_29"><p className="mdm"><BsMedium/></p></a>
                    </div>
                </div>
                <div className="map">
                    <iframe className="add" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.884731064609!2d77.43696512814293!3d28.6279690411514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff5d2a20645%3A0x80fa86942b0f6c49!2sParamount%20Symphony!5e0!3m2!1sen!2sin!4v1644242272074!5m2!1sen!2sin"></iframe>
                </div>
            </div>
            <p className="body-close">&lt; /body &gt;</p>
            <p className="html-close">&lt; /html &gt;</p> 
            <hr className="line"></hr> 
            <p className="tag">Crafted with ❤️</p>
            <p className="i-tag"><BiCopyright/><p className="tag-name">2022 Jaideep Solania</p></p>
            <a href="#intro"><p className="arrow"><IoIosArrowUp/></p></a>
        </div>
        
    )
}
export default Contact