import React, {useState} from 'react'; 

/***media***/
import heart_icon from './icons/heart.svg';
//delete icon
import delete_icon from './icons/close_red.png'; 
//add icon
import add_icon from './icons/add_icon.svg';
//city pointer icon
import pointer from '../dashboard/assets/pointer.svg'



const CitySelection = (props) => {
    //state is used to toggle between adding or removing a city to user's favorites
    const [add, setAdd] = useState(true); 

    return(
        <div className='favoriteCitiesSelection'style={{
            'display' : 'flex', 
            'justifyContent' : 'space-between', 
            'alignItems' : 'center', 
            'alignContent': 'center',
            'height': '2rem',
            'background':'white',
            'padding': '2%',
            'width' : '100%'
            
        }}>
            <div className='pointerIcon' style={{ 'width' : '4%'}}>
                <img src={pointer} style={{'width' : '100%'}} alt={props.city.name_with_com}/>
            </div>

            <p style={{'width' : '60%'}}>{props.city.name_with_com}</p>
            
            <div className="favoritesIcon" style={{'width' : '4%'}} onClick={() => setAdd(!add)}>
                <img style={{'width':'100%', 'cursor':'pointer'}} src={(add) ? delete_icon : add_icon}/>
            </div>
            
        </div>
    )
}

export default CitySelection