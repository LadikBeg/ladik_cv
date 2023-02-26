import './menu.css'

import { useTranslation } from 'react-i18next';

function Menu() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className="menu" id="show_menu">
            <button className="navigation_button">{t("services")}</button>
            <button className="navigation_button">{t("team")}</button>
            <button className="navigation_button">{t("portfolio")}</button>
            <button className="navigation_button">{t("skills")}</button>
            <button className="navigation_button">{t("contact")}</button>
        </div>
    );
}

export default Menu;