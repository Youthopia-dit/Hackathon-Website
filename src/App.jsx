// import './App.css'
import Landingpage from './components/landingpage';
import './App.css'
import Navbar from './components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Visioncard from './components/VisionCards/visioncard';
import Timeline from  './components/TimelineTable/timeline';

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Visioncard" element={<Visioncard/>}/>
    <Route path="/Timeline" element={<Timeline/>}/>
    <Route path="/landingpage" element={<Landingpage />} />

   </Routes>
   </BrowserRouter>
   
   
   
   
   </>
  )
}

export default App
