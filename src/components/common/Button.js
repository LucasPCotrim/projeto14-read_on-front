import styled from 'styled-components';

export default function Button({
  children,
  size = 'medio',
  color = 'blue',
  ...otherProps
}) {
  return (
    <ButtonWrapper {...otherProps} size={size} color={color}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  width: 84px;
  height: 35px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #52B6FF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
${(props) => {
  if (props.size === 'large') {
    return `
      margin: 0 auto;
      width: 303px;
      height: 45px;
      font-size: 26x;
    `;
  }
  if (props.size === 'tiny') {
    return `
      width: 40px;
      height: 35px;
      font-size: 26px;
      `;
  }
}}
  ${(props) => {
  if (props.color === 'white') {
    return `
      background-color: #FFFFFF;
      color: #52B6FF;
    `;
  }
}}`;