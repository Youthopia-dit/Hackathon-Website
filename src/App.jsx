// import './App.css'
import Landingpage from './components/landingpage';
import './App.css'
import Navbar from './components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Visioncard from './components/VisionCards/visioncard';
import Timeline from  './components/TimelineTable/timeline';
import PrblmState from './pages/ProblemStatement/prblm_state';
import Homepage from './pages/Home/home';
import OurTeam from './pages/OurTeam/OurTeam';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Visioncard" element={<Visioncard/>}/>
    <Route path="/Timeline" element={<Timeline/>}/>
    <Route path="/PrblmState" element={<PrblmState/>}/>
    <Route path="/landingpage" element={<Landingpage />} />
    <Route path="/" element={<Homepage />} />
    <Route path="/OurTeam" element={<OurTeam />} />
   </Routes>
   </BrowserRouter>
   
   
   
   
   </>
  )
}

export default App
