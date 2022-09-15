import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './global/GlobalStyle';
import UserContext from './contexts/UserContext';
import LoginPage from './components/LoginPage/LoginPage';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/sign-up' element={<h1>SignUpPage</h1>} />
            <Route path='/main' element={<h1>MainPage</h1>} />
            <Route path='/cart' element={<h1>CartPage</h1>} />
            <Route path='/checkout' element={<h1>CheckoutPage</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
