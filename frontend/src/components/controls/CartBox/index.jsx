import {
  Amount,
  Bottom,
  Details,
  ImageContainer,
  Item,
  RemoveBtn,
  StyledCartBox,
  SubtotalArea,
  Top,
} from "./CartBox.styled";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { Price } from "../../../styles/Utils";
import { Button } from "@mui/material";

export default function CartBox() {
  return (
    <StyledCartBox>
      <Item>
        <Top>
          {/* Image */}
          <ImageContainer>
            <Link to="/">
              <img
                src="https://api.lorem.space/image/fashion?w=640&h=480&r=8132"
                alt=""
              />
            </Link>
          </ImageContainer>
          {/* Details */}
          <Details>
            <Link to="/">
              <h3>Oversized T-Shirt</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, at!
            </p>
            <Amount>
              1 x <span>119₺</span>
            </Amount>
          </Details>
          <RemoveBtn>
            <button>
              <DeleteOutlineIcon />
            </button>
          </RemoveBtn>
        </Top>
      </Item>
      <Item>
        <Top>
          {/* Image */}
          <ImageContainer>
            <Link to="/">
              <img
                src="https://api.lorem.space/image/fashion?w=640&h=480&r=8132"
                alt=""
              />
            </Link>
          </ImageContainer>
          {/* Details */}
          <Details>
            <Link to="/">
              <h3>Oversized T-Shirt</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, at!
            </p>
            <Amount>
              1 x <span>119₺</span>
            </Amount>
          </Details>
          <RemoveBtn>
            <button>
              <DeleteOutlineIcon />
            </button>
          </RemoveBtn>
        </Top>
      </Item>
      <Bottom>
        <SubtotalArea>
          <h3>Subtotal</h3>
          <Price>119₺</Price>
        </SubtotalArea>
        <Button variant="contained">Proceed To Checkout</Button>
      </Bottom>
    </StyledCartBox>
  );
}
