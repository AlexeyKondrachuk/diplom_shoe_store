import CatalogItems from "../components/CatalogItems/CatalogItems";
import InputSearch from "../components/InputSearch/InputSearch";
import "../pages/pages_stlyle/catalog.scss";

function CatalogPage() {
  return (
    <>
      <div className="catalog">
        <p className="catalog-title">Каталог</p>
        <InputSearch />
      </div>

      <CatalogItems />
    </>
  );
}

export default CatalogPage;
