import './categories.styles.scss';
import Directory from '../../directory/directory.component';
import { Outlet } from 'react-router-dom';
const  Home=()=> {
  
 return (
   <div>
      <Directory/>
   </div>
  //  <Directory categories={categories}/>
 );

}

export default Home;
