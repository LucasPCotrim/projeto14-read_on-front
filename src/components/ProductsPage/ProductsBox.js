import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

export default function ProductsBox ({
    _id,
    title,
    subTitulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image,
    autor,
    price,
    amount,
    genre='Police',
    }) {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function addCart (idProduct) {
        alert(idProduct)
        /* setCart() */
    }

    return(
        <BookBox>
            <ImageBook src={image} alt={title}/>
            <h1>{title}</h1>
            <h2>{subTitulo}</h2>
            <div className='amount'><h2>{genre}</h2>{amount > 0 ? <>{amount} un</> : <p>indisponível</p>}</div>
            <Price>
                <p>R$ {price}</p>
            </Price>
            <ButtonCart onClick={()=> addCart(_id)}>
                    <FontAwesomeIcon id='icon' icon={faAdd} />
                </ButtonCart>
        </BookBox>);
}

const BookBox = styled.div`
    position: relative;
    width: 220px;
    height: 300px;
    border-radius: 5px;
    background-color: var(--primary-color);
    box-shadow: 3px 3px 7px 1px rgba(17, 45, 78, 0.5);
    margin: 6px 8px;
    padding: 4px 4px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.05);
    }
    h1{
        width: 200px;
        text-align: center;
        font-size: 18px;
        line-height: 18px;
    }
    h2{
        width: 200px;
        font-size: 14px;
        overflow-y: hidden;
        height: 28px;
    }
    .amount{
        width: 200px;
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
    width: 200px;
    display: flex;
    justify-content: initial;
    color: var(--tertiary-color);
    font-weight: 700;
    font-size: 16px;
`;

const ImageBook = styled.img`
    width: 200px;
    height: 160px;
    border-radius: 2px;
    object-fit: cover;
`;

const ButtonCart = styled.div`
    position: absolute;
    color: var(--primary-color);
    background-color: var(--quaternary-color);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        background-color: var(--quaternary-color-alt);
        transform: scale(1.2);
    }
`;