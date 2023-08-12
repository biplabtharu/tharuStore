import styled from "styled-components";
import { useGlobalContext } from "../context/ProductContext";
import FeatureProductList from "./FeatureProductList";
import spinner from "../assets/spinner.gif"

const FeatureProduct = () => {
  const { isLoading, products } = useGlobalContext();

  const filteredProducts = products.filter((curElem)=>{
    return curElem.category === "smartphones" && curElem.rating >= 3.50;
  })
  console.log(products);

  const Wrapper = styled.section`
    background: ${({ theme }) => theme.colors.header_bg};
    margin-top: 15rem;
    padding: 4rem 0;

    .container {
      max-width: 120rem;
      margin: auto;
    }
    .feature_section {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: ${({ theme }) => theme.fonts.small_heading};
        font-weight: 500;
        text-align: center;
        padding-bottom: 1rem;
      }

      h2 {
        /* font-size: ${({ theme }) => theme.fonts.normal_para}; */
        font-size: 3rem;
        font-weight: 500;
        text-align: center;
      }
    }
    .feature_products_section {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      align-items: center;
      padding-top: 4rem;
      gap: 4rem;
      padding: 4rem 2rem;
    }
    .feature_products {
      width: 100%;
      cursor: pointer;
      /* border: 1px solid red; */
    }

    .feature_products img {
      display: block;
      /* width: 320px; */
      width: 100%;
      margin: auto;
    }

    .name_price {
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .name_price p {
      font-size: ${({ theme }) => theme.fonts.normal_para};
    }
    .loading{
        border: 1px solid red;
    }
    .loading .loading_img{
      width: 20px;
      height: 20px;
      display: block;
    }
  `;

  if (isLoading) {
    return <div className="loading"><img src={spinner} alt="" className="loading_img"/></div>;
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="feature_section">
          <h3>Check Now</h3>
          <h2>Our Feature Services</h2>

          <div className="feature_products_section">
            <FeatureProductList filteredProducts={filteredProducts}/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeatureProduct;
