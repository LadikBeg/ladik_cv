import React from "react";
import { useTranslation } from 'react-i18next';

import "./team.css"
import vlad_image from "./resourses/image/Vlad_image.png"
import ilya_image from "./resourses/image/Ilya_image.png"
function Team() {
    const { t } = useTranslation();
    return (
        <div className="Team">
            <hr  align="center"  size="1" color="black" width="100%"/>
            <div className="container_for_team">
                <p className="block_team">Team</p>
                <div className="description_person">
                    <div className="text_about_person">
                        <p className="person_name"> <b>{t("vlad_name")}</b> </p>
                        <p className="text_about_me">{t("vlad_description")}</p>
                    </div>
                    <img src={vlad_image} alt="landscape" className="team_image"/>
                </div>

                <div className="description_person">
                    <img src={ilya_image} alt="landscape" className="team_image"/>
                    <div className="text_about_person">
                        <p className="person_name"> <b>{t("ilya_name")}</b> </p>
                        <p className="text_about_me">{t("ilya_description")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;