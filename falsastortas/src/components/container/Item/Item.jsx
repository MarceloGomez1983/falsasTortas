import React from "react";

const Item = ({prod}) => {
  return( 
    <div key={prod.id} className="col-md-4 p-1">
      <div className="card w-100 mt-5">
        <div className="card-header">
          {`cod: ${prod.cod} item: ${prod.categoria} ${prod.name}`}
        </div>

        <div className="card-body">
          <img src={require("../../../images/" + prod.foto + ".png")} />
        </div>

        <div className="card-footer">
          <button className="btn btn-outline-primary btn-block">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
};

export default Item;