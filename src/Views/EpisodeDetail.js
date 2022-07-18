import React from 'react'

const EpisodeDetail = ({ item }) => {
    const itemCount = Object.keys(item).length
    return <div>
        {itemCount ? (
            <div>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.air_date}</p>
                <p>{item.episode}</p>
            </div>
        ) : (<h3>No hay elementos</h3>)
        }
    </div>
}

export default EpisodeDetail;