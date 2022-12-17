import styled from "styled-components";

// Images container
export const ImagesContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;

    &:hover {
        > img:first-child {
            z-index: 2;
        }
    }
`

// Image
export const Image = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1/2;
    object-fit: cover;
    position: absolute;
    z-index: 1;
`   

// Title
export const Title = styled.h3`
  margin-block: 1rem;
  font-size: ${({theme}) => theme.fontSizes.md};
  color: #000;
`

// Price
export const Price = styled.div`
    display: flex;
    column-gap: 2rem;
    font-weight: ${({theme}) => theme.fontWeights.semiBold};
    color: #000;

    span:not(.discount-price) {
        text-decoration: line-through;
        opacity: .5;
        font-weight: normal;
    }
`
