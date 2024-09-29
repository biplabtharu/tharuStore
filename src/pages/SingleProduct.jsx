import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/ProductContext";
import styled from "styled-components";
import NumberFormat from "../helpers/NumberFormat";
import NumberFormatMrp from "../helpers/NumberFormatMrp";
import MyImage from "../components/MyImage";
import Star from "../components/Star";
import CartAmount from "./CartAmount";
import spinner from "../assets/spinner.gif";

const API = `https://dummyjson.com/products`;

const SingleProduct = () => {
  const [amount, setAmount] = useState(1);
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useGlobalContext();

  const { id } = useParams();

  const {
    id: alias,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = singleProduct;

  // console.log(images)

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  const Wrapper = styled.section`
    .container {
      max-width: 120rem;
      margin: auto;
    }
    .nav_para {
      font-size: 2rem;
      text-align: center;
      /* margin-bottom: 20px; */
      position: absolute;
      top: 100px;
      left: 10%;
    }

    .single_product_section {
      display: flex;
    }
    .single_product_image {
      flex-basis: 50%;
    }

    .single_product_desc {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      flex-basis: 50%;
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

  const setIncrease = () => {
    return setAmount(amount < stock ? amount + 1 : stock);
  };
  const setDecrease = () => {
    return setAmount(amount > 1 ? amount - 1 : amount);
  };

  if (isSingleLoading) {
    return (
      <div className="loading">
        <img src={spinner} alt="" className="loading_img" />
      </div>
    );
  }
  return (
    <>
      <Wrapper className="wrapper">
        <p className="nav_para">
          <NavLink to="/">Home</NavLink>/{title}
        </p>
        <div className="container">
          <div className="single_product_section">
            <div className="single_product_image">
              <MyImage images={images} />
            </div>

            <div className="single_product_desc">
              <h1>{title}</h1>

              <Star stars={rating} />
              <div className="price">
                <p>
                  MRP:
                  <del>
                    <NumberFormatMrp price={price} />
                  </del>
                </p>
                <span>
                  Deal of the day: <NumberFormat price={price} />
                </span>
              </div>

              <p>{description}</p>

              <hr />
              <p>
                Available:
                <span className="stock_para">
                  {stock > 0 ? "In stock" : "Not available"}
                </span>
              </p>
              <p>
                ID: <span className="stock_para">{id}</span>
              </p>
              <p>
                brand: <span className="stock_para">{brand}</span>
              </p>
              <hr />
              <CartAmount
                amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
                title={title}
                images={images}
                price={price}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default SingleProduct;
