import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Group from "./pages/Group"
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path='/group' element={<Group/>}/>
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
