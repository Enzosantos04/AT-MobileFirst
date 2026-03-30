import { useState } from "react";
import Exercicio1 from "./exercicios/ex1.jsx";
import Exercicio2 from "./exercicios/ex2.jsx";
import Exercicio3 from "./exercicios/ex3.jsx";
import Exercicio4 from "./exercicios/ex4.jsx";
import Exercicio5 from "./exercicios/ex5.jsx";
import Exercicio6 from "./exercicios/ex6.jsx";

export default function App() {
  const [ex, setEx] = useState(0);

  return (
    <div>
      <button onClick={() => setEx(1)}>Exercício 01</button>
      <button onClick={() => setEx(2)}>Exercício 02</button>
      <button onClick={() => setEx(3)}>Exercício 03</button>
      <button onClick={() => setEx(4)}>Exercício 04</button>
      <button onClick={() => setEx(5)}>Exercício 05</button>
      <button onClick={() => setEx(6)}>Exercício 06</button>
      {ex === 1 && <Exercicio1 />}
      {ex === 2 && <Exercicio2 />}
      {ex === 3 && <Exercicio3 />}
      {ex === 4 && <Exercicio4 />}
      {ex === 5 && <Exercicio5 />}
      {ex === 6 && <Exercicio6 />}
    </div>
  );
}
