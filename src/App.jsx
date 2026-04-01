import { useState } from "react";
import Exercicio1 from "./exercicios/ex1.jsx";
import Exercicio2 from "./exercicios/ex2.jsx";
import Exercicio3 from "./exercicios/ex3.jsx";
import Exercicio4 from "./exercicios/ex4.jsx";
import Exercicio5 from "./exercicios/ex5.jsx";
import Exercicio6 from "./exercicios/ex6.jsx";
import Exercicio7 from "./exercicios/ex7.jsx";
import Exercicio8 from "./exercicios/ex8.jsx";
import Exercicio9 from "./exercicios/ex9.jsx";
import Exercicio10 from "./exercicios/ex10.jsx";
import Exercicio11 from "./exercicios/ex11.jsx";
import Exercicio12 from "./exercicios/ex12.jsx";

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
      <button onClick={() => setEx(7)}>Exercício 07</button>
      <button onClick={() => setEx(8)}>Exercício 08</button>
      <button onClick={() => setEx(9)}>Exercício 09</button>
      <button onClick={() => setEx(10)}>Exercício 10</button>
      <button onClick={() => setEx(11)}>Exercício 11</button>
      <button onClick={() => setEx(12)}>Exercício 12</button>

      {ex === 1 && <Exercicio1 />}
      {ex === 2 && <Exercicio2 />}
      {ex === 3 && <Exercicio3 />}
      {ex === 4 && <Exercicio4 />}
      {ex === 5 && <Exercicio5 />}
      {ex === 6 && <Exercicio6 />}
      {ex === 7 && <Exercicio7 />}
      {ex === 8 && <Exercicio8 />}
      {ex === 9 && <Exercicio9 />}
      {ex === 10 && <Exercicio10 />}
      {ex === 11 && <Exercicio11 />}
      {ex === 12 && <Exercicio12 />}
    </div>
  );
}
