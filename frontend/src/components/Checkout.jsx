 import Subtotal from './Subtotal'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
   const [{basket}, dispatch] = useStateValue()


  return (
    <div className='checkout'>
           <div className="checkout__left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7iL6yHymGKsNtd_o3dh2oh-no8o9OcIDWjlcuH1lQAEPBF2jK0GtBhwXD00eQRWvJQ&usqp=CAU" alt="" className='checkout__ad' />
           <div>
           <h2 className='checkout__title'>
           Your Shopping basket 
           </h2>
           {/* CheckoutProduct */}
           {/* CheckoutProduct */}
           {/* CheckoutProduct */}
           {/* CheckoutProduct */}
          {basket.map(item=>(
            <CheckoutProduct key = {item.id}/>
          ))}
           </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
               
            </div>
         </div>
  )
}

export default Checkout