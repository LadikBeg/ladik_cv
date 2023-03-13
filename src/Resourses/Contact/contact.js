import React from "react";
import { useTranslation } from 'react-i18next';
import './contact.css'

function Contact() {
    const { t } = useTranslation();
    return ( 
        <div className="contact_container">

            <div className="contact_block">

                <div className="contact_info">

                    <h4 className="contact_title">Contact with us</h4>
                    
                        <div className="contact_about">

                            <p>Your name <br></br>
                            <input className="line" placeholder="Enter your name"></input>
                            </p>

                            <p>Your e-mail <br></br>
                            <input className="line" placeholder="Enter email address"></input>
                            </p>

                        </div>

                        <div className="contact_textarea">
                            <p>Task description</p>
                            <textarea className="line" placeholder="Order information..."></textarea>
                        </div>

                        <div className="contact_file">
                            <p>Example (not necessary) 
                            <input type="file" name="foto"></input>
                            </p>
                        </div>

                        <div className="contact_answer">
                            <p>You will receive an answer within 12 hours</p>
                        </div>
                        
                        <div className="contact_send">
                            <button>Submit form</button>
                        </div>
                </div>

                <div className="contact_image">
                
                </div>
            </div>

        </div>
    );
}

export default Contact;