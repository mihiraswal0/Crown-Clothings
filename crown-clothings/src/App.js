 import { Routes,Route,Outlet } from "react-router-dom";
 import Home from "./components/routes/home/home.component";
 import Navigation from "./components/navigation/navigation.components";
import Authentication from "./components/authentication/authentication.component";
import Shop from "./components/shop/shop.component";


 const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        {/* <Route path="auth" element={<Authentication/>}/> */}
        <Route path="auth" element={<Authentication/>}></Route>
      </Route>
        

    </Routes>
  )
}

export default App;
