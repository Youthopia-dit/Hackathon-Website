
import './App.css'
import Navbar from './components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Visioncard from './components/VisionCards/visioncard';
import Timeline from  './components/TimelineTable/timeline';
import PrblmState from './pages/ProblemStatement/prblm_state';

function App() {



  

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Visioncard" element={<Visioncard/>}/>
    <Route path="/Timeline" element={<Timeline/>}/>
    <Route path="/PrblmState" element={<PrblmState/>}/>

   </Routes>
   </BrowserRouter>
   
   
   
   
   </>
  )
}

export default App
