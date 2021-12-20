import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}

export default App;
