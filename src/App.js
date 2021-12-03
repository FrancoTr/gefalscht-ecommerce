import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/items/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer name="Franco" />
    </>
  );
}

export default App;
