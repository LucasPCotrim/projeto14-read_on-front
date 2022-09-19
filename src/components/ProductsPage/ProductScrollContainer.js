import styled from 'styled-components';

export default function ProductsScrollContainer({
    children
    }) {

    return(
        <Box>
            {children}
        </Box>);
}

const Box = styled.div`
    height: 342px;
    display: flex;
    overflow-x: scroll;
    margin: 8px 0;
`;