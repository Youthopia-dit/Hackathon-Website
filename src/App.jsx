// import './App.css'
import Landingpage from './components/landingpage';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Routes>
          <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
