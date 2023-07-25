 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from '../../axios.config';
import { useEffect, useState } from 'react';

const ProductSlider = () => {
  // Replace this with your actual product data or fetch it from an API

  const [prod , setProd] = useState('')
  const [list , SetList] = useState([])  
      
const getProduct = async ()=>{
  let  response = await axios.get("/products")
 let  product = response.data.data
  SetList(product)
 
      setProd( Number( product[0].price))
  return Number( product[0].profileImage)
 }

   useEffect(()=>{
    getProduct()
   },[])





 
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    // autoplay: true,
  // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {list.map((product) => (
        <div key={product.id}>
          <img style={{"width" : "150px"}} src={product.productImage}   />
          <h3>{product.titl}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
