import './menu.css'

import { useTranslation } from 'react-i18next';

function Menu() {

    const { t } = useTranslation();

    return (
        <div className="menu" id="show_menu">
            <button className="menu_navigation_button">
                <span>{t("services")}</span>
            </button>
            <button className="menu_navigation_button">
                <span>{t("team")}</span>
            </button>
            <button className="menu_navigation_button">
                <span>{t("portfolio")}</span>
            </button>
            <button className="menu_navigation_button">
                <span>{t("skills")}</span>
            </button>
            <button className="menu_navigation_button">
                <span>{t("contact")}</span>
            </button>
        </div>
    );
}

export default Menu;