 import { useStateValue } from './StateProvider'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import { useNavigate } from 'react-router-dom'
const Subtotal = () => {
  const [{basket , user}, dispatch] = useStateValue()
 const navigate = useNavigate()

 const handleNav = ()=>{
    if(user){
      navigate("/payment")
    }else{
      navigate('/login')
    }
 }

  return (
    <div className="subtotal">
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
              {/* part of home work  */}
                Subtotal ( {basket.length} items):  
                <strong>{value}</strong>

            </p>
            <small className='subtotal__gift'>
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
  )}
        decimalScale={2}
        value={getBasketTotal(basket)}     //home  work
        displayType= {'text'}
        thousandSeparator = { true}
        prefix={"$"}
        />   
        <button onClick={handleNav} >Procced to checkout </button>
    </div>
  )
}

export default Subtotal