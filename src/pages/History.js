import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HistoryItem from "../components/History/HistoryItem";
import { useGetAllLists } from "../hooks/useShopList";
import { months } from "./../utilities/months";
import { motion } from "framer-motion";

const History = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useGetAllLists();
  const viewShopList = (id) => {
    navigate("/history/shopList/" + id);
  };
  return (
    <>
      <HistoryContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, transition: { type: "tween", duration: 0.2 } }}
      >
        <Text fontSize="26px" fontWeight="700" margin="20px 0px">
          <Span>Shopping history</Span>
        </Text>
        {data?.data.map((month) => (
          <>
            <Text>{months[month._id.month] + " " + month._id.year}</Text>

            {month.shopLists.map((shopList) => (
              <HistoryItem {...shopList} viewShopList={viewShopList} />
            ))}
          </>
        ))}
      </HistoryContainer>
      <Outlet />
    </>
  );
};

const HistoryContainer = styled(motion.section)`
  grid-area: content;
  height: 100vh;
  padding: clamp(12.45px, 5.4px + 2.19vw, 37px);
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Span = styled.span`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
`;

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  max-width: 450px;
`;

export default History;
