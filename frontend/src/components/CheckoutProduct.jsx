import PropTypes from 'prop-types'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
 
const CheckoutProduct = ({id , image , title , price ,symbol, rating, hideButton}) => {

  const [{basket}, dispatch] = useStateValue()
  const removeFromBasket = ()=>{
    
 dispatch({
   type : "REMOVE_FROM_BASKET",
   id : id,
 })
}
    //remove the item from the basket 

   return(
    <div className='checkoutProduct'>
     <img className='checkoutProduct__image' src={image} alt=""   />
     
     <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_,i)=>(
                <p key={i}>⭐</p>
            ))}
        </div>
    {!hideButton && (
              <button onClick={removeFromBasket}>Remove from cart</button>

    )}
     </div>

    </div>
  )
  }

CheckoutProduct.propTypes = {
    title : PropTypes.string.isRequired ,
    price : PropTypes.number.isRequired ,
    image : PropTypes.string.isRequired ,
    rating : PropTypes.number.isRequired, 
    symbol : PropTypes.string,
    id : PropTypes.string.isRequired
}

export default CheckoutProduct