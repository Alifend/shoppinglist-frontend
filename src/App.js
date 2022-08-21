import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import History from "./pages/History";
import Statistics from "./pages/Statistics";
import Shoppingify from "./pages/Shoppingify";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import ViewItem from "./components/ViewItem";
function App() {
  const [show, setShowCart] = useState(false);

  return (
    <Container className="App">
      <Navbar setShowCart={setShowCart} />
      <Routes>
        <Route path="/" element={<Shoppingify setShowCart={setShowCart} />}>
          <Route path="" element={<ShoppingCart show={show} />} />
          <Route path="/add" element={<AddItemForm show={show} />} />
          <Route path="/view/:itemId" element={<ViewItem show={show} />} />
        </Route>
        {/* </Route> */}
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      {/* <Routes> */}
      {/* <Route path="/satic/herramientas" component={Second} /> */}
      {/* <ShoppingCart show={showCart} /> */}
      {/* </Routes> */}
    </Container>
  );
}

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 42px auto;
  grid-template-rows: 100%;
  background-color: ghostwhite;
  grid-template-areas:
    "nav content"
    "nav content";
  @media only screen and (min-width: 800px) {
    grid-template-columns: 82px auto minmax(450px, 35%);
    grid-template-areas:
      "nav content side"
      "nav content side";
  }
`;

export default App;
