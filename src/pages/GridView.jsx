import FeatureProductList from "./FeatureProductList"
import styled from "styled-components";

const GridView = ({products}) => {
  // console.log(products)
  const Wrapper = styled.section`
    .container{
      /* border: 1px solid green; */
    }
  `;
  return (
    <Wrapper>
        <div className="container">
          <FeatureProductList filteredProducts={products}/>
        </div>
    </Wrapper>
  )
}

export default GridView