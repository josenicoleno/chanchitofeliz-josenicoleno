import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Episodies from './Views/Episodies'
import EpisodeDetailContainer from './Views/EpisodeDetailContainer'
import PageNotFound from './components/PageNotFound';
import ItemListContainer from './components/ItemListContainer';
import { Cart } from './cart/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SobreNosotros from './SobreNostros';
import { CartContextProvider } from './context/cartContext';
import { getCart } from './firebase/firebase';

function App() {
    const [carrito, setCarrito] = useState([])
    useEffect(() => {
        getCart()
            .then((snp) => {
                setCarrito(
                    snp.docs.map((document) => ({
                        ...document.data(),
                        id: document.id
                    }))
                )
            })
    }, [])

    return (
        < CartContextProvider products={carrito}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route index element={<ItemListContainer />} />
                    <Route path='personajes/:id' element={<ItemDetailContainer />} />
                    <Route path='episodios' element={<Episodies />} />
                    <Route path='episodio/:id' element={<EpisodeDetailContainer />} />
                    <Route path='*' element={<PageNotFound />} />
                    <Route path='carrito' element={<Cart />} />
                    <Route path='sobre-nostros' element={<SobreNosotros />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider >
    );
}

export default App;
