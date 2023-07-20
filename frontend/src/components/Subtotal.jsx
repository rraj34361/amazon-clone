 import { useStateValue } from './StateProvider'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
const Subtotal = () => {
  const [{basket}, dispatch] = useStateValue()
 

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
        <button >Procced to checkout </button>
    </div>
  )
}

export default Subtotal