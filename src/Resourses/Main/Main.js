import '../Main/Main.css';
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
                    <p id="name_of_company_lsc">IBTechCo</p>
                    <p> {t("com")}<br/>
                        {t("qua")}<br/>
                        {t("sup")} </p>
                </div>

                <div className="right_side_content" >
                    <p>{t("info_about_us")}</p>
                </div>
            </div>

             <img src={image} alt="landscape" className="image"/>

            <div className='container_description'>
                    <p className="title_description">{t("languages")}</p>
                    <Card title={"HTML"} body={t("html_description")}/>
                    <Card title={"CSS/SCSS"} body={t("css_description")}/>
                    <Card title={"JavaScript"} body={t("js_description")}/>
                    <p className="title_description">{t("frameworks")}</p>
                    <Card title={"React"} body={t("react_description")}/>
                    <Card title={"Boostrap"} body={t("boostrap_description")}/>
                    <Card title={"Node.js"} body={t("node_description")}/>
                    <p className="title_description">{t("layout_types")}</p>
                    <Card title={t("block_layout_title")} body={t("block_layout_description")}/>
                    <Card title={t("adaptive_layout_title")} body={t("adaptive_layout_description")}/>
            </div>

        </div>


    );
}

export default Main;