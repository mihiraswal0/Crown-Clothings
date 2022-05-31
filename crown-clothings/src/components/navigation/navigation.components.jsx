
import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../assets/crown.svg'
import './navigation.styles.scss'
const Navigation=()=>{
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
                <div className="links-container">
                  <Link className="nav-links" to='./shop'>
                    Shop
                  </Link>

                </div>
                
                </div>     
          <Outlet/>
        </Fragment>
        
          )
  }
  export default Navigation;