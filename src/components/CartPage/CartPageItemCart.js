import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import UserContext from '../../contexts/UserContext';

export default function ItemCart ({productId, productAmount}){

    const {user, setUser} = useContext(UserContext);
    
    const item = user.products?.find(product => product._id === productId);

    return(
        <>
            <ItemBox>
            <ImageBook src={item.image} alt={item.title}/>
            <div>
                <h1>{item.title}</h1>
                <h2>{item.subTitulo}</h2> 
            </div>            
            <div>
                {item.amount > 0 ? <>Amount: {productAmount}</> : <p>indisponível</p>}
                <ContainerButton>
                <ButtonCart >
                        +
                </ButtonCart>
                <ButtonCart >
                        -
                </ButtonCart>
                <ButtonCart >
                        <FontAwesomeIcon id='icon' icon={faTrashCan} />
                </ButtonCart>
            </ContainerButton>
            
            </div>
            <Price>
                <p>R$ {item.price}</p>
            </Price>
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
        text-align: center;
        font-size: 18px;
        line-height: 18px;
    }
    h2{
        width: 160px;
        font-size: 14px;
        overflow-y: hidden;
        height: 28px;
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

    word-break: break-all;
`;

const Price = styled.div`
    width: 80px;
    display: flex;
    justify-content: initial;
    color: var(--tertiary-color);
    font-weight: 700;
    font-size: 16px;
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
    width: 32px;
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
`;

const ContainerButton = styled.div`
    width: 120px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;