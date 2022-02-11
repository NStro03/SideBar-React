import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  )
}

export default App
