import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LangEn from "../../assets/united-kingdom.png";
import LangTr from "../../assets/turkey.png";
import LangDe from "../../assets/germany.png";
import styled from "styled-components";

// Language icon
export const LanguageIcon = styled.img`
  width: 20px;
`;

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <LanguageIcon src={LangTr} alt="" />
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <LanguageIcon src={LangEn} alt="English Language" /> &nbsp;English
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LanguageIcon src={LangDe} alt="German Language" /> &nbsp;Deutsch
        </MenuItem>
      </Menu>
    </div>
  );
}
