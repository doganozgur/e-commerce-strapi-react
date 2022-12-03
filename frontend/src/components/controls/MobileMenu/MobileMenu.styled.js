import styled from "styled-components"

// Wrapper
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

// Logo
export const Logo = styled.h2`
    font-weight: ${({theme}) => theme.fontWeights.normal};
    text-transform: uppercase;
`

// Hamburger button
export const HamburgerBtn = styled.button`
    font-weight: ${({theme}) => theme.fontWeights.bold};
    background: transparent;
    border: 0;
    padding: 0; 
    cursor: pointer;
    > svg {
        font-size: ${({theme}) => theme.fontSizes.xl2};
        
    }
`

// Nav
export const MobileNav = styled.nav`
    width: 60vw;
    position: absolute;
    top: 100%;
    left: ${({ isMenuActive }) => isMenuActive ? 0 : '-100%'};
    height: 100vh;
    z-index: 60;
    background: #fff;
    transition: all 0.3s;
    overflow-y: scroll;
    padding-block: 2rem;
    /* box-shadow: 2px 0 6px rgba(0,0,0,0.2); */

`
// Nav List
export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`
// List Item
export const ListItem = styled.li`
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-weight: ${({theme}) => theme.fontWeights.normal};
    text-transform: uppercase;

`