import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ id, name, status, species, category, image }) => {
    return (
        <div className="card bg-dark text-white h-100" style={{ width: `18rem` }}>
            <img className="card-img opacity-75" src={image} alt={name} />
                <h5 className="card-title">{name}</h5>
            <p className="card-text"><b>Status:</b> { status }  - <b>Species:</b> { species }</p>
            <Link to={'/producto/'+ id}>
                <button className="btn btn-primary">Ver detalle</button>
            </Link>

        </div>
    )
}
export default Item;