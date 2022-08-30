import {initializeApp} from 'firebase/app';
import {getAuth, 
  signInWithRedirect, 
  signInWithPopup,
   GoogleAuthProvider,
  createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgz4uIxNy45b4k0cgKo7kgflKMK3Ah89k",
    authDomain: "crown-clothing-db-b643c.firebaseapp.com",
    projectId : "crown-clothing-db-b643c",
    storageBucket: "crown-clothing-db-b643c.appspot.com",
    messagingSenderId: "480844482793",
    appId: "1:480844482793:web:1999a5c13e3c17a46dc878"
  };


  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account',
  });
  export const auth =getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth ,provider) 
//creating datanase

  export const db=getFirestore();
  export const createUserDocumentFromAuth=async(userAuth,additionalInfromation)=>{
    if(!userAuth)
    return;
    
    const userDocRef=doc(db,'users',userAuth.uid);
     //console.log(userDocRef);
     const userSnapshot=await getDoc(userDocRef);
    // //if user doesnt exist
    if(!userSnapshot.exists())
    {
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      
      try{
        await setDoc(userDocRef,{
          displayName,email,createdAt,
          ...additionalInfromation,
        });
      }
      catch (error)
      {
        console.log("Error creating the user",error);
      }
    }

    // return userDocRef;
    
    //if user exist

  };

  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email ||!password)
    return;
   return await createUserWithEmailAndPassword(auth,email,password);
  }