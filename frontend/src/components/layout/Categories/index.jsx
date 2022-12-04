import { Container } from "../../../styles/Utils";
import { Gallery, Image } from "./Categories.styled";

export default function Categories() {
  return (
    <section>
      <Container>
        <Gallery>
          <figure className="gallery-item--1">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--2">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--3">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--4">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--5">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--6">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--7">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--8">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--9">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
          <figure className="gallery-item--10">
            <Image src="https://picsum.photos/seed/200/300" alt="" />
          </figure>
        </Gallery>
      </Container>
    </section>
  );
}
