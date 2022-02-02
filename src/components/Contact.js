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
import { FcLike } from "react-icons/fc";

const Contact = () =>{
    return(
        <div className="contact">
            <div className="contact2">
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
                        <p className="insta"><BsInstagram/></p>
                        <p className="fb"><FaFacebookSquare/></p>
                        <p className="ln"><BsLinkedin/></p>
                        <p className="twt"><FaTwitterSquare/></p>
                        <p className="git"><GoMarkGithub/></p>
                        <p className="mdm"><BsMedium/></p>
                        <p className="dbl"><BsDribbble/></p>
                    </div>
                </div>
                <div className="map">
                <iframe className="add" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.63448776455243!2d78.12459218910686!3d28.263413445852912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b4f36372f9739%3A0x5b129351dad9e0c5!2sChaudhary%20House!5e0!3m2!1sen!2sin!4v1643821820354!5m2!1sen!2sin"></iframe>
                </div>
            </div>
            <p className="body-close">&lt; /body &gt;</p>
            <p className="html-close">&lt; /html &gt;</p> 
            <hr className="line"></hr> 
            <p className="tag">Crafted with <span className="love"><FcLike/></span></p>
            <p className="tag-name">2021-Jaideep Solania</p>
        </div>
        
    )
}
export default Contact