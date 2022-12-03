import { Arrow, Arrows, ImagesContainer, StyledSlider } from "./Slider.styled";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";

const data = [
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Previous slide
  const prevSlide = () =>
    currentSlide > 0
      ? setCurrentSlide((prev) => prev - 1)
      : currentSlide === 0
      ? setCurrentSlide(2)
      : currentSlide;

  // Next slide
  const nextSlide = () =>
    currentSlide < 2
      ? setCurrentSlide((prev) => prev + 1)
      : currentSlide === 2
      ? setCurrentSlide(0)
      : currentSlide;

  console.log(currentSlide);

  return (
    <StyledSlider>
      <ImagesContainer>
        <img src={data[currentSlide]} alt="" />
      </ImagesContainer>
      <Arrows>
        <Arrow onClick={prevSlide}>
          <WestOutlinedIcon />
        </Arrow>
        <Arrow onClick={nextSlide}>
          <EastOutlinedIcon />
        </Arrow>
      </Arrows>
    </StyledSlider>
  );
}
