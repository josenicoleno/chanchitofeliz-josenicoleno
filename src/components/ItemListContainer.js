import React, { useEffect, useState } from "react";
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    function onAddCallback(n) {
        alert(`${n} productos agregados`)
    }
    
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    /* useEffect(() => {
        const promesa = new Promise(function (res, rej) {
            setTimeout(() => {
                setList(({ products }))
                setLoading(false)
            }, 2000);
        })
    }, []) */
    
    useEffect(()=> {
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((json)=> {
            setLoading(false)
            setList(json.results)
        })
    }, [])

    return (
        <div>
            {/* {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback} /> */}
            {loading ? (
                <h3>cargando</h3>
            ) : (
                <div className="container py-5">
                    <ItemList items={list} />
                </div>
            )
            }
        </div>
    )
}
export default ItemListContainer;