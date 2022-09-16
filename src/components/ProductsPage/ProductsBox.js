import styled from 'styled-components';

export default function ProductsBox ({
    title,
    subTitulo,
    image,
    autor,
    price,
    amount,
    }) {
    return(
        <BookBox>
            <ImageBook src={image} alt={title}/>
            <p>{title}</p>
            <Price>
                <p>R$ {price}</p>
                <ButtonCart>
                    <ion-icon name="cart-outline"></ion-icon>
                </ButtonCart>
            </Price>
            
        </BookBox>);
}

const BookBox = styled.div`
    position: relative;
    width: 180px;
    height: 240px;
    border-radius: 5px;
    background-color: var(--primary-color);
    box-shadow: 3px 3px 7px 1px rgba(17, 45, 78, 0.5);
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

const ButtonCart = styled.div`
    position: absolute;
    ion-icons{
        color: var(--primary-color);
        right: 8px;
        bottom: 8px;
    }
    color: var(--primary-color);
    z-index: 1;
    width: 20px;
    height: 20px;
`;