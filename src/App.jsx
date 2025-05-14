import { useState } from "react";

export function App() {

  const [numero, setNumero] = useState(100);

  function handleAumentar() {
    setNumero(numero + 100);
  }

  return (
    <main>
      <h1>useState - Atividade</h1>

      <section>
        <h2>Número: {numero}</h2>
        <button onClick={handleAumentar}>Aumentar</button>
      </section>
    </main>
  ) 
}