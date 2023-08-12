import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const {filter_products, grid_view} = useFilterContext();
  // console.log(filter_products)
  // console.log(grid_view)
  
  if(grid_view === true){
    return <GridView products={filter_products}/>
  }
  else if(grid_view === false){
    return <ListView products={filter_products}/>
  }
}

export default ProductList