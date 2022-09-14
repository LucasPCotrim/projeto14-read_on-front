import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function setToken (token, setUser) {
    localStorage.setItem('read_on', JSON.stringify({token}));

    setUser({token});
}  

function getToken () {
    const auth = JSON.parse(localStorage.getItem('read_on'))
    if(!auth){
        return false;
    }
    const config = {
        headers: {
        Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}

function singUp (body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function login (body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function getProducts () {
    /* const promise = axios.get(`${BASE_URL}/products`);
    return promise; */
    return({
        data: [
            {
                id: '1',
                title: 'O Cão dos Baskerville',
                subTitle: 'Sherlock Holmes.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
                autor: 'Conan Doile',
                price: '42,00',
                amount: '4'
            },
            {
                id: '2',
                title: 'As Portas de Pedra',
                subTitle: 'Livro 3 - Crônica do Matador do Rei.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
                autor: 'Patrick Rothfuss',
                price: '62,00',
                amount: '1'
            },
            {
                id: '3',
                title: 'Bestiário: Carecas',
                subTitle: 'Carecas, onde vivem e do que se alimentam.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
                autor: 'lele',
                price: '19,99',
                amount: '180'
            },
            {
                id: '1',
                title: 'O Cão dos Baskerville',
                subTitle: 'Sherlock Holmes.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
                autor: 'Conan Doile',
                price: '42,00',
                amount: '4'
            },
            {
                id: '2',
                title: 'As Portas de Pedra',
                subTitle: 'Livro 3 - Crônica do Matador do Rei.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
                autor: 'Patrick Rothfuss',
                price: '62,00',
                amount: '1'
            },
            {
                id: '3',
                title: 'Bestiário: Carecas',
                subTitle: 'Carecas, onde vivem e do que se alimentam.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
                autor: 'lele',
                price: '19,99',
                amount: '180'
            }
        ]
    });
}

export { singUp, setToken,
  getToken, login, getProducts };