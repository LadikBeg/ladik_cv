import '../Main/Main.css'
import image from './image/LADIK311_man_is_sittin_on_the_computer_casual_style_coding__bei_669fb168-9f85-4df4-b569-91b48ebc01cd.png'
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
                    <Card id={1} title={"HTML"} body={""}/>
                    <Card id={2} title={"CSS/SCSS"} body={"we provide and guarantee the quality"}/>
                    <Card id={3} title={"JavaScript"} body={"we support customers after the order is completed"}/>
                    <Card id={4} title={"React"} body={"we keep in touch with clients throughout the development process"}/>
                    <Card id={5} title={"Boostrap"} body={"we provide and guarantee the quality"}/>
                    <Card id={6} title={"Adaptive disign"} body={"we support customers after the order is completed"}/>
                    </div>

                </div>

            </div>


    );
}

export default Main;