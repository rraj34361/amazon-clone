import "./Product.css";
import PropTypes from 'prop-types'
import { useStateValue } from "./StateProvider";
const Product = ({id , title, price ,symbol, image, rating}) => {

  const [{basket}, dispatch] = useStateValue()

  console.log('this is the basket===>', basket )
    const addToBasket = () =>{
      //dispatch the item the data layer
      dispatch({
        type : "ADD_TO_BASKET",
         item : {
          id : id,
          title : title,
          image : image,
          price : price,
          rating : rating,
         }
      })
    }


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>{symbol}</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
           {Array(rating).fill().map((_,i)=>(
            <p key = {i}>⭐</p>
           ))}
        </div>
        </div>

        <img
          src={image}
          alt=""
        />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

Product.propTypes = {
    title : PropTypes.string.isRequired ,
    price : PropTypes.number.isRequired ,
    image : PropTypes.string.isRequired ,
    rating : PropTypes.number.isRequired, 
    symbol : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

export default Product;
