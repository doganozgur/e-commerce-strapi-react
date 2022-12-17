import styled from "styled-components"

export const StyledCartBox = styled.div`
    position: absolute;
    right: 0;
    top: 100%;
    padding: 1.5rem;
    background-color: #fff;
    max-width: 500px;
    z-index: 999;
    box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
`

export const Item = styled.article`
`

export const Top = styled.div`
    display: flex;
    gap: 1rem;
`

export const ImageContainer = styled.div`
    flex: 2;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Details = styled.div`
    flex: 4;
    h3, p {
        margin-bottom: 1rem;
    }
    p {
        font-size: ${({theme}) => theme.fontSizes.sm};
    }
`

export const Amount = styled.p`
    span {
        color: ${({theme}) => theme.colors.blue};
    }
`

export const RemoveBtn = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
    }
`

export const Bottom = styled.div`
`

export const SubtotalArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 1rem;
`