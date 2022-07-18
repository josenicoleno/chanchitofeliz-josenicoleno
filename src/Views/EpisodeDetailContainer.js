import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import EpisodeDetail from './EpisodeDetail';

const EpisodeDetailContainer = ()=>{
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState('')
    const {id} = useParams()
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/' + id)
        .then((res) => res.json())
        .then((json) => {
            setIsLoading(false)
            setResults(json)
        })
        .catch((err) => {
            setErr('Ocurrió algo extraño!!')
        })
    }, [id])
        
    if (isLoading){
        return <span> Cargando...</span>
    }
    if (err.length > 0){
        console.error(err)
    }else{
    return <div>
           {<EpisodeDetail item={results}/> } 
        </div>
    } 
}

export default EpisodeDetailContainer;