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

                        {/* Это временный смайлик, тут будет иконка */}
                        <div className='card_button'>
                            <p>See &#8600;</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Project coordination</h4>
                        </div>

                        <div className='card_text'>
                            <p>Unite stakeholders and achieve consensus</p>
                        </div>

                        {/* Это временный смайлик, тут будет иконка */}
                        <div className='card_button'>
                            <p>See &#8600;</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Media relations</h4>
                        </div>

                        <div className='card_text'>
                            <p>Leverage media and press influence</p>
                        </div>

                        {/* Это временный смайлик, тут будет иконка */}
                        <div className='card_button'>
                            <p>See &#8600;</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Copywriting & content</h4>
                        </div>

                        <div className='card_text'>
                            <p>Define and disseminate a brand image</p>
                        </div>

                        {/* Это временный смайлик, тут будет иконка */}
                        <div className='card_button'>
                            <p>See &#8600;</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Training</h4>
                        </div>

                        <div className='card_text'>
                            <p>The knowledge to communicate. The understanding to explain</p>
                        </div>

                        {/* Это временный смайлик, тут будет иконка */}
                        <div className='card_button'>
                            <p>See &#8600;</p>
                        </div>

                    </div>
                    <div className='card'>

                        <div className='card_title'>
                            <h4>Online presence</h4>
                        </div>

                        <div className='card_text'>
                            <p>Maximise your digital activities</p>
                        </div>

                        {/* Это временный смайлик, тут будет иконка */}
                        <div className='card_button'>
                            <p>See &#8600;</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Main;