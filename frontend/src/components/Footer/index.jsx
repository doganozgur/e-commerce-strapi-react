import {
  FooterBottom,
  FooterCol,
  FooterColTitle,
  FooterTop,
  List,
  ListItem,
  StyledFooter,
} from "./Footer.styled";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Women" },
  { id: 2, name: "Men" },
  { id: 3, name: "Shoes" },
  { id: 4, name: "Accessories" },
  { id: 5, name: "New Arrivals" },
];

const links = [
  { id: 1, name: "FAQ" },
  { id: 2, name: "Pages" },
  { id: 3, name: "Stores" },
  { id: 4, name: "Compare" },
  { id: 5, name: "Cookies" },
];

export default function Footer() {
  return (
    <StyledFooter>
      <FooterTop>
        <FooterCol>
          <FooterColTitle>Categories</FooterColTitle>
          <List>
            {categories &&
              categories.map((category) => (
                <ListItem key={category.id}>
                  <Link to="/">{category.name}</Link>
                </ListItem>
              ))}
          </List>
        </FooterCol>
        <FooterCol>
          <FooterColTitle>Links</FooterColTitle>
          <List>
            {links &&
              links.map((link) => (
                <ListItem key={link.id}>
                  <Link to="/">{link.name}</Link>
                </ListItem>
              ))}
          </List>
        </FooterCol>
        <FooterCol>
          <FooterColTitle>About</FooterColTitle>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            nisi sed tempore commodi quis deleniti id officiis, error, laborum
            animi assumenda hic sequi. Cum, nesciunt ipsum sint nihil iste
            incidunt.
          </p>
        </FooterCol>
        <FooterCol>
          <FooterColTitle>Contact</FooterColTitle>
          <p>
            Facilis hic, voluptate suscipit sed dolore quis in totam ea atque
            numquam perferendis. In, omnis laudantium. Laboriosam dolorem illo
            possimus amet temporibus quidem.
          </p>
        </FooterCol>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </StyledFooter>
  );
}
