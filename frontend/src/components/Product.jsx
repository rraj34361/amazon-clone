import "./Product.css";
import PropTypes from 'prop-types'
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const Product = ({id , title, price ,symbol, image, rating}) => {

  const [{basket, user}, dispatch] = useStateValue()

       /// add to database to users cart only;
       const headers = {
        // Specify the headers you want to set
        "Authorization": `Bearer ${user?.token}`, // Example authorization header
        "Content-Type": "application/json", // Example content type header
        // Add more headers as needed
      };

       const cart= async()=>{
             const response = await axios.post(`/users/${user?.id}/cart`, {
              productId : id 
             }, {headers})
             console.log(response.data.data)
       }

 
    const addToBasket = () =>{
         
        // console.log(user.id)
        cart()
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


    useEffect(()=>{
      dispatch({
        type : "SET_USER",
        user : user
      })
    },[])
 

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

         <Link to = {`/products/${id}`}>
         <img className="img"
          src={image}
          alt=""
        />
         
         </Link>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

Product.propTypes = {
    title : PropTypes.string ,
    price : PropTypes.number ,
    image : PropTypes.string ,
    rating : PropTypes.number, 
    symbol : PropTypes.string,
    id : PropTypes.string
}

export default Product;
