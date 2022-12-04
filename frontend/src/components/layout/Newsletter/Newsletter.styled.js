import styled from "styled-components"

// Styled newsletter
export const StyledNewsletter = styled.section`
    background-color: #2879fe;
    padding: 3rem 0;

`
// Newsletter inner
export const NewsletterInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: ${({theme}) => theme.screens.sm}) {
        flex-direction: row;
    }
`
// Left
export const Left = styled.div`
`
// Middle
export const Middle = styled.div`
    display: flex;
    gap: .25rem;
`
// Right
export const Right = styled.div`
`
// Title
export const Title = styled.h2`
    text-transform: uppercase;
    color: #fff;
`
// Textbox
export const Textbox = styled.input`
    padding: 10px;
    border: 0;
    border-radius: 5px;
    width: 100%;
`
// Button
export const Button = styled.button`
    border: 0;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    flex-shrink: 0;
`
// Social list
export const SocialList = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`
// Social Item
export const SocialItem = styled.li`
    > a {
        color: #fff;
    }
`

