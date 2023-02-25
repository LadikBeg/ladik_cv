import '../Header/Header.css'
import { useTranslation } from 'react-i18next';

function Header() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className="header">
            <p id='main_text'><b>IV Company
                <hr  align="center"  size="1" color="white"/>
            </b></p>
            <div className="navigation_menu">
                <button className="navigation_button">{t("services")}</button>
                <button className="navigation_button">{t("team")}</button>
                <button className="navigation_button">{t("portfolio")}</button>
                <button className="navigation_button">{t("skills")}</button>
                <button className="navigation_button">{t("contact")}</button>
            </div>
            <div className="change_lang">
                <p onClick={() => changeLanguage("en")}>Eng</p>
                <p onClick={() => changeLanguage("ru")}>Rus</p>
            </div>
        </div>
    );
}

export default Header;