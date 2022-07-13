import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=>{
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState('')

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1')
        .then((res) => res.json())
        .then((json) => {
            setIsLoading(false)
            setResults(json)
        })
        .catch((err) => {
            setErr('Ocurrió algo extraño!!')
        })
    }, [])
        
    if (isLoading){
        return <span> Cargando...</span>
    }
    if (err.length > 0){
        console.error(err)
    }else{
    return (
        <div>
            {<ItemDetail item={results}/>}
        </div>
    )} 
}

export default ItemDetailContainer;