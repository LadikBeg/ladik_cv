import '../Bottom/Bottom.css'
import { useTranslation } from 'react-i18next';
import {scrollUp} from "./scripts_bottom";


function Bottom() {
    const { t } = useTranslation();
    return (
        <div className="bottom">

            <div className='footer_top'>

                <div className="about_us general_style">
                    <p>{t("about_us_text")}</p>
                    <p>{t("services")}</p>
                    <p>{t("team")}</p>
                    <p>{t("portfolio")}</p>
                    <p>{t("skills")}</p>
                    <p>{t("contact")}</p>
                </div>

                <div className="contact_us general_style">
                    <p>{t("contact_us")}</p>
                    <p>{t("instagram")}</p>
                    <p>{t("facebook")}</p>
                    <p>{t("telegram")}</p>
                </div>

                <div className="mail_us general_style">
                    <p>{t("send_your_email")}</p>
                    <input placeholder={t("your-mail")}/>
                    <textarea placeholder={t("your-message")}></textarea>
                    <button>{t("send_message")}</button>
                </div>

            </div>

            <hr  align="center"  size="1" color="white" width="90%"/>

            <div className='footer_bottom'>

                <div className='made_by'> 
                   <p className='made_by_p'>{t("website_made_by")}</p>
                </div>

                <div className='scrollup'>
                    <p className='scrollup_p' onClick={scrollUp}>{t("back_to_top")}</p>
                </div>

            </div>

        </div>
    );
}

export default Bottom;