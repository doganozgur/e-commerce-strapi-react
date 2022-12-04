import { Link } from "react-router-dom";
import { Image, ImagesContainer, Price, Title } from "./Card.styled";

export default function Card({ product }) {
  const { id, title, price, description, category, images } = product;
  return (
    <article>
      <Link to={`/product/${id}`}>
        <ImagesContainer>
          {images?.slice(0, 2).map((image, idx) => (
            <Image src={image} alt="" key={idx} />
          ))}
        </ImagesContainer>
        <Title>{title}</Title>
        <Price>
          <span>${price}</span>{" "}
          <span className="discount-price">
            ${price - Math.floor(Math.random() * (70 + 30))}
          </span>
        </Price>
      </Link>
    </article>
  );
}
