import styled from "styled-components";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Header = styled.header`
    height: 8rem;
    padding: 2rem 5%;
    background-color: ${({theme})=>theme.colors.header_bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .logo a {
      color: #000;
      font-size: 3rem;
    }
  `;
  return (
    <Header>
        <div className="logo">
          <NavLink to="/" alt="my logo img">
            Tharu Store
          </NavLink>
        </div>
        <Navbar />
    </Header>
  );
};

export default Header;
