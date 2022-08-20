import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ id, name, status, gender, image }) => {
    /* function onAddCallback(n) {
        alert(`${n} productos agregados`)
    }  */
    
    return (
        <div className="card bg-dark text-white h-100" style={{width: `18rem`, textAlign: `center`}}> {/* */}
            <img className="card-img opacity-75" src={image} alt={name} />
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><b>Status</b> {status}  - <b>Gender:</b> {gender}</p>
            <Link to={'/personajes/' + id}>
                <button className="btn btn-primary">View details</button>
            </Link>

        </div>
    )
}
export default Item;