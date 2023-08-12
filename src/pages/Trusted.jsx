import styled from "styled-components";
import tiktok from "../assets/tiktok.png";
import kia from "../assets/kia.png";
import amazon from "../assets/amazon.png"
import adidas from "../assets/adidas.png"
import puma from "../assets/puma.png"
import instagram from "../assets/instagram.png"

const Trusted = () => {
  const Wrapper = styled.section`
    .container {
        background-color: ${({theme})=>theme.colors.header_bg};
    }

    .trusted-section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 3rem 0;
        gap: 5rem;

        p{
            font-size: ${({theme})=>theme.fonts.normal_para};
            /* color: ${({theme})=>theme.colors.gray_text}; */
        }
    }
    .company-logo{
        display: flex;
        gap: 8rem;
    }

    .company-logo div img{
        width: 8rem;
        height: 8rem;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
    }

    @media (max-width:${({theme})=>theme.media.mobile}){
        .trusted-section{
            padding: 4rem 0;
            gap: 3rem;
        }
        .company-logo{
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items: center;
        }

        .company-logo div img{
        width: 7rem;
        height: 7rem;
    }

    }
  `;
  return (
    <Wrapper className="wrapper">
      <div className="container">
        <div className="trusted-section">
          <p>Trusted by 100+ companies</p>

          <div className="company-logo">
            <div className="c-logo">
              <img src={kia}/>
            </div>
            <div className="c-logo">
              <img src={amazon} alt="" />
            </div>
            <div className="c-logo">
              <img src={instagram} alt="" />
            </div>
            <div className="c-logo">
              <img src={adidas} alt="" />
            </div>
            <div className="c-logo">
              <img src={puma} alt="" />
            </div>
            <div className="c-logo">
              <img src={tiktok} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Trusted;
