import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  CategoryList,
  DesktopNav,
  Left,
  CategoryListItem,
  Logo,
  Middle,
  Right,
  MenuList,
  MenuListItem,
  NavIcons,
  NavIcon,
} from "./DesktopMenu.styled";
import { Link } from "react-router-dom";
import LanguageMenu from "../LanguageMenu";
import CurrenyMenu from "../CurrencyMenu";
import { Container } from "../../../styles/Utils";
import CartBox from "../CartBox";
import { useState } from "react";

function DesktopMenu() {
  const [isCartBoxOpen, setIsCartBoxOpen] = useState(false);
  return (
    <Container>
      <DesktopNav>
        {/* left */}
        <Left>
          <LanguageMenu />
          <CurrenyMenu />
          <CategoryList>
            {/* List item */}
            <CategoryListItem>
              <Link to="/products/1">Clothes</Link>
            </CategoryListItem>
            {/* List item */}
            <CategoryListItem>
              <Link to="/products/2">Electronics</Link>
            </CategoryListItem>
            {/* List item */}
            <CategoryListItem>
              <Link to="/products/3">Furniture</Link>
            </CategoryListItem>
          </CategoryList>
        </Left>
        {/* center */}
        <Middle>
          <Link to="/">
            <Logo>My Store</Logo>
          </Link>
        </Middle>
        {/* right */}
        <Right>
          {/* Menu list */}
          <MenuList>
            <MenuListItem>
              <Link to="/">Homepage</Link>
            </MenuListItem>
            <MenuListItem>
              <Link to="/about">About</Link>
            </MenuListItem>
            <MenuListItem>
              <Link to="/contact">Contact</Link>
            </MenuListItem>
            <MenuListItem>
              <Link to="/stores">Stores</Link>
            </MenuListItem>
          </MenuList>
          <NavIcons>
            <NavIcon>
              <SearchIcon />
            </NavIcon>
            <NavIcon>
              <PersonOutlineIcon />
            </NavIcon>
            <NavIcon>
              <FavoriteBorderIcon />
            </NavIcon>
            <NavIcon onClick={() => setIsCartBoxOpen(!isCartBoxOpen)}>
              <ShoppingCartOutlinedIcon />
            </NavIcon>
          </NavIcons>
        </Right>
        {isCartBoxOpen && <CartBox />}
      </DesktopNav>
    </Container>
  );
}

export default DesktopMenu;
