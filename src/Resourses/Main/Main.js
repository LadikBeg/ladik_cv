import '../Main/Main.css'
import image from './image/uels-snowdonia-nant-peris-wales.jpg'
import { useTranslation } from 'react-i18next';
import Menu from "../Header/menu/menu";
import React from "react";
import Card from "./components/Card";

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
                    <Card id={1} title={"Communication"} body={"we keep in touch with clients throughout the development process"}/>
                    <Card id={2} title={"Quality"} body={"we provide and guarantee the quality"}/>
                    <Card id={3} title={"Support"} body={"we support customers after the order is completed"}/>
                    <Card id={4} title={"Communication"} body={"we keep in touch with clients throughout the development process"}/>
                    <Card id={5} title={"Quality"} body={"we provide and guarantee the quality"}/>
                    <Card id={6} title={"Support"} body={"we support customers after the order is completed"}/>
                    </div>

                </div>

            </div>


    );
}

export default Main;