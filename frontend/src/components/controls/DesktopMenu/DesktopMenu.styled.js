import styled from "styled-components"

// Destop nav
export const DesktopNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    a {
        color: #000;
    }
`

// Logo
export const Logo = styled.h2`
    font-weight: ${({theme}) => theme.fontWeights.normal};
    text-transform: uppercase;
`
// Left
export const Left = styled.div`
    display: flex;
    column-gap: 2rem;
    align-items: center;
`
// Middle
export const Middle = styled.div`
    display: flex;
    align-items: center;
`
// Right
export const Right = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
`

// Category List
export const CategoryList = styled.ul `
    display: flex;
    align-items: center;
    column-gap: 1rem;
`
// Category list item
export const CategoryListItem = styled.li`

`
// Menu list
export const MenuList = styled.ul`
    display: flex;
    column-gap: 1rem;
`
// Menu list item
export const MenuListItem = styled.li`

`
// Nav icons
export const NavIcons = styled.ul`
    display: flex;
    column-gap: 1rem;
`
// Nav icon
export const NavIcon = styled.li`
    cursor: pointer;
`