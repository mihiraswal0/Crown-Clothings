 import { Routes,Route,Outlet } from "react-router-dom";
 import Home from "./components/routes/home/home.component";
 import Navigation from "./components/navigation/navigation.components";
import SignIn from "./components/routes/sign-in/sign-in.component";
 const Shop=()=>{
   return(
   <div>
     <h1>shop hu</h1>
   </div>)
 } 

 const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        {/* <Route path="auth" element={<Authentication/>}/> */}
        <Route path="sign-in" element={<SignIn/>}></Route>
      </Route>
        

    </Routes>
  )
}

export default App;
