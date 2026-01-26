import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Invite from './components/invite/Invite'

function App() {

  const repoName = import.meta.env.DEV ? "/" : "/plan-out-date";

  return (
    // <Home></Home>
    <BrowserRouter basename={repoName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
