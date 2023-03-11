import React from "react";

import "./team.css"
import vlad_image from "./resourses/image/Vlad_image.png"
import ilya_image from "./resourses/image/Ilya_image.png"
function Team() {
    /*const { t } = useTranslation();*/
    return (
        <div className="Team">
            <hr  align="center"  size="1" color="black" width="100%"/>
            <div className="container_for_team">
                <p className="block_team">Team</p>
                <div className="description_person">
                    <div className="text_about_person">
                        <p className="person_name"> Vladyslav Behim</p>
                        <p className="text_about_me">Hello, my name is Vladislav, I am 23 years old.
                            I studied as a programmer at Kharkov Aviation University and gained knowledge in programming and testing.
                            I recently moved from Ukraine to Estonia, where I decided to start my career and create my own startup with a friend.
                            We are both fast learners and ready to face any challenge that may come our way.
                            I am passionate about programming and always try to expand my knowledge and skills in this area.
                            I am sure that with our efforts and my knowledge in programming and testing, we will be able to create a successful and innovative project.</p>
                    </div>
                    <img src={vlad_image} alt="landscape" className="team_image"/>
                </div>

                <div className="description_person">
                    <img src={ilya_image} alt="landscape" className="team_image"/>
                    <div className="text_about_person">
                        <p className="person_name"> Ilya Osipov</p>
                        <p className="text_about_me">Hi, my name is Ilya, I am 26 years old. For a long time I worked as a sushi chef,
                            but recently I decided to change my field of activity and start learning programming. Since then, I have not
                            ceased to absorb new knowledge and improve my skills. I am hardworking and willing to face challenges in order
                            to achieve my goals in this area. I really like programming and I am sure that I can achieve success in this area
                            thanks to my dedication and perseverance. I am ready for new challenges and I am sure that my efforts will not be in vain.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;