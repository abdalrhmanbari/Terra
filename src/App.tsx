import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './Layout/Footer'
import About from './pages/about'
import Contact from './pages/contact'

function App() {

  return (
    <div className=' overflow-x-hidden'>
      {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
          <Footer/>

      </div>
  )
}

export default App
