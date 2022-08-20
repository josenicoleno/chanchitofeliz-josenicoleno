import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row g-2">
            {
            items?.map(({ id, name, status, gender, image }) => (
                <div className="col-md-4" key={id}>
                    <Item
                        id={id}
                        name={name}
                        status={status}
                        gender={gender}
                        image={image}
                    />
                </div>
            ))}
        </div>)
}
export default ItemList;