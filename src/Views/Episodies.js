import React, { useEffect, useState } from "react";
import EpisodiesItemList from "./EpisodiesItemList";

const Episodies = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState('')

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then((res) => res.json())
            .then((json) => {
                setList(json.results)
            })
            .catch((err) => {
                setErr('Ocurrió un error inesperado')
            })
            .finally(()=>setIsLoading(false))
    }, [])

    return (
        <div>
            {err ?
                console.error(err) :
                isLoading ?
                    <h1>Cargando</h1> :
                    <div className="container py-5">
                        <EpisodiesItemList items={list} />
                    </div>
            }
        </div>
    )
}
export default Episodies;