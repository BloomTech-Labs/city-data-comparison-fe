import React, {useState, useContext, useEffect} from 'react'

/***media***/
import heart_icon from './icons/heart.svg';
import filled_heart from './icons/filled_heart.svg'

import Axios from 'axios'

//import FavCard from './FavCard'
// import Drop from 'tether-drop'
// import { Portal } from 'react-portal'

// import CitySelection from './CitySelection'
// import {UserContext } from '../../contexts/UserContext'; 

// import pointer from '../dashboard/assets/pointer.svg'
// import delete_icon from './icons/close_red.png'; 
// //add icon
// import add_icon from './icons/add_icon.svg';
//city pointer icon



const FavoriteButton = props => {

    const {selected} = useContext(CityContext)
    const newSelection = selected; 
    const [hover, setHover] = useState(false)
    const [saving, setSaving] = useState(false)
    const [remove, setRemove] = useState(false); 
    const id = localStorage.getItem('id')

    
        // window.onload = () => {
        // const popup = new Drop({
        // target: favRef.current,
        // content: favCard.current,
        // position: 'top center',
        // openOn: 'hover', 
        // hoverCloseDelay: 0, 
        // remove: true
        // })

        
    
     
    
    
    const saveFavorites = () => {
        Axios
            .post(`https://citrics-staging.herokuapp.com/api/favs/${id}`, props.city)
            .then(response => {
                
                console.log(response)
                setSaving(false)
            })
            .catch(error => console.log(error))
    }

    return(
          
            
                <div className="heart-button" 
                    onClick={saveFavorites}
                    onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}
                    style={{
                        'display': 'flex',
                        'cursor' : 'pointer',
                        'alignItems' : 'center',
                        'justifyContent' : 'spaceAround',
                        'background' : 'white',
                        'width': '10%',
                        'justifyContent': 'space-around', 
                        'borderRadius': '10px',
                        'fontWeight': '500',
                        'marginLeft' : 'auto', 
                        'marginRight' : '4%',
                        
                    
                    }}
                    >
                        <img src={(hover) ? filled_heart : heart_icon} alt='add to favorites'/>
                        <p>Add to Favorites</p>
                </div>
        
    )
}

export default FavoriteButton; 



