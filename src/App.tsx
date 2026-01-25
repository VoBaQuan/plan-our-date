import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Invite from './components/invite/Invite'

function App() {

  return (
    // <Home></Home>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
