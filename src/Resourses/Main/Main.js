import '../Main/Main.css'
// import image from './image/LADIK311_man_is_sittin_on_the_computer_casual_style_coding__bei_669fb168-9f85-4df4-b569-91b48ebc01cd.png'
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

            {/* <img src={image} alt="landscape" className="image"/> */}

            <div className='container_description'>
                    <p className="title_description">{t("languages")}</p>
                    <Card title={"HTML"} body={"a standardized hypertext markup language for viewing web pages in a browser."}/>
                    <Card title={"CSS/SCSS"} body={"a formal language for describing the appearance of a document written using a markup language."}/>
                    <Card title={"JavaScript"} body={"multi-paradigm programming language. Supports object-oriented, imperative and functional styles."}/>
                    <p className="title_description">{t("frameworks")}</p>
                    <Card title={"React"} body={"an open source library for developing user interfaces."}/>
                    <Card title={"Boostrap"} body={"free set of tools for creating websites and web applications. Includes HTML and CSS templates."}/>
                    <Card title={"Node.js"} body={"a software platform based on the V8 engine that transforms JavaScript from a highly specialized language into a general-purpose language."}/>
                    <p className="title_description">{t("layout_types")}</p>
                    <Card title={"Block layout"} body={"this is an approach in which the site is built on the basis of blocks, div tags act as blocks."}/>
                    <Card title={"Adaptive layout"} body={"this is the formation of a document structure that automatically changes the page depending on the size of the user's screen."}/>
            </div>

            </div>


    );
}

export default Main;