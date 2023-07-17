 
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
      <div className='home'>
        <div className="home__container">
      
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg" alt="" />
        
                <div className="home__row">
                    <Product id = {"143553"} price = {99.09} symbol={"$"} title={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto, exercitationem perferendis aut dolor magnam tenetur illum neque animi placeat iure consectetur eveniet amet, consequatur cumque veniam blanditiis incidunt illo. "}  image= {"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"} rating = {6}/>
                    <Product id = {"234348"} price = {99.09} symbol={"$"} title={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto, exercitationem perferendis aut dolor magnam tenetur illum neque animi placeat iure consectetur eveniet amet, consequatur cumque veniam blanditiis incidunt illo."}  image= {"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"} rating = {6}/>
                </div>
                <div className="home__row">
                <Product id = {"545384"} price = {99.09} symbol={"$"} title={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto, exercitationem perferendis aut dolor magnam tenetur illum neque animi placeat iure consectetur eveniet amet, consequatur cumque veniam blanditiis incidunt illo."}  image= {"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"} rating = {6}/>
                <Product id = {"745765"} price = {99.09} symbol={"$"} title={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto, exercitationem perferendis aut dolor magnam tenetur illum neque animi placeat iure consectetur eveniet amet, consequatur cumque veniam blanditiis incidunt illo."}  image= {"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"} rating = {6}/>
                <Product id = {"453635"} price = {99.09} symbol={"$"} title={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto, exercitationem perferendis aut dolor magnam tenetur illum neque animi placeat iure consectetur eveniet amet, consequatur cumque veniam blanditiis incidunt illo."}  image= {"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"} rating = {6}/>
                </div>
                <div className="home__row">
                 <Product id = {"7885753"} price = {99.09} symbol={"$"} title={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto, exercitationem perferendis aut dolor magnam tenetur illum neque animi placeat iure consectetur eveniet amet, consequatur cumque veniam blanditiis incidunt illo."}  image= {"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"} rating = {6}/>

                </div>
        </div>
    </div> 
  )
}

export default Home