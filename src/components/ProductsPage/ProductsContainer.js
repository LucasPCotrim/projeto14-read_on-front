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
    padding: 88px 42px 16px 42px;
`;