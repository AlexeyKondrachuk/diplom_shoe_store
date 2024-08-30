import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderBaner from "../../components/Baner/headerBaner";
import Footer from "../../components/Footer/Footer";
import "./MainLayout.scss";

function MainLayout() {
  return (
    <>
      <Header />
      <HeaderBaner />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
