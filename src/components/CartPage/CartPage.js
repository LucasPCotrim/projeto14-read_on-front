import React, { useState, useEffect, useContext } from 'react';

import ProductsContainer from '../ProductsPage/ProductsContainer.js';
import ProductsTitle from '../ProductsPage/ProductsTitle.js';
import CardItemCart from './CartPageItemCart.js';

import UserContext from '../../contexts/UserContext';

export default function Cart() {

    const [listProducts, setListProducts] = useState([]);
    const {user, setUser} = useContext(UserContext);
    const [render, serRender] = useState(false);
    
    useEffect(() => {
        setUser({ ...user,
                    cart: 
                    [{
                        userId: user._id,
                        productId: '6324e8dc835cef1b88556a3d'
                    },
                    {
                        userId: user._id,
                        productId: '6324e8dc835cef1b88556a3d'
                    },]
                });
    }, []);

    return (
        <>
            <ProductsContainer>
                {user?.cart?.length > 0 ? 
                    <>
                        <ProductsTitle>
                            You Cart
                        </ ProductsTitle>
                        <>
                            {user?.cart.map((itemCart, index) => 
                                <CardItemCart key={index} productId={itemCart.productId} />
                            )}
                        </>
                    </>
                : <ProductsTitle>
                    Ops! Seu carrinho esta vazio...
                </ ProductsTitle>}
            </ProductsContainer>
        </>);
}