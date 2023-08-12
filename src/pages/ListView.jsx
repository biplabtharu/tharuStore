import { NavLink } from "react-router-dom";
import NumberFormat from "../helpers/NumberFormat";
import { Button } from "@mui/material";
import styled from "styled-components";

const ListView = ({ products }) => {
  const Wrapper = styled.section`
    .list_container {
      /* display: grid; */
      /* grid-template-columns: repeat(2, 1fr); */
      display: flex;
      margin-bottom: 2rem;
      margin-top: 8rem;
      column-gap: 3rem;
    }

    .product_desc{
        display: flex;
        flex-direction: column;
        /* justify-content: left;
        align-items: left; */
        text-align: left;
        margin-left: 0;
        padding-left: 0;
        gap: 1rem;

    }

    .product_desc p{
        font-size: 1.5rem;
        
    }
    .product_img{
        text-align: center;
    }
    .product_img{
      text-align: left;
      max-width: max-content;
    }
    .product_img img {
      width: 300px;
    }

  `;
  return (
    <Wrapper>
      {products.map((curElem) => {
        return (
          <div className="list_container" key={curElem.id}>
            <div className="product_img">
              <img src={curElem.thumbnail} alt="" />
            </div>

            <div className="product_desc">
              <p>{curElem.title}</p>
              <p>{<NumberFormat price={curElem.price} />}</p>
              <p>{curElem.description}</p>
              <NavLink to={`/singleProduct/${curElem.id}`}>
              <Button variant="contained" style={{fontSize: "1.1rem"}}>Read More</Button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ListView;
