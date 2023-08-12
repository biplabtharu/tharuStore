import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
// import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Navbar = styled.nav`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .navbar-lists {
        display: flex;
        gap: 4rem;
        color: #000;
        align-items: center;

        .navbar-list a {
          font-size: 1.6rem;
          color: #000;
          text-transform: uppercase;
        }

        .cart {
          position: relative;

          .cart-trolley {
            font-size: 1.8rem;
            align-content: center;
          }
          .cart-total--item {
            background-color: #8fd4eb;
            position: absolute;
            top: -50%;
            border-radius: 50%;
            padding: .6rem;
            font-size: 1.2rem;
            font-weight: 600;
            color: #000;
          }
        }
        .mobile-navbar-btn {
          display: none;
          cursor: pointer;
          border: none;

          .close-icon {
            display: none;
          }

          .mobile-nav-icon[name="close-icon"] {
            display: none;
          }
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .navbar {
        .navbar-lists {
          height: 100vh;
          width: 100vw;
          position: absolute;
          top: 0;
          left: 0;
          /* display: flex; */
          flex-direction: column;
          /* border: 1px solid red; */
          padding-top: 20rem;
          transform: translateX(-100%);
          visibility: hidden;
          opacity: 0;
          /* transition: all 3s linear; */
          background-color: ${({ theme }) => theme.colors.mobile_bg};
          color: #fff;
          z-index: 999;

          .navbar-list a {
            font-size: 2rem;
          }
        }
      }

      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;

        .mobile-nav-icon {
          font-size: 3rem;
          color: #000;
        }

        .close-icon {
          display: none;
        }
        .menu-icon {
          display: inline-block;
        }
      }

      .active .navbar-lists {
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
        color: #000;
        /* transition: all 3s linear; */
      }

      .active .close-icon {
        display: inline-block;
      }

      .active .menu-icon {
        display: none;
      }
    }
  `;

  return (
    <Navbar>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li className="navbar-list">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="navbar-list">
            <NavLink to="/about">About</NavLink>
          </li>

          <li className="navbar-list">
            <NavLink to="/products">Product</NavLink>
          </li>

          <li className="navbar-list">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li className="navbar-list cart">
            <NavLink to="/cart">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">10</span>
              {/* <Badge badgeContent={10} color="secondary">
                <ShoppingCartIcon color="black" />
              </Badge> */}
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-icon"
            className="mobile-nav-icon menu-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-icon"
            className="mobile-nav-icon close-icon"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar;
