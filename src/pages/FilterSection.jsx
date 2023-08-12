import { useFilterContext } from "../context/FilterContext";
import styled from "styled-components";

const FilterSection = () => {
  const Wrapper = styled.section`
    /* border: 1px solid red; */
    .search_form {
      form input {
        outline: none;
        padding: 0.4rem;
        max-width: 15rem;

        ::placeholder {
          padding: 0.4rem;
        }
      }
    }

    .category {
      padding-top: 4rem;

      .category_lists {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
      }

      /* .categoryList li{
        cursor: pointer;
      } */
    }
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1.3rem;
    }
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 1.4rem;
    }
    .active {
      border-bottom: 1px solid #000;
      max-width: max-content;
    }

    .company {
      margin-top: 3rem;
    }
    /* text-align: left; */
  `;

  const {
    filters: { text },
    all_products,
    handleProductFilterValue,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let categoryVal = data.map((curElem) => {
      return curElem[property];
    });

    return (categoryVal = ["All", ...new Set(categoryVal)]);

    // console.log(categoryVal);
  };

  const categoryData = getUniqueData(all_products, "category");
  const brandData = getUniqueData(all_products, "brand");
  // console.log(brandData);

  return (
    <Wrapper>
      <div className="search_form">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            autoFocus="autofocus"
            name="text"
            value={text}
            placeholder="SEARCH"
            onChange={handleProductFilterValue}
          />
        </form>
      </div>

      <div className="category">
        <h3>Category</h3>
        {/* <ul className="categoryList"> */}
        <div className="category_lists">
          {categoryData.map((curElem) => {
            return (
              <>
                <button
                  onClick={handleProductFilterValue}
                  name="category"
                  value={curElem}
                >
                  {curElem}
                </button>
              </>
            );
          })}
        </div>
        {/* </ul> */}
      </div>

      <div className="company">
        <h3>Company</h3>
        <select name="brand" id="" onClick={handleProductFilterValue}>
          {brandData.map((curElem, index) => {
            return (
              <option value={curElem} key={index} name="brand">
                {curElem}
              </option>
            );
          })}
        </select>
      </div>


      <div className="price_slider">
          <input type="range" min="-10" max="10" />
      </div>
    </Wrapper>
  );
};

export default FilterSection;
