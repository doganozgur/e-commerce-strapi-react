import { Container } from "../../../styles/Utils";
import { Gallery, Image } from "./Categories.styled";

export default function Categories() {
  return (
    <section>
      <Container>
        <Gallery>
          <figure className="gallery-item--1">
            <Image src="https://picsum.photos/id/12/500/600" alt="" />
          </figure>
          <figure className="gallery-item--2">
            <Image src="https://picsum.photos/id/13/500/600" alt="" />
          </figure>
          <figure className="gallery-item--3">
            <Image src="https://picsum.photos/id/17/500/600" alt="" />
          </figure>
          <figure className="gallery-item--4">
            <Image src="https://picsum.photos/id/19/500/600" alt="" />
          </figure>
          <figure className="gallery-item--5">
            <Image src="https://picsum.photos/id/23/500/600" alt="" />
          </figure>
          <figure className="gallery-item--6">
            <Image src="https://picsum.photos/id/25/500/600" alt="" />
          </figure>
          <figure className="gallery-item--7">
            <Image src="https://picsum.photos/id/28/500/600" alt="" />
          </figure>
          <figure className="gallery-item--8">
            <Image src="https://picsum.photos/id/34/500/600" alt="" />
          </figure>
        </Gallery>
      </Container>
    </section>
  );
}
