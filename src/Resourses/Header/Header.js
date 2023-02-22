import '../Header/Header.css'

function Header() {
    return (
        <div className="header">

            <p id='main_text'>
                <b>IV Company <hr align="center" size="1" color="white"/> </b>
            </p>

            <div className="navigation_menu">
                <button className="navigation_button">Services</button>
                <button className="navigation_button">Team</button>
                <button className="navigation_button">Portfolio</button>
                <button className="navigation_button">Skills and technologies</button>
                <button className="navigation_button">Contact us</button>
            </div>
            
            <div className="change_lang">
                <button className='language_button'>ENG</button>
                <button className='language_button'>RU</button>
            </div>

        </div>
    );
}

export default Header;