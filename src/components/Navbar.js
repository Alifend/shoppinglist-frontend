import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./../assets/logo.svg";
import {
  FaBars,
  FaArrowRight,
  FaChartLine,
  FaCartArrowDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setShowCart }) => {
  const navigate = useNavigate();
  return (
    <Nav>
      <Logo />
      <Menu>
        <FaBars
          onClick={() => navigate("/")}
          className="clickeable"
          size={20}
        />
        <FaArrowRight
          onClick={() => navigate("/history")}
          className="clickeable"
          size={20}
        />
        <FaChartLine
          onClick={() => navigate("/statistics")}
          className="clickeable"
          size={20}
        />
      </Menu>
      <div
        onClick={() => setShowCart((current) => !current)}
        className="circle"
      >
        <FaCartArrowDown color="white" size={20} />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  position: fixed;
  height: 100%;
  padding: 30px 26px;
  @media only screen and (min-width: 800px) {
    width: 80px;
  }
  .clickeable {
    cursor: pointer;
  }
  width: 42px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  .circle {
    display: grid;
    place-content: center;
    width: 42px;
    height: 42px;
    background: #f9a109;
    border-radius: 50%;
    z-index: 10;
  }
`;

const Menu = styled.section`
  display: flex;
  flex-direction: column;
  gap: 75.5px;
`;
export default Navbar;
