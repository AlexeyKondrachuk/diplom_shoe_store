import { useDispatch, useSelector } from "react-redux";
import FilterMenu from "./FilterMenu";
import { setCaregoryId } from "../../redux/slices/filterSlice";


function Filters() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onChangeCategory = (categoryId) => {
    console.log(categoryId);
    dispatch(setCaregoryId(categoryId));
  };

  return (
    <>
      <FilterMenu value={categoryId} onChangeCategory={onChangeCategory} />
    </>
  );
}

export default Filters;
