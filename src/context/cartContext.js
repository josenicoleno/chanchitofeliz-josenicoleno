import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({});

export const CartContextProvider = ({ tasks, children }) => {
    const [items, setItems] = useState(tasks)
    
    const addItem = (item, quantity) => {
        //agregar una cantidad de un articulo
        const _tasks = items.concat({id: item.id, name: item.name, quantity: quantity})
        setItems(_tasks)
    }

    const removeItem = (itemId) => {
        //remover un articulo
        const _tasks = items.filter((el, i) => i !== itemId);
        setItems(_tasks);
    }
    const clear = () => {
        //remover todos los articulos
        const _tasks = {}
        setItems(_tasks)
    }
    function  isInCart(id) {
        let bool = false

        return bool
    }

    return (
        <CartContext.Provider
            value={{
                tasks: items,
                addItem,
                removeItem,
                clear,
                isInCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const cartContextValue = useContext(CartContext)

    return cartContextValue
}

export default CartContext;