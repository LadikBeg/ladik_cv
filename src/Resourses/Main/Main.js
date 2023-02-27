import '../Main/Main.css'
import image from './image/uels-snowdonia-nant-peris-wales.jpg'
import { useTranslation } from 'react-i18next';
import Menu from "../Header/menu/menu";
import React from "react";

function Main() {
    const { t } = useTranslation();
    return (
        <div className="main">

            <Menu/>
            <div className="container">
                <div className="left_side_content">
                    <p id="name_of_company_lsc">IV Company</p>
                    <p> {t("com")}<br/>
                        {t("qua")}<br/>
                        {t("sup")} </p>
                </div>

                <div className="right_side_content">
                    <p>{t("info_about_us")}</p>
                </div>
            </div>

            <img src={image} alt="landscape" className="image"/>

            <div className='container_description'>

                <div className='left_side_description'>

                    <div className='description_title'>
                       <p>Our services</p>
                    </div>

                    <div className='description_text'>
                       <p>We work on projects that require strong sectoral expertise, precise communication and a resolutely contemporary approach.</p>
                    </div>

                </div>

                <div className='right_side_description'>

                    <div className='card'>

                        <div className='card_title'>
                            <h4>Audit & communication strategy</h4>
                        </div>

                        <div className='card_text'>
                            <p>A solid foundation for your projects</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Audit & communication strategy</h4>
                        </div>

                        <div className='card_text'>
                            <p>A solid foundation for your projects</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Audit & communication strategy</h4>
                        </div>

                        <div className='card_text'>
                            <p>A solid foundation for your projects</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Audit & communication strategy</h4>
                        </div>

                        <div className='card_text'>
                            <p>A solid foundation for your projects</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Audit & communication strategy</h4>
                        </div>

                        <div className='card_text'>
                            <p>A solid foundation for your projects</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Audit & communication strategy</h4>
                        </div>

                        <div className='card_text'>
                            <p>A solid foundation for your projects</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Main;