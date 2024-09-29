import { useEffect, useState } from "react";
import styled from "styled-components";
import NumberFormatMrp from "../helpers/NumberFormatMrp";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(products);
    console.log(products);
  }, []);

  const Wrapper = styled.section`
    .container {
      max-width: 100rem;
      margin: auto;
    }
    .nav_para {
      font-size: 2rem;
      text-align: center;
      position: absolute;
      top: 100px;
      left: 10%;
    }

    .single_product_section {
      display: flex;
    }
    .single_product_image {
      flex-basis: 20%;
    }

    .single_product_desc {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      flex-basis: 40%;
      h1 {
        font-size: 3rem;
        font-weight: 500;
      }

      p {
        font-size: 1.6rem;
      }
    }
    .price {
      p {
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }

      span {
        font-size: 1.7rem;
        font-weight: 500;
        color: #007e58;
      }
    }

    .stock_para {
      font-weight: bold;
    }

    del {
      text-decoration: line-through;
    }

    hr {
      max-width: 100%;
      width: 80%;
    }
  `;

  return (
    <>
      <Wrapper className="wrapper">
        <div className="container">
          {products.length > 0 ? (
            products.map((p, index) => (
              <div
                key={index}
                className="single_product_section"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="single_product_image">
                  <img src={p.images} style={{ width: "100px" }}></img>
                </div>
                <div className="single_product_desc">
                  <h2>Item: {p.title}</h2>
                </div>

                <div className="price">
                  <p>
                    MRP:
                    <NumberFormatMrp price={p.price} />
                  </p>
                </div>
                <div className="amount" style={{ paddingLeft: "60px" }}>
                  <h2>Amount: {p.amount}</h2>
                </div>
              </div>
            ))
          ) : (
            <h1>No products in the cart</h1>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Cart;
