import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  HamburgerBtn,
  ListItem,
  Logo,
  MobileNav,
  NavList,
  Wrapper,
} from "./MobileMenu.styled";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Wrapper>
      <Logo>My Store</Logo>
      <HamburgerBtn onClick={handleMenu}>
        <MenuIcon />
      </HamburgerBtn>
      <MobileNav isMenuActive={isMenuActive}>
        <NavList>
          {/* List Item */}
          <ListItem>
            <Link to="/">Homepage</Link>
          </ListItem>
          {/* List Item */}
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
          {/* List Item */}
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
          {/* List Item */}
          <ListItem>
            <Link to="/contact">Stores</Link>
          </ListItem>
        </NavList>
      </MobileNav>
    </Wrapper>
  );
}

export default MobileMenu;
