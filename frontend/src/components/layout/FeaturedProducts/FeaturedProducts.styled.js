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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;

  article {
    flex: 1;
  }

  @media screen and (min-width: ${({theme}) => theme.screens.sm}) {
    flex-direction: row;
    article {
      flex: 1 1 33%;
    }
  }

  @media screen and (min-width: ${({theme}) => theme.screens.lg}) {
    article {
      flex: 1 1 23%;
    }
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

