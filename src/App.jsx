
import './App.css'
import Navbar from './components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/Navbar" element={<Navbar/>}/>
   </Routes>
   </BrowserRouter>
   
   
   
   
   </>
  )
}

export default App
