import './Card.css';
import React from "react";

function Card(props) {
    return (
        <div className="Card">
            <div className="card_cover">

            </div>
            <div className="card_content">
                <div className='card_title'>
                    <h4>{props.title}</h4>
                </div>

                <div className='card_text'>
                    <p>{props.body}</p>
                </div>
                {/* Это временный смайлик, тут будет иконка */}

            </div>
            <div className='card_button'>
                <p>See &#8600;</p>
            </div>
        </div>
    );
}

export default Card;
