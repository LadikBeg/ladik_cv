import React from "react";
import { useTranslation } from 'react-i18next';
import './contact.css'


function Contact() {
    const { t } = useTranslation();
    return ( 
        <div className="contact_container">
                    <h4 className="contact_title">{t("contact_with_us")}</h4>

            <div className="contact_block">

                <div className="contact_info">

                    
                        <div className="contact_about">

                            <p>{t("your_name")}<br></br>
                            <input className="line" placeholder= {t("enter_name")}></input>
                            </p>

                            <p>{t("your_email")}<br></br>
                            <input className="line" placeholder= {t("enter_mail")}></input>
                            </p>

                        </div>

                        <div className="contact_textarea">
                            <p>{t("task_description")}</p>
                            <textarea className="line" placeholder={t("order_information")}></textarea>
                        </div>

                        

                        <div className="contact_answer">
                            <p>{t("answer")}</p>
                        </div>
                        
                        <div className="contact_send">
                            <button>{t("submit_form")}</button>
                        </div>
                </div>
                
                
            </div>

        </div>
    );
}

export default Contact;