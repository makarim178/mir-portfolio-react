import { useState } from "react";
import  './contact.scss';
import axios from 'axios';
import ContactDetails from "../contactDetails/ContactDetails";
import SocialLinks from "../socialLinks/SocialLinks";
import CopyrightIcon from '@material-ui/icons/Copyright';

import api from '../../_config/api-config.js';


const Contact = () => {
    // const [name, setname] = useState("");
    // const [email, setEmail] = useState("");
    // const [msg, setMsg] = useState("");
    // const [subject, setSubject] = useState("");
    // const [defaultMsg, setDefaultMsg] = useState("");
    // const [successMsg, setSuccessMsg] = useState("");

    const url = api + 'contact';

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(`name: ${e.target.name.value}, email: ${e.target.email.value}, msg: ${e.target.msg.value}`);

        if (e.target.name.value !== "" && e.target.email.value !== "" && e.target.subject.value !== "" && e.target.name.value !== ""){

            const msgBody = `<h3>Dear ${e.target.name.value},</h3>
            <p>Thank you for contacting me. This is an auto-generated e-mail confirmation.</p>
            <p>I will get back to you shortly! Below is the message that you've sent me: </p>
            <p>"${e.target.msg.value}"</p>
            <br/>
            <p>Regards,<br/>Mir Ashiful Karim<br/>e-mail: makarim178@gmail.com<br/>cell: +1 (905) 598 - 5580</p>
            `;

            // msgBody = `Hello! ${e.target.name.value}! 
            // Thank you for contacting me. I will be contacting with you shortly!
    
            // Below is the message that you've sent me:
    
            // "${e.target.msg.value} "
            
            // Regards,
            // Mir Ashiful Karim
            // e-mail: makarim178@yahoo.com
            // cell: +1 (905) 598 - 5580`;
    
            const body = {
                subject: e.target.subject.value,
                body: msgBody,
                contactDetails: {
                    name: e.target.name.value,
                    email: e.target.email.value
                }
                
            };
    
            axios.post(url, body).then(res => {
                console.log(res);
                document.getElementById("contactForm").reset();
                alert("Your message has been sent successfully! Please check your e-mail(spam as well) for confirmation. Thank you for contacting me!");
            });
        } else {
            alert("All inputs are required to send an e-mail!");
        }


        //console.log(body);
    }
    return (
        <div className="contact" id="contact">

            <div className="contactDivContainer">
                <div className="contactLeft">
                    <div className="contactDetailsDiv">
                        <ContactDetails />
                    </div>
                    <div className="contactSocialDiv">
                        <SocialLinks />
                    </div>
                    
                </div>

                <div className="contactRight">
                    <div className="contactTitle">
                        <h1>Contact Me</h1>
                    </div>

                    <div className="contactForm">
                        <form onSubmit={handleSubmit} id="contactForm">
                            <div className="contactNameEmail">
                                <div className="contactName">
                                    <label className="lblName">Name: </label>
                                    <input type="text" name="name" id="name" placeholder="Enter name" />
                                </div>

                                <div className="contactEmail">
                                    <label className="lblEmail">Email: </label>
                                    <input type="text" name="email" id="email" placeholder="Enter email" />
                                </div>
                            </div>

                            <div className="contactSubject">
                                <label className="lblSubject">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="Enter subject" />
                            </div>


                            <div className="contactMsg">
                                <label className="lblMsg">Message</label>
                                <textarea name="msg" id="msg" placeholder="Enter Message... " />
                            </div>
                            <div className="contactBtns">
                                <div className="btnResetDiv">
                                    <button type="reset" className="resetBtn">Reset</button>
                                </div>
                                <div className="btnSubmitDiv">
                                    <button type="submit" className="subBtn" >Send Message</button>
                                </div>
                            </div>

                                {/* {defaultMsg !== "" && (<p className="defaultMsg">{defaultMsg}</p>)}
                                {successMsg !== "" && (<p className="successMsg">{successMsg}</p>)} */}
                        </form>
                    </div>
                </div>
            </div>

            <div className="contactFooter">
                <div className="contactCopyRightDiv">
                    <div className="copyIcon">
                        <CopyrightIcon />
                    </div>
                    <div className="copyP">
                        <p>CopyRight 2021, by Mir Ashiful Karim</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
