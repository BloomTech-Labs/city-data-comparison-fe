import React, {useState} from 'react'; 

/***media***/
import heart_icon from './icons/heart.svg';
//delete icon
import delete_icon from './icons/close_red.png'; 
//add icon
import add_icon from './icons/add_icon.svg';
//city pointer icon
import pointer from '../dashboard/assets/pointer.svg'



const citySelection = props => {
    //state is used to toggle between adding or removing a city to user's favorites
    const [add, setAdd] = useState(true); 

    return(
        <div className='favoriteCitiesSelection' style={{
            'display' : 'flex', 
            'justifyContent' : 'space-between', 
            'alignItems' : 'center'
        }}>
            <img src={pointer} alt={props.city}/>
            <p>{props.city}</p>
            <div className="favoritesIcon" onClick={() => setAdd(!add)}>
                <img src={(add) ? delete_icon : add_icon}/>
            </div>
        </div>
    )
}

const FavoriteButton = props => {

    const [selected, setSelected] = useState([]); 

    return(
        <div className="heart-button" style={{
            'display': 'flex',
            'alignItems' : 'center',
            'justifyContent' : 'spaceAround',
            'background' : 'white'
        }}>
            <img src={heart_icon} alt='add to favorites'/>
            Favorites
        </div>
    )
}

export default FavoriteButton; 