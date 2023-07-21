 import { useEffect, useState } from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Order({order}) {

    // const [orders , setOrders] = useState([])
    const [{basket, user}, dispatch] = useStateValue()
    
    console.log(basket)
    useEffect(()=>{
          
    },[])

  return (
    <>
      order
      
<div className="orders">
<h2>Your orders</h2>
{/* <p>{moment.unix(order.data.created).format("MMMM DO YYYY , h: mma")}</p> */}
<p className="order__id">
  {/* <small>{order.id}</small> */}
</p>
{basket?.map(item=>(
            <CheckoutProduct key = {Math.floor(Math.random()*10000)}  id = {item.id}  title= {item.title} image = {item.image} price ={item.price} rating = {item.rating} hideButton />

))}
<CurrencyFormat
renderText={(value)=>(
    <>
     <h3 className="order__total"> Order Total : {value}</h3>
    
    </>
)}
decimalScale={2}
value={ 90/100}     //home  work
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
