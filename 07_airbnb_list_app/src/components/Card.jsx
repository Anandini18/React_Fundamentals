/* eslint-disable react/prop-types */
// import React from "react"



export default function Card(props) {

    let badgeText
    if(props.item.openSpots===0) badgeText="SOLD OUT"
    else if(props.item.location==="Online") badgeText="ONLINE"

    return (
        <div className="card">
            {/* Conditional rendering */}
            {/* If first statement is true then only 2nd statement will run  */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/src/assets/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/src/assets/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}