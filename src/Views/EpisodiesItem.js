import React from "react";
import { Link } from 'react-router-dom';

const EpisodiesItem = ({ id, name, air_date, episode }) => {
    return (
        <div className="card bg-dark text-white h-100" style={{ width: `18rem` }} >
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><b>Episodio:</b> {episode}</p>
            <p className="card-text"><b>Fecha:</b> {air_date}</p>
            <Link to={'/episodio/' + id}>
                <button className="btn btn-primary">Ver detalle</button>
            </Link>
        </div>
    )
}
export default EpisodiesItem;