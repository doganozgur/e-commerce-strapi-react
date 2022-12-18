import styled from "styled-components";

// Top
export const Top = styled.div`
  margin-block-end: 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: row;
    align-items: center;
    column-gap: 4rem;
  }
`;

// Bottom
export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: ${({theme}) => theme.screens.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({theme}) => theme.screens.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  justify-content: center;
`


// Section title
export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  flex-shrink: 0;
  text-transform: capitalize;
`;
// Paragraph
export const Paragraph = styled.p`
  color: gray;
`;

