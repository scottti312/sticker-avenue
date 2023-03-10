import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components/macro';

import Home from './components/Home/Home';
import About from './components/About/About';
import ProductPage from './components/ProductPage/ProductPage';
import CartMenu from './components/Cart/CartMenu';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './util/ScrollToTop';
import ProductsPage from './components/ProductsPage/ProductsPage';
import { Product } from './util/Products';

import { addToCart } from './redux/cartSlice';
import type { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { auth} from './firebase/firebase-config';
import { loadCart } from './redux/cartSlice';
import { getCart, sendCart } from './firebase/firestore';
import Footer from './components/Footer/Footer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const dispatch = useDispatch();
  const itemAmount = useSelector((state: RootState) => state.cart.itemAmount);
  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    async function loadUserCart() {
      auth.onAuthStateChanged(async () => {
        const loadedCart = await getCart();
        if (loadedCart) {
          dispatch(loadCart(loadedCart))
        }
      });
    }
    loadUserCart();
  }, [dispatch]);

  useEffect(() => {
    sendCart(cart);
  }, [itemAmount, cart]);


  function handleCartClick() {
    setCartOpen(true);
  }

  function handleCartClose() {
    setCartOpen(false);
  }

  function handleAddToCart(product: Product) {
    dispatch(addToCart(product));
    sendCart(cart);
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <CartMenuWrapper className={cartOpen ? 'active' : 'inactive'}>
          <CartMenu handleCartClose={handleCartClose} />
        </CartMenuWrapper>
        <Navbar itemAmount={itemAmount} handleCartClick={handleCartClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productTitle" element={<ProductPage addToCart={handleAddToCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

const CartMenuWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  &.inactive {
    display: none;
  }
  z-index: 11;
`;

export default App;
