import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import GlobalStyles from "../../../styles/GlobalStyles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/Theme";

export default function LayoutComponent() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
