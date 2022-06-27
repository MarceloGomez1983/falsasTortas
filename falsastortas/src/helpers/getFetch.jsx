let productos = [
  { id: "1", cod: "1010", categoria: "falsas tortas", name: "10cm x 10xm" },
  { id: "2", cod: "1015", categoria: "falsas tortas", name: "10cm x 15xm" },
  { id: "3", cod: "2010", categoria: "falsas tortas", name: "20cm x 10xm" },
  { id: "4", cod: "2015", categoria: "falsas tortas", name: "20cm x 15xm" },
];

const getFetch = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  } else {
    reject("400 not found");
  }
});

export default getFetch;
