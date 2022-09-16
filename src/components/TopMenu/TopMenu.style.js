import styled from 'styled-components';

export const TopMenuStyle = styled.div`
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
  .icons-container {
    display: flex;
    align-items: center;
    gap: 10px;
    .shopping-cart-container {
      cursor: pointer;
      background: var(--quaternary-color);
      border-radius: 8px;
      padding: 15px;
      &:hover {
        background-color: var(--quaternary-color-alt);
        #icon {
          transform: scale(1.1);
        }
      }
      #icon {
        font-size: 25px;
        color: var(--primary-color);
        transition: transform 0.3s;
      }
    }
    .user-profile-container {
      cursor: pointer;
      background: var(--quaternary-color);
      border-radius: 8px;
      padding: 15px;
      #icon {
        font-size: 25px;
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
  }
`;
