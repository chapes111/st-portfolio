import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
  )
}

export default App
