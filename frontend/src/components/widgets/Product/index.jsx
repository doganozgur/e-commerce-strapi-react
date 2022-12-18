import { Link } from "react-router-dom";
import { Image, ImagesContainer, Price, Title } from "./Product.styled";

export default function Card({ product }) {
  return (
    <article>
      <Link to={`/product/${product?.attributes.id}`}>
        <ImagesContainer>
          <Image
            src={
              process.env.REACT_APP_BASE_URL +
              product?.attributes.img.data.attributes.url
            }
            alt={product?.attributes.title}
          />
          <Image
            src={
              process.env.REACT_APP_BASE_URL +
              product?.attributes.img2.data.attributes.url
            }
            alt={product?.attributes.title}
          />
        </ImagesContainer>
        <Title>{product?.attributes.title}</Title>
        <Price>
          <span>${product?.attributes.price}</span>{" "}
          <span className="discount-price">
            ${product?.attributes.price - Math.floor(Math.random() * (70 + 30))}
          </span>
        </Price>
      </Link>
    </article>
  );
}
