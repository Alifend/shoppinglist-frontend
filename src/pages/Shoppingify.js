import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListItems from "../components/ListItems";
import Loading from "../components/Loading";
import { BsSearch } from "react-icons/bs";
import ItemServices from "../services/ItemServices";
import { addItem } from "../store/ItemSlice";

const Shoppingify = ({ setShowCart }) => {
  const [categories, setCategories] = useState([]);
  const { isLoading, error, data } = useQuery(["items"], () =>
    ItemServices.getItems()
  );
  const [filterName, setFilterName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const filterItems = (name) => {
    setFilterName(name);
  };

  useEffect(() => {
    if (!isLoading) {
      setCategories([...new Set(data.data.map((element) => element.category))]);
    }
  }, [isLoading]);

  return (
    <>
      <ShoppingContainer>
        <Box>
          <Text fontSize="26px" fontWeight="700" margin="20px 0px">
            <Span>Shoppingify</Span> allows you take your shopping list wherever
            you go
          </Text>
          <SearchBar>
            <BsSearch />
            <Input
              placeholder="Search Item"
              onChange={(e) => filterItems(e.target.value)}
            />
          </SearchBar>
        </Box>
        {isLoading && <Loading />}
        {categories?.map((category, index) => (
          <ListItems
            key={index}
            categoryName={category}
            setShowCart={setShowCart}
            items={data.data.filter(
              (item) =>
                item.category == category &&
                item.name.toLowerCase().includes(filterName.toLowerCase())
            )}
            addItemToCart={addItemToCart}
          />
        ))}
        {/* {!isLoading && data.map((list) => <ListItems {...list} />)} */}
      </ShoppingContainer>
      <Outlet />
    </>
  );
};

const Box = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between;
} */
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const SearchBar = styled.article`
  max-width: 275px;
  height: 50px;
  border-radius: 12px;
  background-color: white;
  min-height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (min-width: 1200px) {
    max-width: 400px;
    flex: 1;
  }
`;

const Input = styled.input`
  border: none;
  width: 80%;
  :focus {
    outline: none;
  }
`;
const Span = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: #f9a109;
`;
const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  max-width: 450px;
`;
const ShoppingContainer = styled.section`
  grid-area: content;
  /* width: min(450px, 100%); */
  padding: clamp(12.45px, 5.4px + 2.19vw, 37px);
  /* padding: 37px;
  padding: 12.45px; */
`;

export default Shoppingify;
