import styled from 'styled-components';

export default function ProductsContainer({
    children
    }) {

    return(
        <Box>
            {children}
        </Box>);
}

const Box = styled.div`
    width: 100vw;
    height: calc(100vh - 160px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;