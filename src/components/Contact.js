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

const Contact = () =>{
    return(
        <div className="contact">
            <div className="contact2">
                <p className="h7">&lt; h1 &gt;</p>  
                <h1 className="c-head">Why working<br></br><span className="alone">Alone!</span><span className="h7close"> &lt;/h1&gt;</span></h1>
                <p className="c-para">Let's make something incredible together!</p>
            </div>
            

                <div className="table">
                    <h4 className="h-mail">CONTACT</h4>
                    <p className="j-mail"><IoMdMail/><p id="m-name">jaideep2912@gmail.com</p></p>
                    <p className="c-mail"><IoMdMail/><p id="m-name">jaideep2020csai096@abesit.edu.in</p></p>
                    <h4 className="h-social">SOCIAL</h4>
                </div>

                    <div className="i-social">
                        <p classname="insta"><BsInstagram/></p>
                        {/* <p classname="fb"><FaFacebookSquare/></p>
                        <p classname="ln"><BsLinkedin/></p>
                        <p classname="twt"><FaTwitterSquare/></p>
                        <p classname="git"><GoMarkGithub/></p>
                        <p classname="mdm"><BsMedium/></p>
                        <p classname="dbl"><BsDribbble/></p> */}
                    </div>

                
        </div>




            /* <div className="contact2">
                <div className="contact3">
                    <p className="h7">&lt; h1 &gt;</p>  
                    <h1 className="c-head">Why working<br></br><span className="alone">Alone!</span><span className="h7close"> &lt;/h1&gt;</span></h1>
                    <p className="c-para">Let's make something incredible together!</p>
                    <div className="table">
                            <div className="mail">
                                <h4 className="h-mail">CONTACT</h4>
                                <p className="j-mail"><IoMdMail/><p id="m-name">jaideep2912@gmail.com</p></p>
                                <p className="c-mail"><IoMdMail/><p id="m-name">jaideep2020csai096@abesit.edu.in</p></p>
                            </div>
                        <div className="social">
                            <h4 className="h-social">SOCIAL</h4>
                            <div className="i-social">
                                <p classname="insta"><BsInstagram/></p>
                                <p classname="fb"><FaFacebookSquare/></p>
                                <p classname="ln"><BsLinkedin/></p>
                                <p classname="twt"><FaTwitterSquare/></p>
                                <p classname="git"><GoMarkGithub/></p>
                                <p classname="mdm"><BsMedium/></p>
                                <p classname="dbl"><BsDribbble/></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */
        
    )
}
export default Contact