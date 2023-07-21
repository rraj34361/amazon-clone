import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
const Header = () => {
  let [{basket, user}, dispatch] = useStateValue()
  // console.log(user)

  const handleAuth = ()=>{
    localStorage.clear()
    dispatch({
      type : "SET_USER",
      user : null
    })
    user = null
  }
  return (
    <div className="header">
      <Link to ='/'>
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon " />
        {/* logo */}
      </div>

      <div className="header__nav">
       <Link to = {!user && '/login'}>
       <div onClick={handleAuth} className="header__option">
          <span className="header__optionLineOne">Hello {user?.name? `${user.name}`: "Guest"}</span>
          <span className="header__optionLineTwo">{user?"Sign Out":"Sign In"}</span>
        </div>
       </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
            <Link to = '/checkout'>
            <ShoppingBasketIcon />
            </Link>
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
