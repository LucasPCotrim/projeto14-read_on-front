import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import UserContext from '../../contexts/UserContext';
import { setCart } from '../../services/readOnService';

export default function ItemCart ({productId, productAmount}){

    const {user, setUser} = useContext(UserContext);
    
    const item = user?.products?.find(product => product._id === productId);

    function updateCart (productId, op) {
        let amount = 1
        if(!op){
            amount = -1;
        }
        let newCart = {products: [{
            productId,
            amount
        }]};
        if(user?.cart?.products?.length > 0){
            const cartProduct = user.cart.products.find(product => product.productId === productId);
            if(cartProduct){
                amount += cartProduct.amount;
                newCart.products = user.cart.products.filter(product => product.productId !== productId);
                newCart.products.push({...cartProduct, amount})
            }
            else{
                newCart.products = user.cart.products;
                newCart.products.push({
                    productId,
                    amount
                });
            }
        }
        
        const promise = setCart(newCart);
            promise
                .then(res => { 
                    setUser({ ...user,
                        cart: newCart});})
                .catch(res => {
                    alert('Não foi possível realizar a operação!');
                    console.log(res);
                })
    }

    function deleteItemCart (productId) {
        if(user?.cart?.products?.length > 0){
            const newCartproducts = user.cart.products.filter(product => product.productId !== productId);
            const newCart = {products: newCartproducts};
            const promise = setCart(newCart);
            promise
                .then(res => { 
                    setUser({ ...user,
                        cart: newCart});})
                .catch(res => {
                    alert('Não foi possível realizar a operação!');
                    console.log(res);
                })
        }
    }

    if( item.amount - productAmount < 0){
        alert(`Quantidade indiponível do produto: ${item.name}, produto será excluído!`);
        deleteItemCart (productId);
    }

    return(
        <>
            <ItemBox>
            <ImageBook src={item?.image} alt={item?.title}/>
            <div>
                <h1>{item?.title}</h1>
                <h2>{item?.subTitulo}</h2> 
            </div>            
            <div>
                <Price>
                    <p>R$ {item?.price}</p>
                </Price>
                {item?.amount > 0 ? <>Amount: {productAmount}</> : <p>indisponível</p>}
                <ContainerButton>
                    <ButtonCart onClick={(item?.amount - productAmount) > 0 ? ()=>{updateCart(productId, 1)} :
                        () => alert('Não há mais quantidades disponíveis do produto!') }>
                            +
                    </ButtonCart>
                    <ButtonCart onClick={(productAmount > 1) ? ()=>{updateCart(productId, 0)} : 
                        () => alert('Quantidade precisa ser maior ou igual 1')}>
                            -
                    </ButtonCart>
                    <ButtonCart onClick={()=>{deleteItemCart(productId)}}>
                            <FontAwesomeIcon id='icon' icon={faTrashCan} />
                    </ButtonCart>
                </ContainerButton>
            </div>
            </ItemBox>
        </>
    );
}

const ItemBox = styled.div`
    width: 500px;
    height: 142px;
    border-radius: 5px;
    background-color: var(--primary-color);
    box-shadow: 3px 3px 7px 1px rgba(17, 45, 78, 0.3);

    display: flex;
    justify-content: space-around;
    align-items: center;

    cursor: pointer;
    transition: all 0.5s;
    opacity: 0.8;
    margin: 12px 0;

    &:hover {
        opacity: 1;
    }
    h1{
        width: 160px;
        font-size: 16px;
        line-height: 18px;
        text-align: initial;
        @media (max-width: 415px) {
        width: 120px;
        }
    }
    h2{
        width: 160px;
        font-size: 14px;
        overflow-y: hidden;
        height: 28px;
        @media (max-width: 415px) {
        width: 120px;
        }
    }
    .amount{
        
        display: flex;
        justify-content: space-evenly;
        font-size: 14px;
        p{
          color: var(--secundary-color); 
        }
        h2{
        width: auto;
        font-size: 14px;
        line-height: 14px;
        height: 14px;
        }
    }
    word-break: normal;
    @media (max-width: 415px) {
        width: 340px;
    }
`;

const Price = styled.div`
    width: 80px;
    display: flex;
    justify-content: initial;
    color: var(--tertiary-color);
    font-weight: 700;
    font-size: 16px;
    margin: 4px 0;
`;

const ImageBook = styled.img`
    width: 80px;
    height: 120px;
    border-radius: 2px;
    object-fit: cover;
`;

const ButtonCart = styled.div`
    color: var(--primary-color);
    background-color: var(--quaternary-color);
    width: 24px;
    height: 24px;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        background-color: var(--quaternary-color-alt);
        transform: scale(1.1);
    }
`;

const ContainerButton = styled.div`
    width: 80px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;