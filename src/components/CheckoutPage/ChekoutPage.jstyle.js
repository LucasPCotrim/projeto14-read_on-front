import styled from 'styled-components';

export const CheckoutPageStyle = styled.div`
  position: relative;
  margin-top: 75px;
  width: min(1400px, 100vw);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 25px;
  overflow: hidden;
  .order-summary-container {
    position: absolute;
    top: 30px;
    right: 0;
    width: 50%;
    height: 50%;
  }
`;
