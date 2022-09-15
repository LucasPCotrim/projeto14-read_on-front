import styled from 'styled-components';

export default function ProductsBox ({
    title,
    subTitulo,
    image,
    autor,
    price,
    amount,
    }) {
        console.log(title)
    return(
        <BookBox>
            <ImageBook src={image} alt={title}/>
            <p>{title}</p>
            <Price>
                <p>R$ {price}</p>
            </Price>
            
        </BookBox>);
}

const BookBox = styled.div`
    width: 180px;
    height: 240px;
    border-radius: 5px;

    margin: 4px 6px;
    padding: 4px 4px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    p {
        width: 140px;
        word-break: break-all;
    }
`;

const Price = styled.div`
    width: 140px;
    display: flex;
    justify-content: end;
`;

const ImageBook = styled.img`
    width: 140px;
    height: 160px;
    border-radius: 2px;
`;