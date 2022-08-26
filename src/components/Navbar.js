import React, { useState } from "react";
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
  const [position, setPosition] = useState(1);
  const handleClick = (route, position) => {
    navigate(route);
    setPosition(position);
  };
  return (
    <Nav>
      <Logo />
      <Menu>
        <Line position={position} />
        <IconContainer onClick={() => handleClick("/", 1)}>
          <FaBars size={20} />
        </IconContainer>
        <IconContainer onClick={() => handleClick("/history", 2)}>
          <FaArrowRight size={20} />
        </IconContainer>
        <IconContainer onClick={() => handleClick("/statistics", 3)}>
          <FaChartLine size={20} />
        </IconContainer>
      </Menu>
      <Circle onClick={() => setShowCart((current) => !current)}>
        <FaCartArrowDown color="white" size={20} />
      </Circle>
    </Nav>
  );
};

const Circle = styled.div`
  display: grid;
  place-content: center;
  width: 42px;
  height: 42px;
  background: var(--color-primary);
  border-radius: 50%;
  z-index: 10;
`;
const Line = styled.div`
  position: absolute;
  left: 0px;
  top: ${(props) =>
    props.position == 1
      ? "0px"
      : props.position == 2
      ? "calc(60% - 45px)"
      : "calc(100% - 45px)"};
  transition: top 0.3s ease;
  width: 6px;
  height: 45px;
  background: var(--color-primary);
  border-radius: 0px 4px 4px 0px;
`;
const IconContainer = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  place-content: center;
  cursor: pointer;
`;
const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  position: fixed;
  height: 100vh;
  width: 42px;
  padding-block: 26px;
  z-index: 1;
  @media only screen and (min-width: 800px) {
    width: 80px;
  }
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const Menu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  position: relative;
`;
export default Navbar;
