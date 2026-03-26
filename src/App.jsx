import { useState } from "react";
import Exercicio1 from "./exercicios/ex1.jsx";
import Exercicio2 from "./exercicios/ex2.jsx";
import Exercicio3 from "./exercicios/ex3.jsx";

export default function App() {
  const [ex, setEx] = useState(0);

  return (
    <div>
      <button onClick={() => setEx(1)}>Exercício 01</button>
      <button onClick={() => setEx(2)}>Exercício 02</button>
      <button onClick={() => setEx(3)}>Exercício 03</button>
      {ex === 1 && <Exercicio1 />}
      {ex === 2 && <Exercicio2 />}
      {ex === 3 && <Exercicio3 />}
    </div>
  );
}
