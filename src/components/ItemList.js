import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row g-2">
            {items?.map(({ id, name, status, species, image }) => (
                <div className="col-md-4" key={id}>
                    <Item
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        image={image}
                    />
                </div>
            ))}
        </div>)
}
export default ItemList;