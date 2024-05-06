import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx'
import PatientDetail from "./PatientDetail.jsx";
import InputCreate from "./InputCreate.jsx";

const App = () => {
  const [data, setData] = useState(null)
  const urlApi = "http://localhost:3001"

const fetchData = async () => {
  try {
    const response = await fetch(urlApi)
    const resData = await response.json()
    setData(resData)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  fetchData()
}, [data])

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/create">Create</Link>
        </nav>
        {data === null 
        ? (<div>cargando...</div>) 
        : 
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/create" element={<InputCreate />} />
            {data.map(item => (
              <Route key={item._id} path={`/${item._id}`} element={<PatientDetail item={item}/>} />
            ))
            }
          </Routes>
        }
        
      </div>
    </Router>
  )
};

export default App;