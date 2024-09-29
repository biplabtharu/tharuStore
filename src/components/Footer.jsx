import styled from "styled-components";
import { Button } from "./Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const Wrapper = styled.section`
    /* margin-top: auto; */
    position: absolute;
    /* right: 0; */
    width: 100%;
    /* height: 100%; */
    bottom: -35rem;
    left: 0;

    .container {
      background: #02022c;
      color: #fff;
      width: 100%;
      position: relative;
    }

    .footer-overlay {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 100rem;
      margin: auto;
      background: ${({ theme }) => theme.colors.header_bg};
      color: #000;

      /* border: 1px solid red; */
      border-radius: 1rem;

      min-height: 10rem;
      padding: 0 8rem;

      position: absolute;
      top: -5rem;
      left: 45rem;
      /* right: 50%; */

      .overlay-text {
        font-size: 1.4rem;
      }

      .overlay-btn {
        .btn {
          margin-top: 0;
        }
      }
    }
    .footer-main-text {
      padding-top: 10rem;
      display: flex;
      max-width: 100rem;
      margin: auto;
      display: flex;
      gap: 3rem;

      div {
        flex-basis: 25%;
      }

      div h3 {
        font-size: ${({ theme }) => theme.fonts.normal_para};
        margin-bottom: 1rem;
        font-weight: 500;
      }
      div p {
        font-size: ${({ theme }) => theme.fonts.small_para};
        margin-bottom: 1rem;
        color: #e1e1e1;
      }

      div form input {
        padding: 0.8rem 1rem;
        border: none;
        outline: none;
        margin-bottom: 1rem;
      }

      div form input[type="submit"] {
        cursor: pointer;
        border-radius: 0.5rem;

        &:hover {
          color: #5e55e1;
        }
      }

      .social_media_icons {
        font-size: 28px;
        cursor: pointer;

        &:hover {
          color: #5e55e1;
        }
      }

      .social_media_links {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .social_icons {
        display: flex;
        gap: 1rem;
      }
    }
  `;
  return (
    <Wrapper className="wrapper" style={{ marginTop: "auto" }}>
      <div className="container">
        <div className="footer-overlay">
          <div className="overlay-text">
            <p>Ready to get started?</p>
            <p>Talk to us today</p>
          </div>

          <div className="overlay-btn">
            <Button className="btn">Get Started</Button>
          </div>
        </div>

        <div className="footer-main-text">
          <div>
            <h3>CG Local Store</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, recusandae.
            </p>
          </div>

          <div>
            <h3>Subscribe to get important updates</h3>
            <form action="">
              <input type="email" placeholder="your email" />
              <input type="submit" value="subscribe" />
            </form>
          </div>

          <div className="social_media_links">
            <h3>Follow us</h3>
            <div className="social_icons">
              <FacebookIcon className="social_media_icons" />
              <InstagramIcon className="social_media_icons" />
              <TwitterIcon className="social_media_icons" />
            </div>
          </div>

          <div>
            <h3>Call us</h3>
            <p>9837737373, 9832939292</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
