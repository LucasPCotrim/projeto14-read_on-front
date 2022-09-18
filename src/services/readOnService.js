import axios from 'axios';

const BASE_URL = 'https://back-end-readon.herokuapp.com';

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

function getProducts() {
  /* const promise = axios.get(`${BASE_URL}/products`);
  return promise; */
  return {
    data: [
      {
        id: '1',
        title: 'O Cão dos Baskerville',
        subTitle: 'Sherlock Holmes.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
        autor: 'Conan Doile',
        price: '42,00',
        amount: '4',
      },
      {
        id: '2',
        title: 'As Portas de Pedra',
        subTitle: 'Livro 3 - Crônica do Matador do Rei.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
        autor: 'Patrick Rothfuss',
        price: '62,00',
        amount: '1',
      },
      {
        id: '3',
        title: 'Bestiário: Carecas',
        subTitle: 'Carecas, onde vivem e do que se alimentam.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
        autor: 'lele',
        price: '19,99',
        amount: '180',
      },
      {
        id: '1',
        title: 'O Cão dos Baskerville',
        subTitle: 'Sherlock Holmes.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
        autor: 'Conan Doile',
        price: '42,00',
        amount: '4',
      },
      {
        id: '2',
        title: 'As Portas de Pedra',
        subTitle: 'Livro 3 - Crônica do Matador do Rei.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
        autor: 'Patrick Rothfuss',
        price: '62,00',
        amount: '1',
      },
      {
        id: '3',
        title: 'Bestiário: Carecas',
        subTitle: 'Carecas, onde vivem e do que se alimentam.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
        autor: 'lele',
        price: '19,99',
        amount: '180',
      },
    ],
  };
}

function checkout(body) {
  const config = getConfig();
  const promise = axios.post(`${BASE_URL}/checkout`, body, config);
  return promise;
}

export { signUp, setToken, getToken, getConfig, login, getProducts, checkout };
