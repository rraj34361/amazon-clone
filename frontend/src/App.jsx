 
 import Home from './components/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import Header from './components/Header'
 

function App() {
   
  return (
    <>
    <Header/>
    <Routes>
    <Route path = '/' element ={   <Home/>}  /> 
    <Route path = '/checkout' element = {<Checkout/>}  />       
    </Routes>
       
       
    </>
  )
}

export default App
