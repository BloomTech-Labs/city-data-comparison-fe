import React, {useState} from 'react'; 

//media
import heart_icon from './icons/heart.svg'
const FavoriteButton = props => {

    const [selected, setSelected] = useState([]); 

    return(
        <div className="heart-button" style={{
            'display': 'flex',
            'alignItems' : 'center',
            'justifyContent' : 'spaceAround'
        }}>
            <img src={heart_icon} alt='add to favorites'/>
            Favorites
        </div>
    )
}