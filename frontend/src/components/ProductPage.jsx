import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./ProductPage.css";
import ProductSlider from "./ProductSlider";
import { useStateValue } from "./StateProvider";

function ProductPage() {
  const [data, setData] = useState({});
  const { productId } = useParams();

  
  const [{basket, user}, dispatch] = useStateValue()

  // console.log('this is the basket===>', basket )
  // console.log('this is the user===>', user )
    const addToBasket = () =>{
      //dispatch the item the data layer
      dispatch({
        type : "ADD_TO_BASKET",
         item : {
          id : productId,
          title : data.title,
          image : data.productImage,
          price : data.price,
          rating : data.rating,
         }
      })
    }

  useEffect(() => {
    // Use the 'id' parameter to make your Axios call or perform any action
    axios
      .get(`/products/${productId}`)
      .then((response) => {
        // Handle the response here
        // console.log(response.data.data)
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <Header />
      <>
        <section id="product-info">
          <div className="item-image-parent">
            <div className="item-image-main">
              <img src={data.productImage} alt="default" />
            </div>
          </div>
          <div className="item-info-parent">
            {/* main info */}
            <div className="main-info">
              <h4>EYEBOGLER Regular Fit Men Cotton T-Shirt</h4>
              <div className="star-rating">
             
                {Array(data.rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i}>⭐</p>
                  ))}
              </div>
              <p>
                Price:{" "}
                <span id="price">
                  {data.symbol} {data.price}
                </span>
              </p>
            </div>
            {/* Choose */}
            <div className="select-items">
              
              
              <div className="description">
                
                <p>{data.title}</p>


              </div>
            </div>
            <button onClick={addToBasket} className="addToCart">Add to cart</button>
            {/* Description */}
          </div>
        </section>
      </>

      <div className="slider">
      <ProductSlider />
      </div>
      {/* <ProductSlider/> */}
    </>
  );
}

export default ProductPage;
