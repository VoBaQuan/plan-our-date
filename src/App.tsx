import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Invite from './components/invite/Invite'
import FloatingHearts from './components/common/FloatingHearts';

function App() {

  const repoName = "/plan-our-date";

  return (
    <BrowserRouter>
    <FloatingHearts></FloatingHearts>
      <Routes>
        <Route path="/" element={<Navigate to={repoName} replace />} />

        <Route path={repoName} element={<Home />} />
        <Route path={`${repoName}/invite`} element={<Invite />} />

        <Route path="*" element={<Navigate to={repoName} replace />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
