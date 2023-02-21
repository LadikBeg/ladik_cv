import '../Header/Header.css'

function Header() {
    return (
        <div className="header">

            <p id='main_text'><b>IV Company Company
                <hr  align="center"  size="1" color="white"/>
            </b></p>
            <div className="navigation_menu">
                <button className="nabigation_button">Services</button>
                <button className="nabigation_button">Team</button>
                <button className="nabigation_button">Portfolio</button>
                <button className="nabigation_button">Skills and technologies</button>
                <button className="nabigation_button">Contact us</button>
            </div>
            <div className="change_lang">
                <p><b>Eng</b></p>
                <p>Rus</p>
            </div>
        </div>
    );
}

export default Header;