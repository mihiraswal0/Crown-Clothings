import { useState } from "react";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
import FormInput from "../submit-form/from.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.componet";
const defaultformFields={
displayName:'',
email:'',
password:'',
confirmPassword:''
}


const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultformFields);
    const {displayName,email,password,confirmpassword}=formFields;
    // console.log(formFields)


    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    };

    const handleSubmit=async(event)=>
    {
        event.preventDefault();
        if(password!== confirmpassword)
        {
            alert("passwords do no match");
            return;
        }
        try {
            const response= await createAuthUserWithEmailAndPassword(email,
                password);
                console.log(response)

             await createUserDocumentFromAuth(response.user,{displayName});
        }
        catch(error){
            if(error.code==='auth/email-already-in-use')
            {alert("Email already Use");}
            else if(error.code==='auth/weak-password')
            alert("Wek Password")
            else
            {console.log("Error in sign up");}
        }
    };


    return (
       <div className="sign-up-container">
        <h2>Don't Have An Account?</h2>
        <span>Sign Up With Your Email And Password </span>
        <form onSubmit={handleSubmit}> 
            
            <FormInput label="Display Name" type="text"  required onChange={handleChange} name="displayName" value={displayName}/>
          
            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
            
            <FormInput label ="Password" type="password" required onChange={handleChange} name="password" value={password}/>
           
            <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmpassword" value={confirmpassword}/>
            {/* <button type="Submit" >Sign Up</button> */}
            <Button children="Submit" />
        </form>


       </div> 
    )
}
export default SignUpForm