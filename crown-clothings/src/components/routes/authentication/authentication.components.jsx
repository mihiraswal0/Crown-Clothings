import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../sign-up/sign-up-form.component';
const SignIn=()=>{
    const logGoogleUser =async()=>{
        const response=await signInWithGooglePopup();
     const userDocRef=await  createUserDocumentFromAuth(response.user);
        //  console.log(response);

    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>
            <SignUpForm/>
        </div>
    )
}
export default SignIn;