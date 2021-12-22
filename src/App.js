import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </BrowserRouter>
  );
}

export default App;
