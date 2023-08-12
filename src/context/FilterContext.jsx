import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useGlobalContext } from "./ProductContext";
import { useEffect } from "react";
import reducer from "../reducer/FilterReducer";

const filterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sortingValue: "lowest",
  filters:{
    text: "",
    category: "All",
    brand: "All",
    price: "",
    minPrice: "",
    maxPrice: "", 
  }
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useGlobalContext();
  // console.log(products);

  const setGridView = () =>{
    dispatch({type:"GRID_VIEW"});
  }

  const setListView = () =>{
    dispatch({type:"LIST_VIEW"});
  }

  // sort according to price or a-z or z-a
  const sortingMethod = (event) =>{
    let userSortValue = event.target.value;
    console.log(userSortValue)
    dispatch({type: "GET_SORTED_PRODUCTS", payload: userSortValue})
  }

  /// handle product filter value
  const handleProductFilterValue = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name);
    // console.log(value);
    // console.log(state.filters.category)

    return dispatch({type:"UPDATE_FILTER_PRODUCTS", payload: {name, value}})
  }

  // category wise filtering products
  // const filterCategory = (catData) =>{
  //   return dispatch({type:"UPDATE_CATEGORY", payload: catData})
  // }


  useEffect(()=>{
    dispatch({type:"SORT_PRODUCTS"})
  }, [state.sortingValue])


  // useEffect(()=>{
  //   dispatch({type:"FILTER_CATEGORY_PRODUCTS"})
  // }, [ state.category])

  useEffect(()=>{
    // const getFilterData = setTimeout(()=>{
    //   return dispatch({type:"FILTER_PRODUCTS"})
    // }, 1000);

    // return ()=>clearTimeout(getFilterData);
    
    dispatch({type:"FILTER_PRODUCTS"})


  }, [state.filters])

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <filterContext.Provider value={{ ...state, setGridView, setListView, sortingMethod, handleProductFilterValue}}>
      {children}
    </filterContext.Provider> 
  );
};

const useFilterContext = () => {
  return useContext(filterContext);
};

export { FilterContextProvider, filterContext, useFilterContext };
