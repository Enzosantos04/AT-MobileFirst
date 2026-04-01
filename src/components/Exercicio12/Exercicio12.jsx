import CartList from "./CartList";

const products = [
  {
    id: 1,
    name: "Teclado Mecanico",
    category: "Perifericos",
    price: 300.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mouse Sem Fio",
    category: "Perifericos",
    price: 150.0,
    quantity: 2,
  },
  {
    id: 3,
    name: "Headset Gamer",
    category: "Audio",
    price: 200.0,
    quantity: 1,
  },
  {
    id: 4,
    name: "Macbook Pro",
    category: "Computadores",
    price: 1200.0,
    quantity: 1,
  },
  {
    id: 5,
    name: "Iphone 13",
    category: "Celulares",
    price: 600.0,
    quantity: 1,
  },
  {
    id: 6,
    name: "Cadeira Gamer",
    category: "Móveis",
    price: 300.0,
    quantity: 1,
  },
  {
    id: 7,
    name: "Monitor 24 polegadas",
    category: "Perifericos",
    price: 1200.0,
    quantity: 1,
  },
  {
    id: 8,
    name: "Airpods Pro",
    category: "Audio",
    price: 200.0,
    quantity: 1,
  },
];
export default function Exercicio6() {
  return (
    <div>
      <CartList items={products} />
    </div>
  );
}
