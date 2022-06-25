import NavBar from "./components/NavBar/NavBar";
import ComponenteContenedor from "./components/container/ComponenteContenedor";

import logo from "./logoFalsasTortas.png";
import "./App.css";

function App() {
  //Sugar Syntax + operadores ternarios
  const condition = true;
  console.log(`El resultado es: ${condition ? "correcto" : "incorrecto"}`);

  //Spread operator
  const numArray = [1, 2, 3];
  let numAgregado = 4;
  const numArray2 = [...numArray, numAgregado];
  console.log(numArray2);

  //Propiedades dinámicas
  let campo = "edad";
  const objeto = {
    nombre: "Leandro",
    apellido: "Trosinni",
    [campo]: "40",
  };
  console.log(objeto);

  //Deep matching (desestructuración)
  const { nombre: name, altura = 1.75 } = objeto; //esto renombra la constante si se quiere y tambien crea la constante "altura"
  console.log(` nombre: ${name} \n altura: ${altura}`);

  const objStyle = {
    color: "green",
    backgroundColor: "yellow",
    fontSize: 30,
    paddingTop: 2,
  };

  return (
    <div className="App" style={objStyle}>
      <img src={logo} />

      <NavBar>
        <ComponenteContenedor />
      </NavBar>
    </div>
  );
}

export default App;
