import React, { useState } from 'react'
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [valor, setValor] = useState(0)
    const [showItemCount, setShowItemCount] = useState(true)

    function onAddCallback(n) {
        setValor(n)
        n && setShowItemCount(false)
        alert(`${n} productos agregados`)
    }

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
                                {showItemCount
                                    ? <ItemCount stock={5} initial={1} onAdd={onAddCallback}/>
                                    : (<>
                                        <h3>{valor}</h3>
                                        <Link to='/carrito'>
                                            <button>Carrito</button>
                                        </Link></>
                                    )}
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