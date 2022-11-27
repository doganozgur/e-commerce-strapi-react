import Footer from "../Footer";
import Header from "../Header";
import GlobalStyles from "../../styles/GlobalStyles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
