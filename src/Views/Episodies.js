import React, { useEffect, useState, useSyncExternalStore } from "react";

const Episodies = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState('')

    useEffect(() => {

    }, [])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then((res) => res.json)
            .then((json) => {
                setIsLoading(false)
                setList(json.results)
            })
            .catch((err) => {
                setErr('Ocurrió un error inesperado')
            })
    }, [])
    
    return <div> aca van los episodiooss</div>
}
    export default Episodies;