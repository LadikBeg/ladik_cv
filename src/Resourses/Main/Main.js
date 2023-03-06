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
                    <p className="title_description">Languages</p>
                    <Card id={1} title={"HTML"} body={""}/>
                    <Card id={2} title={"CSS/SCSS"} body={""}/>
                    <Card id={3} title={"JavaScript"} body={""}/>
                    <p className="title_description">Frameworks</p>
                    <Card id={4} title={"React"} body={""}/>
                    <Card id={5} title={"Boostrap"} body={""}/>
                    <Card id={5} title={"Node.js"} body={""}/>
                    <p className="title_description">Layout types</p>
                    <Card id={6} title={"Block layout"} body={""}/>
                    <Card id={6} title={"Adaptive layout"} body={""}/>
            </div>

            </div>


    );
}

export default Main;