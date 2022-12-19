import styled from "styled-components"



// Gallery
export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(1,1fr));
    grid-gap: 1rem;

    figure {
        position: relative;
    }

    @media screen and (min-width: ${({theme}) => theme.screens.sm}) {

        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 5vw);
        .gallery-item--1 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
        }
        .gallery-item--2 {
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 6;
        }
        .gallery-item--3 {
            grid-column-start: 5;
            grid-column-end: 7;
            grid-row-start: 1;
            grid-row-end: 4;
        }
        .gallery-item--4 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 3;
            grid-row-end: 9;
        }
        .gallery-item--5 {
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 6;
            grid-row-end: 9;
        }
        .gallery-item--6 {
            grid-column-start: 5;
            grid-column-end: 7;
            grid-row-start: 4;
            grid-row-end: 9;
        }
        .gallery-item--7 {
            grid-column-start: 7;
            grid-column-end: 9;
            grid-row-start: 1;
            grid-row-end: 7;
        }
        .gallery-item--8 {
            grid-column-start: 7;
            grid-column-end: 9;
            grid-row-start: 7;
            grid-row-end: 9;
        }
    }
`

// Image
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
// Categort title
export const CategoryTitle = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-weight: ${({theme}) => theme.fontWeights.bold};
    text-transform: capitalize;
    color: #423c3c;
    background: rgba(255, 255, 255, .6);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
