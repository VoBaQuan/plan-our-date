import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Invite from './components/invite/Invite'
import FloatingHearts from './components/common/FloatingHearts';
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0, rotateY: 90 }}
    animate={{ opacity: 1, rotateY: 0 }}
    exit={{ opacity: 0, rotateY: -90 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

function App() {

  const location = useLocation();
  const repoName = "/plan-our-date";

  return (
    <div>
      <FloatingHearts></FloatingHearts>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to={repoName} replace />} />

          <Route path={repoName} element={<PageWrapper><Home /></PageWrapper>} />
          <Route path={`${repoName}/invite`} element={<PageWrapper><Invite /></PageWrapper>} />

          <Route path="*" element={<Navigate to={repoName} replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  )

}

export default App
