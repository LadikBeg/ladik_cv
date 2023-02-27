import '../Bottom/Bottom.css'
import { useTranslation } from 'react-i18next';

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
                    <p>{t("contact us")}</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Telegram</p>
                </div>
                <div className="mail_us general_style">
                    <p>Send your email</p>
                    <input placeholder="Your e-mail"/>
                    <textarea placeholder="Your message..." ></textarea>
                    <button>Send message</button>
                </div>
            </div>

            <hr  align="center"  size="1" color="white" width="90%"/>
            <div className='footer_bottom'>
                <div className='made_by'> 
                   <p className='made_by_p' >Website made by IV Company</p>
                </div>
                <div className='scrollup'>
                    <p className='scrollup_p'>Back to top</p>
                </div>
            </div>

        </div>
    );
}

export default Bottom;