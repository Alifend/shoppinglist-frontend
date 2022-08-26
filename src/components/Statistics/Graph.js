import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import styled from "styled-components";
import { months } from "../../utilities/months";

const Graph = ({ data }) => {
  const monthsData = data?.map((element) => ({
    name: months[element._id.month],
    quantity: element.total,
  }));
  return (
    <GraphContainer>
      <ResponsiveContainer width="99%" height="100%" aspect={3}>
        <LineChart
          width={600}
          height={300}
          data={monthsData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="natural" dataKey="quantity" stroke="orange" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

const GraphContainer = styled.section`
  grid-area: graph;
  width: 100%;
  height: 100%;
`;
export default Graph;
