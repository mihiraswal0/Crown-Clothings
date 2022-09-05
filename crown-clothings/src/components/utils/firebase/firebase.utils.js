import {initializeApp} from 'firebase/app';
import {getAuth, 
  signInWithRedirect, 
  signInWithPopup,
   GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore';
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
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);
    //creating datanase

  export const db=getFirestore();
  export const addCollectionAndDocuments=async(collectionkey,objectsToAdd )=>{
    const collectionRef=collection(db,collectionkey);
    const batch=writeBatch(db);
    objectsToAdd.forEach((object)=>{
      const docRef=doc(collectionRef,object.title.toLowerCase());
      batch.set(docRef,object);
    });
    await batch.commit();
    // console.log('done');

  }
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };
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
  export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email ||!password)
    return;
   return await signInWithEmailAndPassword(auth,email,password);
  }
  export const signOutUser=async()=>{
   await signOut(auth);
  }