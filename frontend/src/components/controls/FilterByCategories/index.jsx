import styled from "styled-components";
import { NarrowContainer } from "../../../styles/Utils";

// Title
const Title = styled.h3``;

// Filter list
const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

// Label
const Label = styled.label``;

export default function FilterByCategories() {
  return (
    <>
      <Title>Product Categories</Title>
      <FilterList>
        <li>
          <Label>
            <input type="checkbox" />
            Hat
          </Label>
        </li>
        <li>
          <Label>
            <input type="checkbox" />
            T-shirt
          </Label>
        </li>
      </FilterList>
    </>
  );
}
