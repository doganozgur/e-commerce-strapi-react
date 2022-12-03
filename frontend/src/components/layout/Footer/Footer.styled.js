import styled from "styled-components"

// Styled footer
export const StyledFooter = styled.footer`

`
// Footer top
export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;

    @media (min-width: ${({theme}) => theme.screens.sm}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: ${({theme}) => theme.screens.md}) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`
// Footer bottom
export const FooterBottom = styled.div`

`
// Col
export const FooterCol = styled.div`

`

// Footer title
export const FooterColTitle = styled.h3`
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-weight: ${({theme}) => theme.fontWeights.normal};
    margin-block-end: 1.5rem; 
`

// List
export const List = styled.ul`

`
// List item
export const ListItem = styled.li`
    padding: .4rem 0;
    > a {
        color: #000;
    }
`