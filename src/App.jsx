import { useState } from "react";


export function App() {
  const [numero, setNumero] = useState(100);
  const [mostrarEsconder, setMostrarEsconder] = useState(true);


  function handleAumentar() {
    setNumero(numero + 100);
  }

  function handeMostrarEsconder () {
   // if (mostrarEsconder === true) {
   //   setMostrarEsconder(false)
   //   return
   // }
      
   //   setMostrarEsconder(true)

   //   mostrarEsconder === true ? setMostrarEsconder(false) : setMostrarEsconder(true)

      setMostrarEsconder(!mostrarEsconder)
    }

return (
    <main>
      <h1>Exercício useState</h1>

      <section>
        <h2>Número: {numero}</h2>
        <button onClick={handleAumentar}>Aumentar 100</button>
      </section>

      <section>
        <h2>O parágrafo que some</h2>
        {mostrarEsconder ? <p>Em breve irei sumir</p> : ""}
        <button onClick={handeMostrarEsconder}>{mostrarEsconder ? "Esconder" : "Mostrar"}</button>
      </section>
    </main>
  );
}


export default App;