import styled from "styled-components"

// Products
export const Products = styled.section`
    padding-block-start: 2rem;
`

// Products inner
export const ProductsInner = styled.div`
    display: flex;
    gap: 2rem;  
`

// Left
export const Left = styled.aside`
    flex: 1;
    .category-checkbox > span:first-child{
        padding: 5px;
    }
`

// Right
export const Right = styled.main`
    flex: 3;
`

// Banner
export const Banner = styled.img`
    margin-block-end: 4rem;
`

// Title
export const Title = styled.h3`
    font-weight: ${({theme}) => theme.fontWeights.semiBold};
    margin-block-end: .8rem;
`