
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Noticepage from './pages/Noticepage'
import Resourcepage from './pages/Resourcepage'
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        {/* Homepage Routing */}
        <Route 
        path='/'
        element={
          <>
            <Homepage/>
          </>
        }
        />

        {/* Join the course Routing */}
        <Route 
        path='/notice'
        element={
          <>
            <Noticepage/>
          </>
        }
        />

        {/* Resources Routing */}
        <Route
        path='/resource'
        element={
          <>
          <Resourcepage/></>
        }
        />

      </Routes>

    </Router>
    </>
  )
}

export default App
