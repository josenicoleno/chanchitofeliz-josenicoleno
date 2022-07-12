import React, {useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../products.json"

const ItemListContainer = ({greeting}) => {
    function onAddCallback(n){
        alert(`${n} productos agregados`)
    }
   // console.log(products)
    return(
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback}/>

            <ItemList items={products}/>
        </div>
    )
}
export default ItemListContainer;