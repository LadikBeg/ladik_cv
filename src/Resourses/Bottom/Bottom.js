import '../Bottom/Bottom.css'
import { useTranslation } from 'react-i18next';
import iconInsta from './icon/3225191_app_instagram_logo_media_popular_icon.svg'

function Bottom() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
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
                    <p>{t("contact")}</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Telegram</p>
                </div>
                <div className="mail_us general_style">
                    <p>Send your email</p>
                    <input placeholder="your email"/>
                    <textarea placeholder="your message" ></textarea>
                    <button>Send message</button>
                </div>
            </div>

            <hr  align="center"  size="1" color="white" width="90%"/>
            <div className='footer_bottom'>

                <div className='made_by'> 
                   <a className='made_by_link' href='#'>Website made by IV Company</a>
                </div>
                <div className='scrollup'>
                    <a className='scrollup_link' href='#'>Back to top</a>
                </div>
            </div>

        </div>
    );
}

export default Bottom;