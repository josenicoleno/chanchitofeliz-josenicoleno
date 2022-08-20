import React, { useEffect, useState } from "react";
/* import { getProduct, getProducts } from "../firebase/firebase"; */
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";
import SearchForm from "./SearchForm";

const ItemListContainer = ({ greeting }) => {
    /* function onAddCallback(n) {
        alert(`${n} productos agregados`)
    } */

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [err, setErr] = ('')

    /* useEffect(() => {
        const promesa = new Promise(function (res, rej) {
            setTimeout(() => {
                setList(({ products }))
                setLoading(false)
            }, 2000);
        })
    }, []) */

    const searchWords = (str) => {
        fetch("https://rickandmortyapi.com/api/character/?name=" + str)
            .then((res) => res.json())
            .then((json) => {
                setLoading(false)
                setList(json.results)
            })
            .catch(() => {
                setErr('Ocurrio un error')
                alert(err)
            })
            .finally(() => setLoading(false))
    }

  /*   useEffect(() => {
        getProducts()
            .then((snp) => {
                setList(
                    snp.docs.map((document) => ({
                        ...document.data(),
                        id: document.id
                    }
                    ))
                )
            })
            .catch(() => setErr('Ocurrio un error'))
            .finally(()=>setLoading(false))
    }, [])
 */
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((json) => {
                setList(json.results)
            })
            .catch(() => setErr('Ocurrio un error'))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container py-12">
             {/* {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback} /> */}
            <SearchForm onSearch={searchWords} />
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