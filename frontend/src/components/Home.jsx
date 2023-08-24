 
import { useEffect, useState } from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'
import axios from '../../axios.config'
// import Slider from 'react-slick'
import Footer from './Footer'
import Loader from './Loader'



 

   
  const Home = () => {
    const [prod , setProd] = useState('')
  const [list , SetList] = useState([])
  const [loader, setLoader] = useState(false)
     
  const getProduct = async ()=>{
     setLoader(true)
    let  response = await axios.get("/products")
    let  product = response.data.data
    setLoader(false)
    SetList(product)
    
    setProd( Number( product[0].price))
    return Number( product[0].profileImage)
  }
  
  
  


    useEffect(()=>{
       getProduct()
      // setProd(product)
  },[])
  return (
    <>
     <Header/>
      <div className='home'>
        <div className="home__container">
             

 

 
      <div>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg" alt="" />
        
      </div>
     
  
    
        
              
                <div className="home__row">
                    <Product id = {list[0]?._id} price = {list[0]?.price} symbol={"₹"} title={list[0]?.title}  image= { list[0]?.productImage} rating = {list[0]?.rating}/>
                    <Product id = {list[1]?._id} price = {list[1]?.price} symbol={"₹"} title={list[1]?.title}  image= { list[1]?.productImage} rating = {list[1]?.rating}/>
                 </div>
                <div className="home__row">
                <Product id = {list[2]?._id} price = {list[2]?.price} symbol={"₹"} title={list[2]?.title}  image= { list[2]?.productImage} rating = {list[2]?.rating}/>
                <Product id = {list[3]?._id} price = {list[3]?.price} symbol={"₹"} title={list[3]?.title}  image= { list[3]?.productImage} rating = {list[3]?.rating}/>
                <Product id = {list[4]?._id} price = {list[4]?.price} symbol={"₹"} title={list[4]?.title}  image= { list[4]?.productImage} rating = {list[4]?.rating}/>
                
                </div>
                <div className="home__row">
                 <Product id = {list[5]?._id} price = {list[5]?.price} symbol={"₹"} title={list[5]?.title}  image= { list[5]?.productImage} rating = {list[5]?.rating}/>
                </div>
        </div>
    </div> 
     <Footer/>
     {loader && <Loader/>}
     </>
  )
}

export default Home


 