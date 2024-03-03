import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
        <main className="overflow-hidden">  
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App