/* eslint-disable no-case-declarations */
const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORTED_PRODUCTS":
      // let userSortValue = document.getElementById("sorting");
      // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sortValue)
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORT_PRODUCTS":
      const { filter_products, sortingValue } = state;
      let newSortData;
      let tempSortProducts = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sortingValue === "highest") {
          return b.price - a.price;
        }

        if (sortingValue === "lowest") {
          return a.price - b.price;
        }

        if (sortingValue === "a-z") {
          return a.title.localeCompare(b.title);
        }

        if (sortingValue === "z-a") {
          return b.title.localeCompare(a.title);
      }
      };

      newSortData = tempSortProducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_PRODUCTS":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      const { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, brand} = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.title.toLowerCase().includes(text.toLowerCase());
        });
      }

      if(category !== "All"){
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }
      // if (category === 'All') {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) => {
      //     return curElem.category !== category;
      //   });
      // }

      if(brand !== "All"){
        tempFilterProduct = tempFilterProduct.filter((curElem)=>{
          return curElem.brand === brand;
        })
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    // case "UPDATE_CATEGORY":
    //   const catData = action.payload;

    //   return {
    //     ...state,
    //     category: catData,
    //   };

    // case "FILTER_CATEGORY_PRODUCTS":
    //   const total_products  = state.all_products;
    //   const catFilterProduct = [...total_products];
    //   const data = state.category;
    //   let newFilterProduct;

    //   if(data){
    //     newFilterProduct = catFilterProduct.filter((curElem)=>{
    //       return  curElem.category === data; 
    //     })
    //   }
    //   if (data === "All"){
    //       newFilterProduct = catFilterProduct.filter((curElem)=>{
    //         return curElem.category !== data;
    //       })
    //   }

    //   return {
    //     ...state,
    //     filter_products: newFilterProduct,
    //   };
    default:
      return state;
  }
};

export default FilterReducer;
