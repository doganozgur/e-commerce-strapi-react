import { Arrow, Arrows, ImagesContainer, StyledSlider } from "./Slider.styled";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const data = [
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export default function Slider() {
  return (
    <StyledSlider>
      <ImagesContainer>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </ImagesContainer>
      <Arrows>
        <Arrow>
          <WestOutlinedIcon />
        </Arrow>
        <Arrow>
          <EastOutlinedIcon />
        </Arrow>
      </Arrows>
    </StyledSlider>
  );
}
