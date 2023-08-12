import styled from "styled-components";
import ProductList from "./ProductList";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import { useFilterContext } from "../context/FilterContext";
import Sorting from "./Sorting";

const Products = () => {
  const { filter_products } = useFilterContext();
  // console.log(filter_products);

  return (
    <Wrapper>
      <div className="container">
        <div className="product_filter_section">
          <FilterSection />
        </div>

        <div className="products_view">
          <div className="set_view">
            <Sort />

            <div className="total_products">
              <p style={{ fontSize: "1.5rem" }}>
                {filter_products.length} total products
              </p>
          </div>

            <div className="sort_products">
              <Sorting/>
            </div>
          </div>

          <div className="all_products">
            <ProductList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    padding-top: 8rem;
  }

  .product_filter_section {
    /* border: 1px solid green; */
  }

  .set_view {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .products_view {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .total_products{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sort_products {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    form select {
      padding: 5px 8px;
      font-size: 15px;
      outline: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      /* text-indent: 1px; */
      /* text-overflow: ""; */
      background: transparent;
    }
  }
`;

export default Products;
