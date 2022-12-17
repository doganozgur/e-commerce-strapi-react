import { useCallback, useEffect, useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import { Container } from "../../../styles/Utils";
import Card from "../../widgets/Product";
import {
  Bottom,
  Paragraph,
  SectionTitle,
  Top,
} from "./FeaturedProducts.styled";

export default function FeaturedProducts({ type }) {
  const products = useProducts(1);

  const sectionTitle =
    type === "featured" ? "Featured Products" : "Trending Products";

  return (
    <section>
      <Container>
        {/* Top */}
        <Top>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            laudantium blanditiis quos quis debitis nostrum minus quam impedit
            autem ullam! Fuga temporibus modi iure reprehenderit quod nisi
            voluptatem eum, id veritatis porro. Architecto veritatis nobis
            libero nam asperiores iure ab?
          </Paragraph>
        </Top>
        <Bottom>
          {products.length > 0 &&
            products
              .slice(0, 8)
              .map((product) => <Card key={product.id} product={product} />)}
        </Bottom>
      </Container>
    </section>
  );
}
