import React from "react";

const ItemList = ({ products }) => {
  return products.map((prod) => (
    <div key={prod.id} className="col-md-4 p-1">
      <div className="card w-100 mt-5">
        <div className="card-header">
          {`cod: ${prod.cod} item: ${prod.categoria} ${prod.name}`}
        </div>

        <div className="card-body">
          <img src={prod.foto} alt="" className="w-50" />
        </div>

        <div className="card-footer">
          <button className="btn btn-outline-primary btn-block">
            Detalle del producto
          </button>
        </div>
      </div>
    </div>
  ));
};

export default ItemList;
