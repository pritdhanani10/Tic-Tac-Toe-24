
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <>
    <div className='bg-slate-600'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
     
    </>
  )
}

export default App
