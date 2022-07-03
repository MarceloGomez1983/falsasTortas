let products = [
  {
    id: "1",
    cod: "1010",
    categoria: "falsas tortas",
    name: "10cm x 10xm",
    foto: "../../src/images/pisofalsoredondo.png",
    stock: "0",
  },
  {
    id: "2",
    cod: "1015",
    categoria: "falsas tortas",
    name: "10cm x 15xm",
    foto: "../../src/images/pisofalsoredondo.png",
    stock: "0",
  },
  {
    id: "3",
    cod: "2010",
    categoria: "falsas tortas",
    name: "20cm x 10xm",
    foto: "../../src/images/pisofalsoredondo.png",
    stock: "0",
  },
  {
    id: "4",
    cod: "2015",
    name: "20cm x 15xm",
    foto: "../../src/images/pisofalsoredondo.png",
    stock: "0",
  },
];

export const gFetch = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  } else {
    reject("400 not found");
  }
});

