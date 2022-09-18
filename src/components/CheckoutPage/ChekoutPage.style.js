import styled from 'styled-components';

export const CheckoutPageStyle = styled.div`
  position: relative;
  margin-top: 75px;
  background-color: cyan;
  width: min(1400px, 100vw);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 25px;
  overflow: hidden;
  .order-summary-container {
    background-color: lightpink;
    position: absolute;
    top: 30px;
    right: 0;
    width: 35%;
    height: 50%;
    h1 {
      font-size: 30px;
      color: var(--quaternary-color);
    }
    .divide {
      margin: 5px 0;
      height: 1px;
      width: 90%;
      background-color: var(--quaternary-color);
    }
  }
`;

export const FormStyle = styled.form`
  background-color: red;
  margin-top: 30px;
  width: 60%;
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
  > input {
    width: 300px;
    height: 38px;
    background-color: var(--primary-color);
    border-radius: 8px;
    box-shadow: 3px 3px 7px 1px rgba(17, 45, 78, 0.5);
    font-size: 20px;
    line-height: 23px;
    color: var(--quaternary-color);
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
`;
