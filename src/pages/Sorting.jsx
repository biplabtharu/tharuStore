// import { useFilterContext } from "../context/FilterContext";
import { useFilterContext } from "../context/FilterContext";

const Sorting = () => {
    const {sortingMethod} = useFilterContext();

  return (
    <form>
      <select name="sortingValue" id="sorting" onClick={sortingMethod}>
        <option value="lowest">lowest to highest</option>
        <option value="highest">highest to lowest</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
    </form>
  );
};

export default Sorting;
