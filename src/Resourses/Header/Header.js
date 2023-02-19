import '../Header/Header.css'

function Header() {
    return (
        <div className="header">

            <p id='main_text'>I'm Vladyslav Behim front end developer</p>
            <div className="navigation_menu">
                <button className="nabigation_button">About me</button>
                <button className="nabigation_button">Skills</button>
                <button className="nabigation_button">Contact</button>
            </div>
        </div>
    );
}

export default Header;