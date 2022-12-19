import { Container } from "../../../styles/Utils";
import { CategoryTitle, Gallery, Image } from "./Categories.styled";
import useCategories from "../../../hooks/useCategories";
import { Link } from "react-router-dom";

export default function Categories() {
  const categories = useCategories();
  console.log(categories);
  return (
    <section>
      <Container>
        <Gallery>
          {/* List categories */}
          {categories &&
            categories.slice(0, 8).map(({ attributes: { title }, id }) => (
              <figure className={`gallery-item--${id}`} key={id}>
                <Link to="/">
                  <CategoryTitle>{title}</CategoryTitle>
                </Link>
                <Image src="https://picsum.photos/id/12/500/600" alt="" />
              </figure>
            ))}
        </Gallery>
      </Container>
    </section>
  );
}
