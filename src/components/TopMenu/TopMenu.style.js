import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-40px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

export const TopMenuStyle = styled.div`
  z-index: 1;
  background-color: var(--quaternary-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 15px;
  .logo-container {
    user-select: none;
    cursor: pointer;
    h1 {
      font-size: 40px;
      font-family: 'Playball', sans-serif;
      color: var(--primary-color);
    }
  }
  .searchbar {
    box-sizing: border-box;
    background-color: var(--secundary-color);
    width: 55vw;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: var(--quaternary-color);
    padding-left: 10px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
      color: #979797;
    }
    &:focus::placeholder {
      opacity: 0;
    }
    @media (max-width: 800px) {
      display: none;
    }
  }
  .background-shadow {
    position: absolute;
    left: 0;
    top: 75px;
    width: 100vw;
    height: calc(100vh - 75px);
    background-color: #00000058;
  }
  .cart-menu-container {
    position: absolute;
    top: 85px;
    right: 10px;
    width: 50vw;
    max-height: 70vh;
    padding: 20px;
    border-radius: 15px;
    background-color: var(--quaternary-color);
    animation-name: ${fadeInAnimation};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    > .cart-summary {
      max-height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      color: var(--primary-color);
      margin-bottom: 30px;
      overflow: scroll;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      > .product {
        display: flex;
        align-items: center;
        img {
          border-radius: 5px;
          width: 60px;
          height: 50px;
          object-fit: cover;
          margin-right: 15px;
        }
        .product-amount {
          margin-right: 15px;
        }
        .product-name {
          margin-right: 40px;
        }
      }
    }
    > .buttons-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 30px;
      > button {
        padding: 2px 25px;
        height: 40px;
        background-color: var(--tertiary-color);
        &:nth-child(2) {
          background-color: green;
        }
        border: none;
        border-radius: 8px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        h2 {
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 23px;
          color: var(--primary-color);
        }
      }
    }
    #icon {
      position: absolute;
      top: 5px;
      right: 12px;
      font-size: 35px;
      color: #979797;
      cursor: pointer;
    }
  }
`;

export const IconsContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  .shopping-cart-container {
    position: relative;
    background: var(--quaternary-color);
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
    &:hover {
      background-color: var(--quaternary-color-alt);
      #icon,
      .cart-count {
        transform: scale(1.1);
      }
    }
    #icon {
      font-size: 30px;
      color: var(--primary-color);
      transition: transform 0.3s;
    }
    .cart-count {
      position: absolute;
      bottom: 15%;
      right: 15%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--primary-color);
      border: var(--quaternary-color) 1px solid;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: var(--quaternary-color);
      transition: transform 0.3s;
    }
  }
  .user-profile-container {
    cursor: pointer;
    background: var(--quaternary-color);
    border-radius: 8px;
    padding: 15px;
    #icon {
      font-size: 30px;
      color: var(--primary-color);
      transition: transform 0.3s;
    }
    &:hover {
      background-color: var(--quaternary-color-alt);
      #icon {
        transform: scale(1.1);
      }
    }
  }
`;
