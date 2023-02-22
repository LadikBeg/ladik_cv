import '../Bottom/Bottom.css'

function Bottom() {
    return (
        <div className="bottom">

            <div className='footer_top'>
                
            </div>

            {/* Тут будет линия шириной в 80-90% блока футера, отделяя верхнюю часть с инфо, от нижней*/}

            <div className='footer_bottom'>
                <div className='contact'> 
                   <a className='contact_link' href='#'>Contact us</a>
                </div>
                {/* <div className='social'>
                    <a href='#'><img>Instagram icon</img></a>
                    <a href='#'><img>Facebook icon</img></a>
                    <a href='#'><img>Telegram icon</img></a>
                    </div> */}
                <div className='scrollup'>
                    <a className='scrollup_link' href='#'>Back to top</a>
                </div>
            </div>

        </div>
    );
}

export default Bottom;