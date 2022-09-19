import React, { useState, useEffect, useContext } from 'react';

import ProductsContainer from '../ProductsPage/ProductsContainer.js';
import ProductsTitle from '../ProductsPage/ProductsTitle.js';
import CardItemCart from './CartPageItemCart.js';

import UserContext from '../../contexts/UserContext';
import CartResume from './CartResume.js';

export default function Cart() {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <ProductsContainer>
                {user?.cart?.products?.length > 0 ? 
                    <>
                        <ProductsTitle>
                            Seu Carrinho
                        </ ProductsTitle>
                        <>
                            {user?.cart?.products?.map((itemCart, index) => 
                                <CardItemCart key={index} productId={itemCart.productId} productAmount={itemCart.amount} />
                            )}
                        </>
                    </>
                : <ProductsTitle>
                    Ops! Seu carrinho esta vazio...
                </ ProductsTitle>}
                <CartResume/>
            </ProductsContainer>
        </>);
}