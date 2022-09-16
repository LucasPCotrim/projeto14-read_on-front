import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './global/GlobalStyle';
import UserContext from './contexts/UserContext';
import Products from './components/ProductsPage/Products.js';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LoginPage from './components/LoginPage/LoginPage';
import setProducts from './components/ProductsPage/setProducts.js';
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
            <Route path='/main' element={<h1>MainPage</h1>} />
            <Route path='/cart' element={<h1>CartPage</h1>} />
            <Route path='/checkout' element={<h1>CheckoutPage</h1>} />
            <Route path='/products' element={<Products />} />
            <Route path='/set-products' element={<setProducts />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
