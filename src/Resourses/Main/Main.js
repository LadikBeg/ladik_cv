import '../Main/Main.css'
import image from './image/uels-snowdonia-nant-peris-wales.jpg'
import { useTranslation } from 'react-i18next';

function Main() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className="main">
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
            
        </div>
    );
}

export default Main;