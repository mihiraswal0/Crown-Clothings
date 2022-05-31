 import { Routes,Route,Outlet } from "react-router-dom";
 import Home from "./components/routes/home/home.component";
 import Navigation from "./components/navigation/navigation.components";


 const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
      </Route>
        

    </Routes>
  )
}

export default App;
