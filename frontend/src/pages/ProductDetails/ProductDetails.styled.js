import styled from "styled-components"

export const StyledProductDetails = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem;
    @media screen and (min-width: ${({theme}) => theme.screens.lg}) {
        flex-direction: row;
    }
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    gap: .5rem;
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1.5rem;

    hr {
        width: 100%;
        border: 1px solid #ececec;
    }
`

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    flex: 1;
    img {
        width: 100%;
        object-fit: cover;
        cursor: pointer;

    }
`

export const MainImg = styled.div`
    flex: 5;
    img {
        width: 100%;
    }
`

export const Title = styled.h2``

export const Price = styled.span`
    font-size: ${({theme}) => theme.fontSizes.xl};
    font-weight: ${({theme}) => theme.fontWeights.semiBold};
    color: ${({theme}) => theme.colors.blue};
`

export const Summary = styled.p`
    text-align: justify;
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    gap: .7rem;
    button {
        font-size: 1.5rem;
        cursor: pointer;
        border: 0;
        background-color: #ececec;
        padding: .8rem;
        &:hover {
            background-color: #d9d9d9;
        }
    }

`
export const ButtonsHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    button {
        display: flex;
        align-items: center;
        gap: .3rem;
    }
`
export const Details = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Detail = styled.li`

`