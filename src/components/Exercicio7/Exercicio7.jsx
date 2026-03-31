import Card from "./Card";

export default function Exercicio7() {
  const tarefas = [
    { id: 1, name: "Tarefa 1", done: true },
    { id: 2, name: "Tarefa 2", done: false },
    { id: 3, name: "Tarefa 3", done: false },
  ];
  return (
    <div>
      <Card tarefas={tarefas} />
    </div>
  );
}
