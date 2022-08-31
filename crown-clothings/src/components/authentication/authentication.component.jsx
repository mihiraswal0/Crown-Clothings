import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { signInWithGooglePopup ,createUserDocumentFromAuth,signInWithGoogleRedirect} from "../utils/firebase/firebase.utils"
import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";

const Authentication=()=>{
 
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user)
       // console.log(response)
    }
   
    return (<div>
        <h1>Sign In Page</h1>
       
            {/* <button onClick={logGoogleUser}>Sign in Google Popup</button> */}
            {/* <button onClick={logGoogleRedirectUser}>Sign in Google Redirect</button> */}
           <SignInForm/>
            <SignUpForm/>
    </div>)
}
export default Authentication;