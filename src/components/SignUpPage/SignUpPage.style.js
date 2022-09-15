import styled from 'styled-components';

export const SignUpPageStyle = styled.div`
  width: min(1000px, 100vw);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 25px;

  .logo-container {
    margin-top: 80px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: min(max(calc(0.0648 * 100vw), 60px), 95px);
      font-family: 'Playball', sans-serif;
    }
    img {
      width: calc(4 * min(max(calc(0.0648 * 100vw), 60px), 95px));
    }
  }
`;

export const SignUpFormStyle = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  margin-bottom: 32px;
  > h1 {
    width: 100%;
    font-size: 25px;
    line-height: 30px;
  }
  > input {
    width: 100%;
    height: 58px;
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
  button {
    margin-top: 40px;
    align-self: flex-end;
    width: 30%;
    height: 58px;
    background-color: var(--quaternary-color);
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

  .categories-container {
    width: 100%;
    margin-top: 30px;
    h1 {
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 15px;
    }
    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    label {
      cursor: pointer;
      input[type='checkbox'] {
        display: none;
      }
      span {
        position: relative;
        display: inline-block;
        background-color: var(--primary-color);
        height: 40px;
        padding: 0 6px 0 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        box-shadow: 1px 1px 3px 0.5px rgba(17, 45, 78, 0.5);
        font-size: 18px;
        line-height: 25px;
        color: var(--tertiary-color);
        transition: 0.5s;
        user-select: none;
        overflow: hidden;
      }
      input[type='checkbox']:checked ~ span {
        background-color: var(--tertiary-color);
        color: var(--primary-color);
      }
    }
  }
`;
