 import { useEffect, useState } from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import axios from '../../axios.config'
import Header from './Header'

function Order() {

    // const [orders , setOrders] = useState([])
    
    const [{basket, user}, dispatch] = useStateValue()
    const [order , setOrder] = useState([])
    const headers = {
      // Specify the headers you want to set
      // "Authorization": `Bearer ${user?.token}`, // Example authorization header
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGI3ZTlhZTJmNTBlODZhZjk4MjFmOWMiLCJpYXQiOjE2OTAxOTM3MTIsImV4cCI6MTY5MDI4MDExMn0.8PwZUYIaBWTvTVKUs5epvsmwS9ShKg0AtETrOLcb-pk`, // Example authorization header
      "Content-Type": "application/json", // Example content type header
      // Add more headers as needed
    
    };
  
  const handle =   async ()=>{
    // let  response =  await  axios.get(`/${user?.orders[0]}`, {
  let    response =  await  axios.get(`/64be65c0aa7cbc97e7c128c1`, {
  headers
} )


    setOrder([...response.data.order])
  return response.data.order
     }
 
     
     
     
     useEffect(()=>{
       
       
       handle().then((value)=>setOrder([...value]))
      
            
    },[ ])

  return (
    <>

    <Header/>
 
      
<div className="orders">
<h2>Your orders</h2>
{/* <p>{moment.unix(order.data.created).format("MMMM DO YYYY , h: mma")}</p> */}
<p className="order__id">
  {/* <small>{order.id}</small> */}
</p>
{order?.map(item=>(
            <CheckoutProduct key = {Math.floor(Math.random()*10000)}  id = {item.prouctId?._id}  title= {item.productId?.title} image = {item.productId?.productImage} price ={item.productId?.price} rating = {item.productId?.rating} hideButton />

))}


{console.log(order)}
 

 <CurrencyFormat
renderText={(value)=>(
    <>
     <h3 className="order__total"> Order Total : {value}</h3>
    
    </>
)}
decimalScale={2}
value={10000/100}     //home  work
displayType= {'text'}
thousandSeparator = { true}
prefix={"$"}
/>  
 
</div>

    </>
  )
}

export default Order



// <div className="orders">
// <h2>Your orders</h2>
// {/* <p>{moment.unix(order.data.created).format("MMMM DO YYYY , h: mma")}</p> */}
// <p className="order__id">
//   <small>{order.id}</small>
// </p>
// {order.data.basket?.map(item=>(
//             <CheckoutProduct key = {Math.floor(Math.random()*10000)}  id = {item.id}  title= {item.title} image = {item.image} price ={item.price} rating = {item.rating} hideButton />

// ))}
// <CurrencyFormat
// renderText={(value)=>(
//     <>
//      <h3 className="order__total"> Order Total : {value}</h3>
    
//     </>
// )}
// decimalScale={2}
// value={order.data.amount/100}     //home  work
// displayType= {'text'}
// thousandSeparator = { true}
// prefix={"$"}
// />   
// </div>
