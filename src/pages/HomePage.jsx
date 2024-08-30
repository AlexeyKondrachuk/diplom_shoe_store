import CatalogItems from "../components/CatalogItems/CatalogItems";
import BestSeller from "../components/BestSeller/BestSellers";
import "../pages/pages_stlyle/HomePage.scss";

function HomePage() {
  return (
    <section className="home">
      <BestSeller />
      <CatalogItems />
    </section>
  );
}

export default HomePage;
