import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './pages/Home'
import Team from './pages/Team'
import Error from './pages/Error'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Modal />
      <Sidebar />
    </Router>
  )
}

export default App
