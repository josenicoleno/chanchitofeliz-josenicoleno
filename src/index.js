import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ItemDetailContainer from './components/ItemDetailContainer';
import Episodies from './Views/Episodies'
import EpisodeDetailContainer from './Views/EpisodeDetailContainer'
import PageNotFound from './components/PageNotFound';
import ItemListContainer from './components/ItemListContainer';
import { Cart } from './cart/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route index element={<ItemListContainer />} />
            <Route path='producto/:id' element={<ItemDetailContainer />} />
            <Route path='episodios' element={<Episodies />} />
            <Route path='episodio/:id' element={<EpisodeDetailContainer />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='carrito' element={<Cart/> } />
        </Routes>
        <Footer />
    </BrowserRouter>
);
