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

import pointer from '../dashboard/assets/pointer.svg'



const FavoriteButton = props => {

    const {selected} = useContext(CityContext)
    const [hover, setHover] = useState(false)
    const [saving, setSaving] = useState(false)

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
            .post(`https://citrics-staging.herokuapp.com/api/favs/`, selected)
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
                        'marginRight' : '4%'
                    
                    }}
                    >
                        <img src={(hover) ? filled_heart : heart_icon} alt='add to favorites'/>
                        <p>Favorites</p>
                </div>
            </div>
            <Portal>
                <div className="favcard" style={{'width' : '40vh', 'marginRight': '15%'}} ref={favCard}>
                    
                    {selected.map( city => <CitySelection  key={Math.random()}  city={city}/>)}
                </div>
            </Portal>
        </div>
    )
}

export default FavoriteButton; 

/*

onMouseLeave={ () => setHover(false) } 
                    onClick={ () => {
                        setSaving(true)
                        saveFavorites()
                    }}
                    onMouseEnter={() =>{ 
                        setHover(true)}} 
*/