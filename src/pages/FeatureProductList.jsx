import { NavLink } from "react-router-dom";
import NumberFormat from "../helpers/NumberFormat";
import styled from "styled-components";

const FeatureProductList = ({filteredProducts}) => {
  const Wrapper = styled.section`
    display: grid;
    /* border: 1px solid blue; */
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

    .feature_products img{
      width: 300px;
    }

    .name_price{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      margin-top: 1rem;
      text-align: center;
      width: 100%;
    }
  `;
  return (
    <Wrapper>
      {filteredProducts.map((curElem) => {
        return (
          <div className="feature_products" key={curElem.id}>
            <NavLink to={`/singleProduct/${curElem.id}`}>
              <img src={curElem.thumbnail} alt="" />
            </NavLink>

            <div className="name_price">
              <p>{curElem.title}</p>
              <p>{<NumberFormat price={curElem.price} />}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default FeatureProductList;
