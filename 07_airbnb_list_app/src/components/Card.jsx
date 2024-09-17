/* eslint-disable react/prop-types */
// import React from "react"

import data from "../data"

export default function Card(props) {
    return (
        <div className="card">
            <img 
                src={`/src/assets/${props.img}`}
                className="card--image" 
            />
            <div className="card--stats">
                <img 
                    src="/src/assets/star.png" 
                    className="card--star" 
                />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}