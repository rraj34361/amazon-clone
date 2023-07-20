 
 import Home from './components/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Register from './components/Register'
import { useEffect } from 'react'
import { useStateValue } from './components/StateProvider'
import axios from '../axios.config'




function App() {


const [{basket,user},dispatch ] = useStateValue()
//      console.log(user)

     let  token =  localStorage.getItem("token")
 
    let response ;
  

     const  hello =   async()=>{
          response = await axios.get('/getProfile',{
               headers : {
                 token : token
               }
             })
              // console.log(response.data.data)
              dispatch({
                type : "SET_USER",
                user : {token , name : response.data.data}
              })
              return response.data.data
           }

         

  useEffect(()=>{
    let  token =  localStorage.getItem("token")
    if(token){
      console.log("logged In")
         hello()
     }
     else{
      console.log("plz login")
        dispatch({
          type: "SET_USER",
          user : null
        })
     }
  }, [])
   
  return (
    <>
    
    <Routes>
    <Route path = '/' element ={   <Home/>}  /> 
    <Route path='/register' element = {<Register/>}/>
    <Route path = "/login" element= {<Login/>}/>
    <Route path = '/checkout' element = {<Checkout/>}  />       
    </Routes>
    </>
  )
}

export default App
