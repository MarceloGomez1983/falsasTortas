import { useEffect } from "react";
import { useState } from "react";
import getFetch from "../../helpers/getFetch";

import Formulario from "../Formulario/Formulario";
import Titulo from "../Titulo/Titulo";

function ComponenteContenedor() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleBool = () => {
    setLoading(!loading);
  };

  console.log(products);

  const [count, setCount] = useState(0);

  let titulo = "Falsas Tortas";
  let subtitulo = "Lista de Precios";
  let saludo = "Bienvenidos...";

  const aumentar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Titulo titulo={titulo} subtitulo={subtitulo} saludo={saludo}>
        <input type="text" />
      </Titulo>

      {count}
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={handleBool}>Cambiar estado</button>

      <Formulario />

      {loading ? (
        <h2>Cargando ...</h2>
      ) : (
        products.map((prod) => <li key={prod.id}>{prod.cod}</li>)
      )}
    </div>
  );
}

export default ComponenteContenedor;
