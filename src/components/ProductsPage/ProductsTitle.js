import styled from 'styled-components';

export default function ProductsTitle ({children}) {

    return (
        <>
            <MenuContainer>
                <h3>{children}</h3>
            </MenuContainer>
        </>);
}

const MenuContainer = styled.div`
    width: 100vw;
    height: 42px;

    display: flex;
    justify-content: initial;
    align-items: center;
    h3{
        font-size: 23px;
    }
`;