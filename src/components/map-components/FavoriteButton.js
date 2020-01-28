import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from '../../contexts/UserContext'; 
//assets
import heart_icon from './icons/heart.svg';
import filled_heart from './icons/filled_heart.svg'

import Axios from 'axios'


const FavoriteButton = ({city}) => {

    const { favorites, setFavorites, user } = useContext(UserContext)

    const [hover, setHover] = useState(false)
    const [saving, setSaving] = useState(false)
    const [saved, setSaved] = useState(false)
    const id = user.id;
    
    useEffect(() => {

        (saved) ? saveToFavorites(city) : removeFromFavorites(city)
        
    }, [saved])
    
    const saveToFavorites = city => {
        if (!id) return;
        let cityReq = {city_id: city._id};
        Axios
            .post(`https://citrics-staging.herokuapp.com/api/users/favs/${id}`, cityReq)
            .then(response => {
                
                console.log(response)
                setFavorites([...favorites, city])
                setSaving(false)
            })
            .catch(error => console.log(error))
    }

    const removeFromFavorites = city => {
        if (!id) return;
        let cityReq = {city_id: city._id}
        console.log(cityReq)
        Axios
            .delete(`https://citrics-staging.herokuapp.com/api/users/favs/${id}`, { data: cityReq})
            .then(response => {
                console.log(response)
                setFavorites(favorites.filter(item =>  item !== city))
            })
    }


    return(
          
            
                <div className="heart-button" 
                    onClick={() => setSaved(!saved)}

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
                        <img style={{'width' : '23%'}} 
                        src={(saved) ? heart_icon : heart_icon} alt='add to favorites'/>
                </div>
        
    )
}

export default FavoriteButton; 



