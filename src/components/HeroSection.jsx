import styled from "styled-components";
import hero_img from "../assets/hero_img.jpg";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

const HeroSection = ({myData}) => {
    const {name} = myData;

  const Wrapper = styled.section`

    .container {
      max-width: 120rem;
      margin: 0 auto;
    }

    .hero-columns {
      display: flex;
      gap: 9rem;
      /* border: 1px solid red; */
      justify-content: space-between;
      align-items: center;
    }

    .hero-column{
        /* border: 1px solid green; */
        flex-basis: 50%;

        p {
          font-size: ${({ theme }) => theme.fonts.normal_para};
          color: ${({ theme }) => theme.colors.gray_text};
        }
    
        h1 {
          font-size: ${({ theme }) => theme.fonts.normal_heading};
          margin-bottom: 1rem;
          font-weight: 500;
        }
    }


    .hero-column1{
        width: 100%;
        height: auto;
    }

    .hero-column2{
        width: 100%;
        height: auto;
        position: relative;

        &::after{
            content: "";
            background-color: #b8b8ff;
            position: absolute;
            width: 28rem;
            height: 30rem;
            display: block;
            top: -5rem;
            left: 60%;
            z-index: -1;
        }
    }

    figure{
        width: 100%;
    }
    .hero-column2 figure img{
        width: 100%;
        height: 100%;
        display: block;
    }


    @media (max-width:${({theme})=>theme.media.mobile}){
        .hero-columns{
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0 1rem;
            gap: 5rem;
        }
        .hero-column{
            flex-basis: 100%;

            h1{
                font-size: ${({theme})=>theme.fonts.mobile_normal_heading};
            }
            p{
                font-size: ${({theme})=>theme.fonts.mobile_normal_para};
            }
        }

        .hero-column2::after{
            display: none;
        }
    }
  `;

  return (
    <Wrapper className="wrapper">
      <div className="container">
        <div className="hero-columns">
          <div className="hero-column hero-column1">
            <p>WELCOME TO</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              esse assumenda voluptatum dolorum quidem earum in veritatis quam
              excepturi recusandae.
            </p>

            <NavLink to="/products"><Button>Shop Now</Button></NavLink>
          </div>
          <div className="hero-column hero-column2">
            <figure>
              <img src={hero_img} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
