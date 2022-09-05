import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem=({category})=>{
  const {route}=category; 
  const navigate=useNavigate();
  const onNavigateHandler =()=>navigate(route);
  return (
        <div className='directory-item-container' key={category.id} onClick={onNavigateHandler}>
        
        <div className='background-image' 
        style={
          {backgroundImage: `url(${category.imageUrl})`}
        }
        />
        <div className='body'>
            <h2>{category.title.toUpperCase()}</h2>
             <p>Shop Now</p>
        </div>
      </div>
    )

}
export default DirectoryItem;