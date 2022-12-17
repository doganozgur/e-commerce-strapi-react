import { useState } from "react";
import {
  Images,
  Left,
  MainImg,
  Price,
  Right,
  StyledProductDetails,
  Title,
  Quantity,
  ButtonsHolder,
  Details,
  Detail,
  Summary,
} from "./ProductDetails.styled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Button } from "@mui/material";

const images = [
  "https://api.lorem.space/image/fashion?w=640&h=480&r=8132",
  "https://api.lorem.space/image/fashion?w=640&h=480&r=153",
];
export default function ProductDetails() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <StyledProductDetails>
      <Left>
        <Images>
          <img
            src={images[0]}
            alt=""
            onClick={() => setSelectedImg(0)}
            style={{ opacity: selectedImg === 0 && ".7" }}
          />
          <img
            src={images[1]}
            alt=""
            onClick={() => setSelectedImg(1)}
            style={{ opacity: selectedImg === 1 && ".7" }}
          />
        </Images>
        <MainImg>
          <img src={images[selectedImg]} alt="" />
        </MainImg>
      </Left>
      <Right>
        <Title>Oversize T-Shirt</Title>
        <Price>119 ₺</Price>
        {/* Summary */}
        <Summary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          veniam, suscipit neque beatae iste ipsam libero ut autem perferendis
          perspiciatis quidem quisquam harum non atque laborum labore architecto
          voluptatem! Placeat!
        </Summary>
        <Quantity>
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </Quantity>
        {/* Add to cart */}
        <Button variant="contained">
          <AddShoppingCartIcon /> ADD TO CART
        </Button>
        {/* Compare & Add to wishlist buttons */}
        <ButtonsHolder>
          <Button variant="text">
            {" "}
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </Button>
          <Button variant="text">
            <CompareArrowsIcon /> ADD TO COMPARE
          </Button>
        </ButtonsHolder>
        {/* Product details */}
        <Details>
          <Detail>
            <strong>Vendor: </strong> Polo
          </Detail>
          <Detail>
            <strong>Product Type: </strong> T-Shirt
          </Detail>
          <Detail>
            <strong>Tags: </strong> T-Shirt, Men, Top
          </Detail>
        </Details>
        <hr />
        {/* Additional details & FAQ */}
        <Details>
          <Detail>DESCRIPTION</Detail>
          <hr />
          <Detail>ADDITIONAL INFORMATION</Detail>
          <hr />
          <Detail>FAQ</Detail>
        </Details>
      </Right>
    </StyledProductDetails>
  );
}
