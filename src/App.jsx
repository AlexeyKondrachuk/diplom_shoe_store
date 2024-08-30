import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import CatalogPage from "./pages/CatalogPage";
import { Cart } from "./pages/Cart";
import Products from "./components/products/Products";
import MainLayout from "./pages/MainLayout/MainLayout";
import HomePage from "./pages/HomePage";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="catalog/:id" element={<Products />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
