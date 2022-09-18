import styled from 'styled-components';

export const CheckoutPageStyle = styled.div`
  margin-top: 75px;
  width: min(1400px, 100vw);
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 25px;
  overflow: hidden;
  .order-summary-container {
    margin-top: 50px;
    width: 35%;
    h1 {
      font-size: 30px;
      color: var(--quaternary-color);
    }
    .order-value,
    .shipping,
    .total-value {
      margin-top: 10px;
      h2 {
        font-size: 20px;
        color: var(--quaternary-color);
      }
    }

    .divide {
      margin: 5px 0 20px 0;
      height: 1px;
      width: 90%;
      background-color: var(--quaternary-color);
    }
    .divide-small {
      margin: 20px 0 5px 0;
      height: 1px;
      width: 50%;
      background-color: var(--quaternary-color);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
    width: 60%;
    > button {
      align-self: flex-end;
      margin-top: 40px;
      width: 30%;
      height: 58px;
      background-color: green;
      border: none;
      border-radius: 8px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      h2 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        color: var(--primary-color);
      }
      &:disabled {
        background-color: var(--primary-color);
        cursor: initial;
        h2 {
          color: var(--tertiary-color);
        }
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    .order-summary-container {
      margin: 30px 0 0 0;
      width: 100%;
      height: initial;
    }
    form {
      margin: 0;
      width: 100%;
    }
  }
`;

const FormStyle = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9px;
  > h1 {
    width: 100%;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 5px;
  }
  input,
  select {
    height: 38px;
    width: 100%;
    background-color: var(--primary-color);
    border-radius: 8px;
    box-shadow: 3px 3px 7px 1px rgba(17, 45, 78, 0.5);
    font-size: 20px;
    line-height: 23px;
    color: var(--tertiary-color);
    padding-left: 15px;
    outline: none;
    &::placeholder {
      font-size: 20px;
      line-height: 23px;
      color: var(--tertiary-color);
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  select * {
    color: var(--tertiary-color);
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const AddressFormStyle = styled(FormStyle)`
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
  .address-street {
    input[name='address'] {
      width: 60%;
    }
    input[name='number'] {
      width: 15%;
    }
    input[name='addressComplement'] {
      width: 25%;
    }
  }
  .address-city {
    input[name='district'] {
      width: 30%;
    }
    select[name='state'] {
      width: 15%;
    }
    input[name='city'] {
      width: 25%;
    }
    input[name='postalCode'] {
      width: 30%;
    }
  }
`;

export const PaymentFormStyle = styled(FormStyle)`
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
  .customer-info {
    input[name='name'] {
      width: 60%;
    }
    input[name='cpf'] {
      width: 60%;
    }
  }
  .card-info {
    input[name='cardNumber'] {
      width: 45%;
    }
    input[name='expirationDate'] {
      width: 25%;
    }
    input[name='cvv'] {
      width: 30%;
    }
  }
`;
