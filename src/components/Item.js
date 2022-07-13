import React from "react";

const Item = ({ id, title, price, description, category, image }) => {
    return (
        <div className="card bg-dark text-white h-100" style={{ width: `18rem` }}>
            <img className="card-img opacity-75" src={image} alt={title} />
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
            </div>
            <p className="card-text">{}</p>
            <a href={"/" + id} className="btn btn-primary">Ver detalle</a>
        </div>
    )
}
export default Item;