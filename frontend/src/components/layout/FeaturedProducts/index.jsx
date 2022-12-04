import { useCallback, useEffect, useState } from "react";
import { Container } from "../../../styles/Utils";
import Card from "../../widgets/Card";
import {
  Bottom,
  Paragraph,
  SectionTitle,
  Top,
} from "./FeaturedProducts.styled";

export default function FeaturedProducts({ type }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = "https://api.escuelajs.co/api/v1/products";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const fetchedProducts = useCallback(async () => {
    const products = await getProducts();
    setProducts(products);
  }, []);

  useEffect(() => {
    fetchedProducts();
  }, [fetchedProducts]);

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
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Bottom>
      </Container>
    </section>
  );
}
