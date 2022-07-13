import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row g-2">
            {items?.map(({ id, title, price, description, category, image }) => (
                <div className="col-md-4" key={id}>
                    <Item
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                </div>
            ))}
        </div>)
}
export default ItemList;