import React, {useState} from 'react'; 

/***media***/
import heart_icon from './icons/heart.svg';

import CitySelection from './CitySelection'

const FavoriteButton = props => {

    const [selected, setSelected] = useState([]); 
    return(
        <div className="heartButtonContainer" 
            style={{
                'background' : '#F2F9FD',
                'padding' : '2% 3% 0% 0%'
            }}>
            <div className="heart-button" 
                onMouseEnter={() =>{ 
                    setSelected(props.selected)
                    console.log(selected)}} style={{
                    'display': 'flex',
                    'alignItems' : 'center',
                    'justifyContent' : 'spaceAround',
                    'background' : 'white',
                    'width': '10%',
                    'justifyContent': 'space-around', 
                    'border-radius': '10px',
                    'font-weight': '500',
                    'marginLeft' : 'auto'
                
                }}>
                    <img src={heart_icon} alt='add to favorites'/>
                    <p>Favorites</p>
            </div>
        </div>
        
    )
}

export default FavoriteButton; 