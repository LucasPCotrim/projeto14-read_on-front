import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './global/GlobalStyle';
import SignUpPage from './components/SignUpPage/SignUpPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>LoginPage</h1>} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/main' element={<h1>MainPage</h1>} />
          <Route path='/cart' element={<h1>CartPage</h1>} />
          <Route path='/checkout' element={<h1>CheckoutPage</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

