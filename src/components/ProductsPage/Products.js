import React, { useState, useEffect, useContext} from 'react';

import { getProducts } from '../../services/readOnService.js'; 
import ProductsContainer from './ProductsContainer.js';
import ProductsBox from './ProductsBox.js';
import ProductsTitle from './ProductsTitle.js';
import ProductsScrollContainer from './ProductScrollContainer.js';

import UserContext from '../../contexts/UserContext';

export default function Products() {
    const [listProducts, setListProducts] = useState([]);
    const {user, setUser} = useContext(UserContext);
    
    useEffect(() => {
        const promise = getProducts();
        promise
            .then(res => { 
                setListProducts(res.data);
                setUser({ ...user,
                    products: res.data});})
            .catch(res => console.log(res))
    }, []);

    return (
        <>
            {listProducts.length > 0 ? 
                <>
                <ProductsContainer>
                <ProductsTitle>
                    Recomendado Para Você
                </ ProductsTitle>
                <ProductsScrollContainer>
                    {listProducts.map((book, index) => 
                        <ProductsBox key={index} {...book}>
                        </ProductsBox>)}
                </ ProductsScrollContainer>
                <ProductsTitle>
                    Produtos Mais Populares
                </ ProductsTitle>
                <ProductsScrollContainer>
                    {listProducts.map((book, index) => 
                        <ProductsBox key={index} {...book}>
                        </ProductsBox>)}
                </ ProductsScrollContainer>
                </ ProductsContainer>
                </> 
            : 'Livro > Filme.'}
        </>);
}