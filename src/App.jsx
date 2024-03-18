import Header from "./Components/Header/Header";
import "./index.scss";
import "macro-css";
import Main from "./Pages/Main.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Main />
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
