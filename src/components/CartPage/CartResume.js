import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

export default function CartResume() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    let total = 0;
    function ItemResume({productId, productAmount}){
        const item = user.products?.find(product => product._id === productId);
        const subTotal = item?.price * productAmount || '-';
        total += subTotal || 289.99; 
        return (
            <>
            <BoxResume>
                <h3>{item.title}</h3> <h2>{item.price} x {productAmount}</h2> <h2>R$ {subTotal}</h2>
            </BoxResume>
            </>);
    }

    return (
        <>
            <CartContainerResume>
               {user?.cart?.map((itemResume, index) => <ItemResume 
                    key={index} 
                    productId={itemResume.productId}
                    productAmount={itemResume.amount} />)}
                <ContainerTotal>
                    <p>Total</p> <p>R$ {total}</p>
                </ContainerTotal>
                <ButtomFinalizar onClick={()=> navigate('/checkout')}>
                    Finalizar Compra
                </ButtomFinalizar>
            </CartContainerResume>
        </>);
}

const CartContainerResume = styled.div`
    position: relative;
    width: 500px;
    
    border-radius: 5px;
    background-color: var(--primary-color);
    box-shadow: 3px 3px 7px 1px rgba(17, 45, 78, 0.3);

    display: flex;
    flex-direction: column;

    cursor: pointer;
    transition: all 0.5s;

    word-break: break-all;
    @media (min-width: 1080px) {
    position: fixed;
    top: 142px;
    left: 560px;
    }

`;

const BoxResume = styled.div`
    width: 500px;
    height: 30px;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    h3{
        width: 240px;
    }
    h2{
        width: 80px;
        text-align: end;
    }
`;

const ButtomFinalizar = styled.div`
    color: var(--primary-color);
    background-color: var(--quaternary-color);
    width: 200px;
    height: 32px;
    font-size: 18px;
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
    margin: 0px 8px 16px 280px;
`;

const ContainerTotal = styled.div`
    width: 500px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--tertiary-color);
    font-weight: 700;
    font-size: 16px;
    padding: 0 16px;
`;