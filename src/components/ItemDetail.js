import React, {useState} from 'react'
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const [valor, setValor] = useState(0)
    function onAddCallback(n) {
        setValor(n)
        alert(`${valor} productos agregados`)
    }
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
        <div class="container">
            <div class="card">
                <div class="container-fliud">
                    <div class="wrapper row">
                        <div class="preview col-md-6">
                            <div class="preview-pic tab-content">
                                <div class="tab-pane active" id="pic-1"><img src={item.image} alt={item.name} /></div>
                                <div class="tab-pane" id="pic-2"><img src={item.image} alt={item.name} /></div>
                                <div class="tab-pane" id="pic-3"><img src={item.image} alt={item.name} /></div>
                                <div class="tab-pane" id="pic-4"><img src={item.image} alt={item.name} /></div>
                                <div class="tab-pane" id="pic-5"><img src={item.image} alt={item.name} /></div>
                            </div>
                        </div>
                        <div class="details col-md-6">
                            <h3 class="product-title">{item.name}</h3>
                            <p class="product-description">{item.name}</p>
                            <ItemCount stock={5} initial={1} onAdd={onAddCallback}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;