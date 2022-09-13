import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>LoginPage</h1>} />
          <Route path='/sign-up' element={<h1>SignUpPage</h1>} />
          <Route path='/main' element={<h1>MainPage</h1>} />
          <Route path='/cart' element={<h1>CartPage</h1>} />
          <Route path='/checkout' element={<h1>CheckoutPage</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

