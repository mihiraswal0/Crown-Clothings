
import { Link, Outlet } from "react-router-dom"
import { Fragment,useContext } from "react";
import {ReactComponent as CrwnLogo} from '../assets/crown.svg'
import './navigation.styles.scss'
import CartDropdown from "../cart-dropdown/cart-dropdown";
import CartIcon from "../cart-icon/cart-icon.components";
import  {UserContext}  from "../../context/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";
const  Navigation=()=>{
  const {currentUser,setCurrentUser}=useContext(UserContext);
    const {isCartOpen}=useContext(CartContext);
  const signOutHandler=async()=>{
    const res=await signOutUser();
    setCurrentUser(null);
    // console.log(res)
  }
 // console.log(currentUser);
    return (
        <Fragment>
            <div className="navigation"> 
            <Link className="logo-container" to='/'>
            <div>
                <CrwnLogo className='logo'/>    
            </div> 
            </Link>
            {/* <div>Logo</div> */}
                {/* <h1>Naviagtion Bar</h1> */}
                <div className="nav-links-container">
                  <Link className="nav-link" to='./shop'>
                    SHOP
                  </Link>
                  
                  {
                    currentUser?(<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>):(     <Link className="nav-link" to='./auth'>
                    SIGN IN
                  </Link>
                  )
                  }
                  <CartIcon/>
                </div>
                {
                  isCartOpen && <CartDropdown/>
                }
                </div>     
           <Outlet/>
        </Fragment>
        
          )
  }
  export default Navigation;