import '../Bottom/Bottom.css'

function Bottom() {
    return (
        <div className="bottom">

            <p id='main_text'><b>Bottom
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

export default Bottom;