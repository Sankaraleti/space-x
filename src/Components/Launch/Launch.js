import React from 'react'
import './style.css'
const Launch = (props) => {
    return (
        <>
            <div className="launch">
                <div className="image">
                    <img src={props.imageUrl} alt="Racket" />
                </div>
                <div className="info">
                    <div className="details">
                        <h1>{props.name}</h1>
                        <h3>{props.launchDate}</h3>
                    </div>
                    <div className="description">
                        <p>{props.description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Launch
