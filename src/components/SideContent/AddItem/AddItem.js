import React from "react";
import styled from "styled-components";
import Form from "./Form";

const AddItemForm = ({ show }) => {
  return (
    <ShoppingCartStyled show={show}>
      <Content>
        <Text fontSize="24px" color="#F9A109">
          Add a new Item
        </Text>
        <Form />
      </Content>
    </ShoppingCartStyled>
  );
};

const Content = styled.section`
  height: 100%;
  width: clamp(250px, 233.4px + 4.1vw, 308px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const Text = styled.label`
  position: relative;
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : "var(--font-size-md)"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  width: 100%;
  &:focus-within {
    color: var(--color-primary) !important;
  }
`;

const ShoppingCartStyled = styled.aside`
  height: 100%;
  width: calc(100% - 52px);
  padding: 16.29px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;

  /* width: clamp(320px, 11.69vw + 220.57px, calc(100vw - 42px)); */
  background: white;
  position: fixed;
  left: ${(props) => (props.show ? "52px" : "-100%")};
  transition: left 0.4s ease;
  @media only screen and (min-width: 800px) {
    width: 389px;
    right: 0px;
    left: auto;
    grid-area: side;
    position: fixed;
  }

  .wineIcon {
    position: absolute;
    left: -0px;
    top: -29px;
    height: 120px;
  }
  .categories::selection {
  }
`;

export default AddItemForm;
