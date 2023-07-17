import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{basket}, dispatch] = useStateValue()
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
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
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