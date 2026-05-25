function processProducts(products) {
  const inStockItems = products.filter(p => p.inStock === true);

  const available = inStockItems.map(p => p.name);

  const totalPrice = inStockItems.reduce((acc, p) => acc + p.price, 0);

  const cheapest = inStockItems.reduce(
    (min, p) => (p.price < min.price ? p : min),
    inStockItems[0]
  )?.name;

  const priceList = products.map(p => `${p.name} — ${p.price} грн`);

  return { available, totalPrice, cheapest, priceList };
}

// Тести
const products = [
  { name: "Чай",   price: 50,  inStock: true  },
  { name: "Кава",  price: 120, inStock: false },
  { name: "Цукор", price: 30,  inStock: true  },
];

console.log(processProducts(products));
console.log(processProducts([{ name: "Кава", price: 120, inStock: false }]));