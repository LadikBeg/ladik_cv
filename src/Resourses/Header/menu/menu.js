import './menu.css'

import { useTranslation } from 'react-i18next';

function Menu() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className="menu" id="show_menu">
            <div className="navigation_menu">
                <button className="navigation_button">{t("services")}</button>
                <button className="navigation_button">{t("team")}</button>
                <button className="navigation_button">{t("portfolio")}</button>
                <button className="navigation_button">{t("skills")}</button>
                <button className="navigation_button">{t("contact")}</button>
            </div>
            <div className="change_lang">
                <p onClick={() => changeLanguage("en")}>Eng</p>
                <p onClick={() => changeLanguage("ru")}>Рус</p>
            </div>
        </div>
    );
}

export default Menu;