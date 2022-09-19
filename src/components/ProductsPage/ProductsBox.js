import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { setCart } from '../../services/readOnService.js';

export default function ProductsBox({
  _id,
  title,
  subTitulo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image,
  autor,
  price,
  amount,
  genre = 'Police',
}) {
  const { user, setUser, setCartPopUpMenu } = useContext(UserContext);

  function addCart(productId) {
    let amount = 1;
    let newCart = {
      products: [
        {
          productId,
          amount,
        },
      ],
    };
    if (user?.cart?.products?.length > 0) {
      const cartProduct = user.cart.products.find((product) => product.productId === productId);
      if (cartProduct) {
        amount += cartProduct.amount;
        newCart.products = user.cart.products.filter((product) => product.productId !== productId);
        newCart.products.push({ ...cartProduct, amount });
      } else {
        newCart.products = user.cart.products;
        console.log(newCart);
        newCart.products.push({
          productId,
          amount,
        });
      }
    }

    const promise = setCart(newCart);
    promise
      .then((res) => {
        setUser({ ...user, cart: newCart });
        setCartPopUpMenu(true);
      })
      .catch((res) => console.log(res));
  }

  return (
    <BookBox>
      <ImageBook src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{subTitulo}</h2>
      <h3>
        {genre} {amount > 0 ? <>{amount} un</> : <p>indisponível</p>}
      </h3>
      <Price>
        <p>R$ {(parseInt(price) / 100).toFixed(2)}</p>
      </Price>
      <ButtonCart
        onClick={() => {
          amount > 0 ? addCart(_id) : alert('Produto Indisponível!');
        }}>
        <FontAwesomeIcon id='icon' icon={faAdd} />
      </ButtonCart>
    </BookBox>
  );
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
  h1 {
    width: 200px;
    text-align: center;
    font-size: 18px;
    line-height: 18px;
  }
  h2 {
    width: 200px;
    font-size: 14px;
    overflow-y: hidden;
    height: 28px;
  }
  .amount {
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

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
    h3{
        width: 200px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        p{
          color: var(--secundary-color);  
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
