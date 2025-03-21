import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState<string>("");

  const obtenerSaludo = async () => {
    try {
      const respuesta = await fetch("https://facturacion-shaddai-back.onrender.com/niah");
      const data = await respuesta.json();
      setMensaje(data.mensaje);
    } catch (error) {
      console.error("Error al conectar con el backend", error);
    }
  };

  return (
    <>
      <button onClick={obtenerSaludo}>Obtener Saludo</button>
      <p>{mensaje}</p>
    </>
  );
}

export default App;
