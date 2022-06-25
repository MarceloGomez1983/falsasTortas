import Formulario from "../Formulario/Formulario";
import Titulo from "../Titulo/Titulo";

function ComponenteContenedor() {
  let titulo = "Falsas Tortas";
  let subtitulo = "Lista de Precios";
  let saludo = "Bienvenidos...";

  return (
    <div>
      <Titulo titulo={titulo} subtitulo={subtitulo} saludo={saludo} />
      {/* <Formulario /> */}
    </div>
  );
}

export default ComponenteContenedor;
