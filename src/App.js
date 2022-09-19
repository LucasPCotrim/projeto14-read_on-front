import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './global/GlobalStyle';
import UserContext from './contexts/UserContext';
import Products from './components/ProductsPage/Products.js';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LoginPage from './components/LoginPage/LoginPage';
import PrivatePage from './components/PrivatePage/PrivatePage';
import Cart from './components/CartPage/CartPage.js';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

export default function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route
              path='/main'
              element={<PrivatePage>
                <Products />
              </PrivatePage>}
            />
            <Route path='/cart' element={
                <PrivatePage>
                  <Cart />
              </PrivatePage>} />
            <Route
              path='/checkout'
              element={
                <PrivatePage>
                  <CheckoutPage />
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
