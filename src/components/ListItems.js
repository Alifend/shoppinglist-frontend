import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ListItems = ({ categoryName, items, addItemToCart, setShowCart }) => {
  const navigate = useNavigate();
  return (
    <List>
      <h5 className="title">{categoryName}</h5>
      <div className="categoryContainer">
        {items.map((item) => (
          <div className="item clickeable" key={item._id}>
            <p
              onClick={() => {
                navigate("/view/" + item._id);
                setShowCart(true);
              }}
            >
              {" "}
              {item.name}
            </p>
            <FaPlus onClick={() => addItemToCart(item)} color="#c1c1c4" />
          </div>
        ))}
      </div>
    </List>
  );
};

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 38px;
  .title {
    font-size: 18px;
    line-height: 22px;
  }
  .clickeable {
    cursor: pointer;
  }
  .categoryContainer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
    width: 100%;
    gap: 1.125em;
  }
  .item {
    /* width: clamp(140px, 3.75vw + 128px, 182px); */
    width: clamp(110px, 6.42vw + 89.4px, 182px);
    height: 50px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    background-color: white;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
  }
`;
export default ListItems;
