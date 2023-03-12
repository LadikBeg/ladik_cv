import React from "react";
import { useTranslation } from 'react-i18next';
import Card from "../Main/components/Card";

function Skills() {
    const { t } = useTranslation();
    return (
        <div className="Skills">
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

export default Skills;