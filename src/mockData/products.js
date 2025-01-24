const products = [
  {
    id: 1,
    name: "Apples",
    price: 2.5,
    description: "Fresh and juicy apples.",
    image: "/images/apples.jpg",
    category: "Fruits",
    quantityInStock: 100,
    unit: "kg", // Optional for weight-based pricing
  },
  {
    id: 2,
    name: "Bananas",
    price: 1.2,
    description: "Sweet and ripe bananas.",
    image: "/images/bananas.jpg",
    category: "Fruits",
    quantityInStock: 200,
    unit: "kg",
  },
  {
    id: 3,
    name: "Milk",
    price: 1.5,
    description: "Fresh dairy milk.",
    image: "/images/milk.jpg",
    category: "Dairy",
    quantityInStock: 50,
  },
  {
    id: 4,
    name: "Bread",
    price: 2.0,
    description: "Soft and freshly baked bread.",
    image: "/images/bread.jpg",
    category: "Bakery",
    quantityInStock: 30,
  },
];

export default products;
