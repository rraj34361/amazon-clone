 
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import axios from '../../axios.config'
function Payment() {
 const [{basket, user}, dispatch] = useStateValue()

const stripe = useStripe();
const elements = useElements();
const [error, setError] = useState(null)
const [disabled, setDisabled] = useState(true)
const [clientSecret, setClientSecret] = useState(true)
const [succeeded , setSucceeded] = useState('')
const [ processing, setProcessing] = useState('')
   const navigate = useNavigate()
 
useEffect(()=>{
  //generate the special stripe secret which allows us to charge a customer
   const getClientSecert = async ()=>{
      const response = await axios({
         method : 'post',
         url : `/payments/create?amount=${getBasketTotal(basket)*100}`
      });
      // console.log(response.data.data)
      setClientSecret(response.data.clientSecret)
   }
  
   getClientSecert();
  
}, [basket])

console.log(clientSecret)

const handleSubmit = async (e)=>{
   e.preventDefault()
   setProcessing(true)  ;
   //stripe
   const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method : {
         card : elements.getElement(CardElement)
      }
   }).then(({paymentIntent})=>{
      //paymentIntent = payment Confirmtion
         //  console.log(paymentIntent)
         dispatch({
            type : "EMPTY_BASKET"
         })
      setSucceeded(true);
      setError(null)
      setProcessing(false)
      navigate('/orders')    //I have to clear the routing history at this time
   })
   console.log(payload)
}
   
const handleChange =  (e)=>{
      //listen for changes in the cardElement
      // and display any error as the custome types their card details
      setDisabled(e.empty);
      setError(e.error ? e.error.message : '' )
}

  return (
   <>
   <Header/>
   <div className="payment">
    <div className="payment__container">
           
           <h1>
            Checkout (
               <Link to = '/checkout'>{basket?.length} items</Link>
            )
           </h1>
           {/* paymentt section - delivery address */}

 
       <div className="payment__section">
        <div className="payment__title">
            <h3>Delivery address</h3>
        </div>
        <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Nihal vihar</p>
            <p>Delhi, India</p>
        </div>
       </div>


          {/* paymentt section - Review  Items */}
          <div className="payment__section">
                 <div className="payment__title">
                    <h3>Review items and delivery</h3>
                 </div>
                 <div className="payment__items">
                    {basket.map(item=>(
                            <CheckoutProduct key = {Math.floor(Math.random()*10000)}  id = {item.id}  title= {item.title} image = {item.image} price ={item.price} rating = {item.rating} />
                    ))}
                 </div>
          </div>
          {/* paymentt section - paument method */}
          <div className="payment__section">
            <div className="payment__title">
               <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
               {/* strip magic will go  */}
               <form onSubmit={handleSubmit}> 
                  <CardElement onChange={handleChange}/>
                  <div className="payment__priceContainer">
                  <CurrencyFormat
        renderText={(value)=>(
            <h1>Order Details : {value}</h1>
  )}
        decimalScale={2}
        value={getBasketTotal(basket)}     //home  work
        displayType= {'text'}
        thousandSeparator = { true}
        prefix={"$"}
        />   
        <button disabled = {processing|| disabled||succeeded} >
         <span > {processing ? <p>Processing</p> :"Buy Now" }  </span>
        </button>
                  </div>

                  {/* Error */}
                  {error && <div>{error}</div>}
               </form>
            </div>

          </div>
    </div>
   </div>
   
   </>
  )
}

export default Payment