import React, {useState, useContext, useEffect} from 'react'
//assets
import heart_icon from './icons/heart.svg';
import filled_heart from './icons/filled_heart.svg'

import Axios from 'axios'


const FavoriteButton = props => {
    const [hover, setHover] = useState(false)
    const [saving, setSaving] = useState(false)
    const [remove, setRemove] = useState(false); 
    const id = localStorage.getItem('id')
    
    
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
                        
                        
                    
                    }}
                    >
                        <img style={{'width' : '23%'}} src={(hover) ? filled_heart : heart_icon} alt='add to favorites'/>
                </div>
        
    )
}

export default FavoriteButton; 



