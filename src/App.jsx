
import './App.css'
import Navbar from './components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Visioncard from './components/VisionCards/visioncard';

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Visioncard" element={<Visioncard/>}/>

   </Routes>
   </BrowserRouter>
   
   
   
   
   </>
  )
}

export default App
