import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const url = "assets/Productos.json";

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.table(data))
    .catch((err) => console.log(err));

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Falsas Tortas"} />
    </div>
  );
}

export default App;
