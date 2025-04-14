import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Mobilemenu from './components/Mobilemenu'
import LoadingScreen from './components/LoadingScreen'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [isloading,setisloading] = useState(false); 

  return (

      <div>
        {!isloading && <LoadingScreen oncomplete={()=>{setisloading(true)}}/>}
        <Navbar isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
        <Mobilemenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen}/>
        <Home/>
        <Footer/>
      </div>
     
  )
}

export default App
