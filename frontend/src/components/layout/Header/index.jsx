import { useEffect, useState } from "react";
import DesktopMenu from "../../controls/DesktopMenu";
import MobileMenu from "../../controls/MobileMenu";
import { StyledHeader } from "./Header.styled";

export default function Navbar() {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <StyledHeader>
      {width < 1024 ? <MobileMenu /> : <DesktopMenu />}
    </StyledHeader>
  );
}
