import Product from "../../widgets/Product";
import styled from "styled-components";
import useProducts from "../../../hooks/useProducts";

const StyledProductList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function ProductList({ category, price, sort, id }) {
  const products = useProducts(id);
  return (
    <StyledProductList>
      {products.length > 1 &&
        products.map((item) => <Product product={item} key={item.id} />)}
    </StyledProductList>
  );
}
