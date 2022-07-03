import React from "react";
import { useState, useEffect } from "react";
import { gFetch } from "../../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div>{greeting}</div>
      
      {loading ? 
        <h2>Cargando ...</h2>
       : 
        <ItemList products={products}/>
      }
    </div>
  );
};

export default ItemListContainer;
