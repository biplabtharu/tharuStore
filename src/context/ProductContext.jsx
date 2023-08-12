import { useContext, useEffect, createContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = `https://dummyjson.com/products`;

const initialState = {
  isLoading: true,
  isError: false,
  sortProducts: [],
  products: [],
  isSingleLoading: false,
  singleProduct: {},
  sortingValue: "lowest",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "API_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      const actualProducts = products.products;
      // console.log(actualProducts);
      dispatch({ type: "SET_API_DATA", payload: actualProducts });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      throw error;
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const oneProduct = await res.data;
      // console.log(oneProduct);
      // console.log(typeof(singleProduct))
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: oneProduct });
    } catch (err) {
      dispatch({ type: "SET_SINGLE_ERROR" });
      throw err;
    }
  };

  // const sortingMethod = () =>{
  //   dispatch({type: "GET_SORTED_PRODUCTS"})
  // }


  // useEffect(()=>{
  //   dispatch({type:"SORT_PRODUCTS", payload: state.products})
  // }, [state.sortingValue])


  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
