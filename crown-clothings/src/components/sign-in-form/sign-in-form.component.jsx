import { useState } from 'react';

 import FormInput from '../form-input/form-input.component';
 import Button from '../button/button.componet';

import {
  // createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

 import './sign-in-form.styles.scss';

const defaultFormFields = {
 
  email: '',
  password: '',
  };

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle=async()=>{
    const {user}=await signInWithGooglePopup();
     await createUserDocumentFromAuth(user)
   // console.log(response)
}
  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already an account?</h2>
      <span>Sign In with your Email and Password</span>
      <form onSubmit={handleSubmit}>
       
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        {/* <label>Password</label> */}

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        
        <Button type='submit'>Sign In</Button>
        <Button onClick={signInWithGoogle}>Google Sign In</Button>
      
      </form>
    </div>
  );
};

export default SignInForm;