import styled from "styled-components";

export const Container = styled.div`
    padding: 0 1.5rem;
`

export const NarrowContainer = styled.div`
    margin: 0 auto;
    @media screen and (min-width: ${({theme}) => theme.screens.sm}) {
        max-width: 37rem;
        width: 100%;
    }
    @media screen and (min-width: ${({theme}) => theme.screens.md}) {
        max-width: 45rem;
    }
    @media screen and (min-width: ${({theme}) => theme.screens.lg}) {
        max-width: 61rem;
    }
    @media screen and (min-width: ${({theme}) => theme.screens.xl}) {
        max-width: 77rem;
    }
    @media screen and (min-width: ${({theme}) => theme.screens.xl2}) {
        max-width: 93rem;
    }
`