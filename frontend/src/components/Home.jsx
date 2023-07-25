 
import { useEffect, useState } from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'
import axios from '../../axios.config'
// import Slider from 'react-slick'
import Footer from './Footer'
 



 

   
  const Home = () => {
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
      // setProd(product)
  },[])
  return (
     <>
     <Header/>
      <div className='home'>
        <div className="home__container">
             

 


          
      {/* Add your carousel slides here */}
      <div>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg" alt="" />
        
      </div>
      <div>
            {/* <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg" alt="" /> */}
      
      </div>
      <div>
            {/* <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg" alt="" /> */}
      </div>
      {/* Add more slides as needed */}
    
        
              
                <div className="home__row">
                    <Product id = {list[0]?._id} price = {list[0]?.price} symbol={"₹"} title={list[0]?.title}  image= { list[0]?.productImage} rating = {list[0]?.rating}/>
                    <Product id = {list[1]?._id} price = {list[1]?.price} symbol={"₹"} title={list[1]?.title}  image= { list[1]?.productImage} rating = {list[1]?.rating}/>
                 {/* <Product id = {"54534"} price = {99.09} symbol={"$"} title={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto, exercitationem perferendis aut dolor magnam tenetur illum neque animi placeat iure consectetur eveniet amet, consequatur cumque veniam blanditiis incidunt illo."}  image= {"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"} rating = {6}/> */}
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
     </>
  )
}

export default Home


 