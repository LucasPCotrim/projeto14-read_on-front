import styled from 'styled-components';

export default function ProductsMenu () {

    return (
        <>
            <MenuContainer>
                <h3>Menu Lindo!</h3>
            </MenuContainer>
        </>);
}

const MenuContainer = styled.div`
    width: 100vw;
    height: 160px;

    display: flex;
    justify-content: center;
    align-items: center;
`;