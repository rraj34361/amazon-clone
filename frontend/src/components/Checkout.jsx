 import Subtotal from './Subtotal'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header'
 
 
function Checkout() {
   const [{basket}, dispatch] = useStateValue()


  return (
    <>

    <Header/>
    <div className='checkout'>
           <div className="checkout__ad">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7iL6yHymGKsNtd_o3dh2oh-no8o9OcIDWjlcuH1lQAEPBF2jK0GtBhwXD00eQRWvJQ&usqp=CAU" alt="" className='checkout__ad' />
           <div>
           <h2 className='checkout__title'>
           Your Shopping basket 
           </h2>
          
            {/* <CheckoutProduct key = {1}  id = {1}  title= {"lorem34 hey there"} image = {"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"} price ={ "100"} rating = {5}  /> */}
            {/* <CheckoutProduct key = {1}  id = {1}  title= {"lorem34 hey there"} image = {"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"} price ={ "100"} rating = {5}  /> */}
               
       
               {basket.map(item=>(
            <CheckoutProduct key = {Math.floor(Math.random()*10000)}  id = {item.id}  title= {item.title} image = {item.image} price ={item.price} rating = {item.rating} />
          ))}
             
            
           </div>
            </div>
            <div className="checkout__right">
               <Subtotal/>
            </div>
         </div>
    
    </>
  )
}

export default Checkout













// import React, { forwardRef } from 'react';
// import FlipMove from 'react-flip-move';

// const FunctionalArticle = forwardRef((props, ref) => (
//   <div ref={ref}>
//     {props.articleName}
//   </div>
// ));

// // you do not have to modify the parent component
// // this will stay as described in the quickstart
// const TopArticles = ({ articles }) => (
//   <FlipMove>
//     {articles.map(article => (
//       <FunctionalArticle key={article.id} {...article} />
//     ))}
//   </FlipMove>
// );