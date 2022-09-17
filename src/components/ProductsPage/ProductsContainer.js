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
    height: calc(100vh - 75px);
    display: flex;
    flex-wrap: wrap;
    padding: 75px 42px;
`;