import axios from 'axios';

const BASE_URL = 'https://back-end-readon.herokuapp.com';
// const BASE_URL = 'http://localhost:5000';

function setToken(token, user, setUser) {
  localStorage.setItem('readOn', JSON.stringify({ token }));
  setUser({ ...user, token });
}

function getToken() {
  const auth = JSON.parse(localStorage.getItem('readOn'));
  return auth?.token;
}

function getConfig() {
  const token = getToken();
  if (!token) {
    return undefined;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

function getProducts(body) {
  const config = getConfig();
  const promise = axios.get(`${BASE_URL}/products`, body ,config);
  return promise;
}

function checkout(body) {
  const config = getConfig();
  const promise = axios.post(`${BASE_URL}/checkout`, body, config);
  return promise;
}

function setProducts(body) {
  const config = getConfig();
  const promise = axios.post(`${BASE_URL}/products`, body, config);
  return promise;
}

function getCart(body) {
  const config = getConfig();
  const promise = axios.get(`${BASE_URL}/cart`, body, config);
  return promise;
}

function setCart(body) {
  const config = getConfig();
  const promise = axios.post(`${BASE_URL}/cart`, body, config);
  return promise;
}

export { signUp, setToken, getToken, getConfig,
  login, getProducts, checkout, setProducts,
  getCart, setCart};
  
