import styled from "styled-components"

// Styled slider
export const StyledSlider = styled.div`
    height: calc(100vh - 68.5px);
    width: 100vw;
    overflow-x: hidden;
`

// Images container
export const ImagesContainer = styled.div`
    width: 300vw;
    height: 100%;
    display: flex;

    transform: translateX(0vw);
    
    > img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
    }
`
// Arrows
export const Arrows = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100px;
    bottom: 100px;
    display: flex;
    gap: 3rem;
`
// Arrow
export const Arrow = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid #919191a8;
    border-radius: 100vh;
    background-color: rgba(0,0,0,0.4);
    color: #919191;
    padding: 1rem;
    font-weight: ${({theme}) => theme.fontWeights.bold};
    cursor: pointer;
`