import Footer from "../Footer";
import Header from "../Header";
import GlobalStyles from "../../styles/GlobalStyles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";
import { Container } from "../../styles/Utils";

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
