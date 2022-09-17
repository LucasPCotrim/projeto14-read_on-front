import styled from 'styled-components';

export default function ProductsMenu () {

    return (
        <>
            <MenuContainer>
                <h3>Most Popular Products</h3>
            </MenuContainer>
        </>);
}

const MenuContainer = styled.div`
    width: 100vw;
    height: 70px;

    display: flex;
    justify-content: initial;
    align-items: center;
    h3{
        font-size: 23px;
    }
`;