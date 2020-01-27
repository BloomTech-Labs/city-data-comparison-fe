import React, {useState, useContext, useEffect} from 'react'

/***media***/
import heart_icon from './icons/heart.svg';
import filled_heart from './icons/filled_heart.svg'


import {CityContext} from '../../contexts/CityContext'
import FavCard from './FavCard'
import Axios from 'axios'

import Drop from 'tether-drop'
import { Portal } from 'react-portal'

import CitySelection from './CitySelection'
import {UserContext } from '../../contexts/UserContext'; 

import pointer from '../dashboard/assets/pointer.svg'
import delete_icon from './icons/close_red.png'; 
//add icon
import add_icon from './icons/add_icon.svg';
//city pointer icon



const FavoriteButton = props => {

    const {selected} = useContext(CityContext)
    const newSelection = selected; 
    const [hover, setHover] = useState(false)
    const [saving, setSaving] = useState(false)
    const [remove, setRemove] = useState(false); 
    const id = localStorage.getItem('id')

    const favRef = React.createRef();
    const favCard = React.createRef(); 
    
        window.onload = () => {
        const popup = new Drop({
        target: favRef.current,
        content: favCard.current,
        position: 'top center',
        openOn: 'hover', 
        hoverCloseDelay: 0, 
        remove: true
        })

        
    }
     
    
    
    const saveFavorites = () => {
        Axios
            .post(`https://citrics-staging.herokuapp.com/api/favs/${id}`, selected)
            .then(response => {
                
                console.log(response)
                setSaving(false)
            })
            .catch(error => console.log(error))
    }

    return(

        <div className="favContainer" >
          
            <div className="heartButtonContainer" 
                style={{
                    'background' : '#F2F9FD',
                    'padding' : '2% 5% 0% 0%'
                }}>
            
                <div className="heart-button" 
                    ref={favRef}
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
                        <p>Favorites</p>
                </div>
            </div>
            <Portal>
                <div className="favcard" style={{'width' : '40vh', 'marginRight': '15%', 'borderRadius' : '10px'}} ref={favCard}>
                    
                    {
                        newSelection.map( (city, index) => {
                         return (
                         
                         <div className='favoriteCitiesSelection'style={{
                        'display' : 'flex', 
                        'justifyContent' : 'space-between', 
                        'alignItems' : 'center', 
                        'alignContent': 'center',
                        'height': '2rem',
                        'background':'white',
                        'padding': '2%',
                        'width' : '100%', 
                        
            
                        
                        }}>
                            <div className='pointerIcon' style={{ 'width' : '4%'}}>
                                <img src={pointer} style={{'width' : '100%'}} alt={city.name_with_com}/>
                            </div>
                
                            <p style={{'width' : '60%'}}>{city.name_with_com}</p>
                            
                            <div className="favoritesIcon" style={{'width' : '4%'}} onClick={() => {
                                setRemove(!remove);
                                newSelection.splice(index, 1)
                                
                                }}>
                                <img style={{'width':'100%', 'cursor':'pointer'}} src={(!remove) ? delete_icon : add_icon}/>
                            </div>
                            
                        </div>)
                    
                    
                        })}
                
                    
                    
                </div>
            </Portal>
        </div>
        
    )
}

export default FavoriteButton; 



