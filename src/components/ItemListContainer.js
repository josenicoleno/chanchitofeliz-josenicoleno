import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../products.json"

const ItemListContainer = ({greeting}) => {
    function onAddCallback(n){
        alert(`${n} productos agregados`)
    }
   // console.log(products)
   const [loading, setLoading] = useState(true)
   const [list, setList] = useState([])
   
   useEffect(() =>{
    setTimeout(setLoading, 2000, false);
    console.log('useEffect')
   },[])

    return (
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback}/>
            {loading?(
                <h3>cargando</h3>
            ) : (<ItemList items={products}/>
            )}
        </div>
    )
}
export default ItemListContainer;