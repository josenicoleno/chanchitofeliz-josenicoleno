import React, { useState } from 'react'
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const [valor, setValor] = useState(0)

    function onAddCallback(n) {
        setValor(n)
        alert(`${n} productos agregados`)
    }
    console.log(`n  valor  ${valor}`)

    return (
        <div>{item.id
            ? (<div className="container">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">
                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={item.image} alt={item.name} /></div>
                                        <div className="tab-pane" id="pic-2"><img src={item.image} alt={item.name} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={item.image} alt={item.name} /></div>
                                        <div className="tab-pane" id="pic-4"><img src={item.image} alt={item.name} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={item.image} alt={item.name} /></div>
                                    </div>
                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">{item.name}</h3>
                                    <p className="product-description">{item.name}</p>
                                    <ItemCount stock={5} initial={1} onAdd={onAddCallback} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            : (<h3>No hay elementos</h3>)
        }
        </div>
    )
}

export default ItemDetail;