import React  from "react";
import "./App.css";

export default function Card(props){
    return (
        <div className="card">
            <div className="card--img-box">
                <img className="card--img" src={props.imageUrl} alt={props.title} />
            </div>

            <div className="card--infos">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" fill="red" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
                <h2 className="card--location">{props.location}</h2>
                <a className="card--location-url" href={props.googleMapsUrl}>
                View on Google Maps
                </a>

                <h3 className="card--title">{props.title}</h3>
                <p className="card--date">
                {props.startDate} - {props.endDate}
                </p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}