 
 import Home from './components/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Register from './components/Register'
import { useEffect } from 'react'
import { useStateValue } from './components/StateProvider'
import axios from '../axios.config'
import Payment from './components/Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Order from './components/Order'
import ProductPage from './components/ProductPage'
 

const promise = loadStripe(
  'pk_test_51NVvi0SFGfzmmEtspXFNaBGya9J5BM5MFPNThRpIdRc6cEvgH4Bd8A31Y4xijJeyxyvcQnK1oEO548kJTSf0k1Hb00n7jRS3TI'
);

function App() {


const [{basket,user},dispatch ] = useStateValue()
//      console.log(user)

    //  let  token =  localStorage.getItem("token")
 
    let response ;
  

     const  hello =   async(token)=>{
          response = await axios.get('/getProfile',{
               headers : {
                 token : token
               }
             })
              // console.log(response.data.data)
              dispatch({
                type : "SET_USER",
                user : {token ,  ...response.data.data }
              })
              return response.data.data
           }

        //  hello()

  useEffect(()=>{
    let  token =  localStorage.getItem("token")
    if(token){
      console.log("logged In")
         hello(token)
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
    <Route path = "/login" element= {<Login hello = {hello}/>}/>
    <Route path = '/checkout' element = {<Checkout/>}  />  
    <Route path='/payment' element = {<Elements stripe={promise}><Payment/></Elements>} />   
    <Route path ='/orders' element = {<Order order = {basket}/>}  />
    <Route  path='/products/:productId' element = {<ProductPage/>}/>
    </Routes>
    </>
  )
}

export default App
