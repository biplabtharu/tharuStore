import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
  const Wrapper = styled.section`
    .container {
      max-width: 120rem;
      margin: 0 auto;

      h1 {
        font-size: ${({ theme }) => theme.fonts.normal_heading};
        font-weight: 500;
        margin-bottom: 2rem;
      }
    }

    .service-section {
      display: flex;
      justify-content: space-between;
      gap: 9rem;
    }

    p {
      font-size: ${({ theme }) => theme.fonts.normal_para};
    }

    .service {
      background-color: ${({ theme }) => theme.colors.header_bg};
      min-height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      border-radius: 1rem;
      flex-direction: column;
      gap: 1rem;
      flex-basis: 33%;
      box-shadow: ${({ theme }) => theme.colors.box_shadow};
    }

    .service-icon {
      font-size: 2.3rem;
      color: #5e55e1;
    }
    .service2 {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      background: transparent;
      box-shadow: none;
    }

    .service2 div {
      background-color: ${({ theme }) => theme.colors.header_bg};
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      gap: 2rem;
      /* border: 1px solid red; */
      /* height: 50%; */
      flex-basis: 50%;
      box-shadow: ${({ theme }) => theme.colors.box_shadow};
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .service-section {
        display: flex;
        gap: 2rem;
        /* width: 100%; */
        flex-direction: column;
      }

      .service {
        min-height: 14rem;
      }

      .service2 {
        /* border: 1px solid red; */
        gap: 1rem;
      }

      .service2 div {
        flex-direction: row;
        flex-basis: 50%;
        height: 50%;
      }
    }
  `;

  return (
    <Wrapper className="wrapper">
      <div className="container">
        {/* <h1>Services</h1> */}
        <div className="service-section">
          <div className="service service1">
            <TbTruckDelivery className="service-icon" />
            <p>Super Fast and Free Delivery</p>
          </div>
          <div className="service service2">
            <div>
              <MdSecurity className="service-icon" />
              <p>Secure Contact Shipping</p>
            </div>
            <div>
              <GiReceiveMoney className="service-icon" />
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className="service service3">
            <RiSecurePaymentLine className="service-icon" />
            <p>Super Secure Payment System</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Service;
