
import { Link, Outlet } from "react-router-dom"
import { Fragment,useContext } from "react";
import {ReactComponent as CrwnLogo} from '../assets/crown.svg'
import {NavigationContainer, Navlink,Navlinks,LogoContainer} from './navigation.styles'
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
           <NavigationContainer>

            <LogoContainer to='/'>
           
                <CrwnLogo className='logo'/>    

            </LogoContainer>
            
                <Navlinks>
                  <Navlink to='./shop'>
                    SHOP
                  </Navlink>
                  
                  {
                    currentUser?(<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>):(   
                    <Navlink to='./auth'>
                    SIGN IN
                  </Navlink>
                  )
                  }
                  <CartIcon/>
                </Navlinks>
                {
                  isCartOpen && <CartDropdown/>
                }
               </NavigationContainer>    
           <Outlet/>
        </Fragment>
        
          )
  }
  export default Navigation;