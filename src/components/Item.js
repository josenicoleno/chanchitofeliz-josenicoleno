import React from "react";

const Item = ({id, title, price, description, category, image}) =>{
    return(
        <div className="card" style={{width:`18rem`}} align="center">
            <img className="card-img-top" src={image} alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={"/"+ id} className="btn btn-primary">Ver detalle</a>
            </div>
        </div>
    )
}
export default Item;