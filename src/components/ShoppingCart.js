import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Source } from "./../assets/source.svg";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EmptyCart } from "./../assets/emptyCart.svg";
import { MdMode } from "react-icons/md";
import { emptyCart } from "../store/ItemSlice";
const ShoppingCart = ({ show }) => {
  const items = useSelector((state) => state.items);
  const [categories, setCategories] = useState([]);
  const [editableMode, setEditableMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (items) {
      setCategories([...new Set(items.map((element) => element.category))]);
    }
  }, [items]);
  const dispatch = useDispatch();
  const deleteAllItems = () => {
    dispatch(emptyCart());
  };
  return (
    <ShoppingCartStyled show={show}>
      <Wrapper>
        <Content>
          <Figure>
            <Section>
              <Source className="wineIcon" />
              <TitleContainer>
                <Text fontWeight="700" color="white" fontSize="16px">
                  Didn't find <br />
                  what you need?
                </Text>
                <Button onClick={() => navigate("/add")}> Add Item </Button>
              </TitleContainer>
            </Section>
          </Figure>
          <Text
            fontWeight="700"
            color="#34333a"
            fontSize="24px"
            margin="30px 0px"
          >
            Shopping list
            <MdMode onClick={() => setEditableMode(!editableMode)} />
          </Text>
          {categories?.map((category, index) => (
            <React.Fragment key={index}>
              <Text color="#828282" fontSize="14px" margin="30px 0px 10px 0px">
                {category}
              </Text>
              {items
                ?.filter((item) => item.category == category)
                .map((item) => (
                  <Item
                    editableMode={editableMode}
                    key={item._id}
                    dispatch={dispatch}
                    {...item}
                  />
                ))}
            </React.Fragment>
          ))}

          {items.length == 0 && (
            <>
              <Text fontWeight="700" fontSize="20px">
                No items
              </Text>
              <EmptyCart />
            </>
          )}
        </Content>
      </Wrapper>
      <Options>
        <CompleteField>
          <Input placeholder="Enter a name"></Input>
          {/* */}
          <Button backgroundColor={"#F9A109"} color="white">
            Complete
          </Button>
        </CompleteField>
        {/* <Button onClick={deleteAllItems}>cancel</Button>
         */}
      </Options>
    </ShoppingCartStyled>
  );
};

const CompleteField = styled.div`
  width: 309.89px;
  height: 61.25px;
  border: 2px solid #bdbdbd;
  border-radius: 12px;
  padding-left: 17px;
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: ${(props) => (props.height ? props.height : "61.25px")}; */
  background-color: inherit;
`;

const Input = styled.input`
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    outline: none !important;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 100%;
  height: 85%;
`;
const Options = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Content = styled.section`
  height: 100%;
  width: clamp(250px, 233.4px + 4.1vw, 308px);
  position: relative;
`;
const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  margin: ${(props) => (props.margin ? props.margin : "0px")}; ; ;
`;

const Button = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};
  color: ${(props) => (props.backgroundColor ? props.color : "#34333a")};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 20px 23px;
  border: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
`;

const TitleContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  width: 300px;
`;
const Figure = styled.figure`
  background: #80485b;
  height: 120px;
  width: 100%;
  /* width: clamp(250px, 233.4px + 4.1vw, 308px); */
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 13px;
  margin: 35px 0px;
`;
const ShoppingCartStyled = styled.aside`
  height: 100%;
  width: calc(100% - 52px);
  /* padding: 16.29px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  /* overflow-y: scroll */
  /* width: clamp(320px, 11.69vw + 220.57px, calc(100vw - 42px)); */
  background: #fff0de;
  position: fixed;
  left: ${(props) => (props.show ? "52px" : "-100%")};
  transition: left 0.4s ease;
  @media only screen and (min-width: 800px) {
    width: 450px;
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
`;

export default ShoppingCart;
