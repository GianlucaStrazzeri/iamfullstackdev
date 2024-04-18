import  { useState } from 'react';//importo los estados de react


const input =()=>{
    const [inputValue, setInputValue] = useState('');//el valor inicial de input es ""
    const handleChange = (e) => {
        setInputValue(e.target.value);
//como react actualiza de forma automatica el envio del input, manejo el cambio seleccionando el evento
// imposto el valor del input targetizzando el valor del input
const urlApi=("http://localhost:3000")
fetch(urlApi, {
  method: 'POST', // Método HTTP
  headers: {
    'Content-Type': 'application/json', // Indicamos que el contenido es JSON
  },
  body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
})


      };
    return (
<>
<div className="Input">
      <h1>Input Task</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a Task"
      />
      <p>El valor del input es: {inputValue}</p>
    </div>
        
    <button type="submit">Enviar</button>
</>
    )
}

export default input;





 
