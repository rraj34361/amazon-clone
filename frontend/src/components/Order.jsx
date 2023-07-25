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
    const [total , setTotal] = useState(0)

      let token = localStorage.getItem('token')
    const headers = {
      // Specify the headers you want to set
      // "Authorization": `Bearer ${user?.token}`, // Example authorization header
      "Authorization": `Bearer ${token}`, // Example authorization header
      "Content-Type": "application/json", // Example content type header
      // Add more headers as needed
    
    };
  
  const handle =   async ()=>{

           let person = await axios.get('/getProfile',{
            headers : {
              token : token
            }
           } )

           let orders = person?.data.data.orders
           let orderId = orders[orders.length-1]
           console.log(orderId)

   
  let    response =  await  axios.get(`/${orderId}`, {
  headers
} )

 
setTotal( addOrder(response.data.order))
           console.log(response.data.order)
    setOrder([...response.data.order])
   
  return response.data.order
     }
 
     const addOrder = (order)=>{
      let total = 0;
         for(let i = 0;i<order.length;i++){
             total += order[i].productId.price
         }
          // console.log(total)
      return total
     }
      
     
     useEffect(()=>{
       
      
       handle() //.then(()=>  setTotal( addOrder(order)) )
      
      
            
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
  
 <CurrencyFormat
renderText={(value )=>(
    <>
     <h3 className="order__total"> Order Total : {value}</h3>
    
    </>
)}
decimalScale={2}
value={total}     //home  work
displayType= {'text'}
thousandSeparator = { true}
prefix={"₹"}
/>  
 
</div>

    </>
  )
}

export default Order



 