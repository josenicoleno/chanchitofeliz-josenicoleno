import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=>{
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState('')
    const {id} = useParams()
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + id)
        .then((res) => res.json())
        .then((json) => {
            setResults(json)
        })
        .catch((err) => {
            console.error('entras')
            setErr('Ocurrió algo extraño!!')
        })
        .finally(()=>setIsLoading(false))
    }, [id])

    if (isLoading){
        return <span> Cargando...</span>
    }
    if (err.length > 0){
        console.error(err)
    }else{
    return (
        <div>
            <ItemDetail item={results}/>
        </div>
    )} 
}

export default ItemDetailContainer;