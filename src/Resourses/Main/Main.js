import '../Main/Main.css'
import image from './image/uels-snowdonia-nant-peris-wales.jpg'

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="left_side_content">
                    <p id="name_of_company_lsc">IV Company</p>
                    <p> <b>COMMUNICATION<br/>
                        QUALITY<br/>
                        SUPPORT</b> </p>
                </div>

                <div className="right_side_content">
                    <p>IV company supports fulfill your web development needs. We guarantee the quality.</p>
                </div>
            </div>
            <img src={image} alt="landscape" className="s"/>
        </div>
    );
}

export default Main;