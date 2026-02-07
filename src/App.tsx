import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { AnimatePresence, motion } from "framer-motion";

import Home from './pages/home/Home'
import MainLayout from './layouts/MainLayout'
import Invite from './pages/invite/Invite';
import { InviteProvider } from './pages/invite/InviteContext';

const PageWrapper = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0, rotateY: 90 }}
    animate={{ opacity: 1, rotateY: 0 }}
    exit={{ opacity: 0, rotateY: -90 }}
    transition={{ duration: 0.6 }}
    style={{
      width: "100%",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
    {children}
  </motion.div>
);

const App = () => {

  const location = useLocation();
  const repoName = "/plan-our-date";

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to={repoName} replace />} />
          <Route path={repoName} element={<PageWrapper><Home /></PageWrapper>} />
          <Route
            path={`${repoName}/invite`}
            element={
              <PageWrapper>
                <InviteProvider>
                  <Invite />
                </InviteProvider>
              </PageWrapper>
            } />
        </Route>

        <Route path="*" element={<Navigate to={repoName} replace />} />
      </Routes>
    </AnimatePresence>
  )

}

export default App
