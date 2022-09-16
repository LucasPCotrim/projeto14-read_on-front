import React, { useState, useEffect} from 'react';

import { getProducts } from '../../services/readOnService.js'; 
import ProductsContainer from './ProductsContainer.js';
import ProductsBox from './ProductsBox.js';
import ProductsMenu from './ProductsMenu';

export default function Products() {
    const [listProducts, setListProducts] = useState([]);
    /* const {user, setUser} = useContext(UserContext); */
    /* const [render, serRender] = useState(false); */

    /* useEffect(() => {
        const promise = getProducts();
        promise
            .then(res => { 
                setListProducts(res.data);
                setUser(res.data);})
            .catch(res => console.log(res))
    }, [render]); */
    
    useEffect(() => {
        setListProducts(getProducts().data);    
    }, []);

    return (
        <>
            {listProducts.length > 0 ? 
                <>
                <ProductsMenu/>
                <ProductsContainer>
                    {listProducts.map((book, index) => 
                        <ProductsBox key={index} {...book}>
                        </ProductsBox>)}
                </ ProductsContainer>
                </> 
            : 'Livro > Filme.'}
        </>);
}