
import { Outlet } from 'react-router-dom'
import './App.css'

import Footer from './components/Home/Footer/Footer'
import Navbar from './components/Home/Navbar/Navbar'


function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
