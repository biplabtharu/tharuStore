/* eslint-disable no-case-declarations */
const ProductReducer = (state, action) => {
  // console.log(`action data ${action.payload}`);

  // const userSortValue = document.getElementById("sorting");
  // const sortValue = userSortValue.options[userSortValue.selectedIndex].value;
  // console.log(sortValue);

  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      // eslint-disable-next-line no-case-declarations
      // const popularProducts = action.payload.filter((curElem) => {
      //   return curElem.rating >= 4.95;
      // })
      // const popularProducts = action.payload.filter((curElem) => {
      //     return curElem.rating >= 4.95;
      // });
      // console.log(action.payload);
      //   console.log(popularProducts)

      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    case "GET_SORTED_PRODUCTS":
      return {
        ...state,
        sortingValue: sortValue,
      };

    case "SORT_PRODUCTS":
      let newSortData;
      let tempSortProducts = [...action.payload];
      if(state.sortingValue === "a-z"){
        newSortData = tempSortProducts.sort((a,b)=>{
          return a.name.localCompare(b.name);
        })
      }
      return{
        ...state,
        sortProducts: newSortData,
      }
    default:
      return state;
  }
};

export default ProductReducer;
