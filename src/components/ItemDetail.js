import React from 'react'

const ItemDetail = ({ item })=>{
   /*  <div>
    {item?.lenght ? (
    <div>
        <img src={item.image} alt={item.name}/>    
        <p>{item.name}</p>
    </div>
    ) : (<h3>No hay elementos</h3>)
}
</div> */
    return (
       <div>
        <img src={item.image} alt={item.name}/>
        <h3>{item.name}</h3>
       </div>
    )
}

export default ItemDetail;