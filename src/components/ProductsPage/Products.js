import React, { useState, useEffect} from 'react';

import { getProducts } from '../../services/readOnService.js'; 
import ProductsContainer from './ProductsContainer.js';
import ProductsBox from './ProductsBox.js';
import ProductsTitle from './ProductsTitle.js';
import ProductsScrollContainer from './ProductScrollContainer.js';

export default function Products() {
    const [listProducts, setListProducts] = useState([]);
    /* const {user, setUser} = useContext(UserContext); */
    const [render, serRender] = useState(false);

    useEffect(() => {
        const promise = getProducts();
        promise
            .then(res => { 
                setListProducts(res.data);
              /*   setUser(res.data); */})
            .catch(res => console.log(res))
    }, [render]);

    return (
        <>
            {listProducts.length > 0 ? 
                <>
                <ProductsContainer>
                <ProductsTitle>
                    Recommended For You
                </ ProductsTitle>
                <ProductsScrollContainer>
                    {listProducts.map((book, index) => 
                        <ProductsBox key={index} {...book}>
                        </ProductsBox>)}
                </ ProductsScrollContainer>
                <ProductsTitle>
                    Most Popular Products
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

