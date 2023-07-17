import PropTypes from 'prop-types'
const CheckoutProduct = ({id , image , title , price ,symbol, rating}) => {
  return (
    <div className='checkoutProduct'>
     <img className='checkoutProduct__image' src={image || "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg"} alt=""   />
     
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
     </div>

    </div>
  )
}


CheckoutProduct.propTypes = {
    title : PropTypes.string.isRequired ,
    price : PropTypes.number.isRequired ,
    image : PropTypes.string.isRequired ,
    rating : PropTypes.number.isRequired, 
    symbol : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

export default CheckoutProduct