import Footer from "../Footer";
import Navbar from "../Navbar";
import GlobalStyles from "../../styles/GlobalStyles";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
      <Navbar />
      <Footer />
    </>
  );
}
