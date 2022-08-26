import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import History from "./pages/History";
import Statistics from "./pages/Statistics";
import Shoppingify from "./pages/Shoppingify";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/SideContent/Cart/ShoppingCart";
import { useState } from "react";
import ViewItem from "./components/SideContent/ViewItem/ViewItem";
import ShopList from "./components/History/ShopList";
import AddItem from "./components/SideContent/AddItem/AddItem";
function App() {
  const [show, setShowCart] = useState(false);

  return (
    <Container className="App">
      <Navbar setShowCart={setShowCart} />
      <Routes>
        <Route path="/" element={<Shoppingify setShowCart={setShowCart} />}>
          <Route path="" element={<ShoppingCart show={show} />} />
          <Route path="/add" element={<AddItem show={show} />} />
          <Route path="/view/:itemId" element={<ViewItem show={show} />} />
        </Route>
        <Route path="/history" element={<History />}>
          <Route path="" element={<ShoppingCart show={show} />} />
          <Route path="/history/add" element={<AddItem show={show} />} />
          <Route
            path="/history/view/:itemId"
            element={<ViewItem show={show} />}
          />
        </Route>
        <Route path="/history/shopList/:id" element={<ShopList />}>
          <Route path="" element={<ShoppingCart show={show} />} />
          <Route
            path="/history/shopList/:id/add"
            element={<AddItem show={show} />}
          />
        </Route>
        <Route path="/statistics" element={<Statistics />}>
          <Route path="" element={<ShoppingCart show={show} />} />
          <Route path="/statistics/add" element={<AddItem show={show} />} />
          <Route
            path="/statistics/view/:itemId"
            element={<ViewItem show={show} />}
          />
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 42px auto;
  grid-template-rows: 100vh 100%;
  background-color: ghostwhite;
  grid-template-areas:
    "nav content"
    "nav content";
  @media only screen and (min-width: 800px) {
    grid-template-columns: 82px auto 389px;
    grid-template-areas:
      "nav content side"
      "nav content side";
  }
`;

export default App;
