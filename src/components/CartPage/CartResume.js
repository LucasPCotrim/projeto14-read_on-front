import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

export default function CartResume() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!user.cart) {
      console.log('pega lá no localstorage');
    }
    calculaTotal();
  }, [user]);

  function calculaTotal() {
    let soma = 0;
    user?.cart?.products?.map((e) => {
      const item = user?.products?.find((product) => product._id === e.productId);
      soma += e.amount * parseInt(item?.price).toFixed(2);
    });
    setTotal(soma / 100);
  }

  function ItemResume({ productId, productAmount }) {
    const item = user?.products?.find((product) => product._id === productId) || '';
    const subTotal = (parseInt(item?.price) * productAmount) / 100 || 0;
    return (
      <>
        <BoxResume>
          <h3>{item.title}</h3>{' '}
          <h2>
            {item.price / 100} x {productAmount}
          </h2>{' '}
          <h2>R$ {subTotal.toFixed(2)}</h2>
        </BoxResume>
      </>
    );
  }

  return (
    <>
      <CartContainerResume>
        <ContainerTotal>
          <p>Resume Cart</p>
        </ContainerTotal>
        {user?.cart?.products?.map((itemResume, index) => (
          <ItemResume
            key={index}
            productId={itemResume.productId}
            productAmount={itemResume.amount}
          />
        ))}
        <ContainerTotal>
          <p>Total</p> <p>R$ {total.toFixed(2)}</p>
        </ContainerTotal>
        <ButtomFinalizar onClick={() => navigate('/checkout')}>Finalizar Compra</ButtomFinalizar>
      </CartContainerResume>
    </>
  );
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
  @media (max-width: 415px) {
    width: 340px;
  }
`;

const BoxResume = styled.div`
  width: 500px;
  height: 30px;
  padding: 8px 8px;
  display: flex;
  justify-content: space-between;
  h3 {
    width: 200px;
  }
  h2 {
    width: 80px;
    text-align: end;
  }
  @media (max-width: 415px) {
    width: 340px;
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
  @media (max-width: 415px) {
    margin: 8px auto;
  }
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
  @media (max-width: 415px) {
    width: 340px;
  }
`;
