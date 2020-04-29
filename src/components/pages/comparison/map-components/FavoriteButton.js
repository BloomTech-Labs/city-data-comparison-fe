import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from '../../../../contexts/UserContext';
import { useHistory } from 'react-router-dom'
//assets
import heart_icon from './icons/heart.svg';
import filled_heart from './icons/filled_heart.svg'
import signupArrow from './assets/signupArrow.svg'
import ReactGA from "react-ga";
import Axios from 'axios'

const FavoriteButton = ({city}) => {
    const history = useHistory()
    const { favorites, setFavorites, user, axiosAuth } = useContext(UserContext)
    const [hover, setHover] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false)
    const [saving, setSaving] = useState(false)
    // const [saved, setSaved] = useState(false)
    const favcities = [{}];

    useEffect(() => {
        if (hover) {
            setTimeout(() => {
                setPopupOpen(true)
            }, 600)
        }
        else {
            setTimeout(() => {
                setPopupOpen(false)
            }, 300)
        }
       
    }, [hover])
    
    useEffect(() => {
        if (user) {
        axiosAuth()
            .get(`/api/users/favs`)
            .then(response => {
                response.data.forEach(cityid => {favcities.push(cityid.city_id)
                setFavorites([...favorites, ...favcities])})
            })
            .catch(error => console.log(error))
        }
    }, [])

   

    const toggle = () => {
        if (user) {
            if(favorites.includes(city._id)){
                removeFromFavorites(city)
            }else{
                saveToFavorites(city)
            }
        }
        else {
            history.push('/signup')
        }
    }
    const saveToFavorites = city => {
        if (!user) return;
        ReactGA.event({ category: 'User', action: `added city to favorites: ${city.name_with_com}` });
        let cityReq = {city_id: city._id};
        axiosAuth()
            .post(`/users/favs`, cityReq)
            .then(response => {
                setFavorites([...favorites, (city._id)])
                setSaving(false)
            })
            .catch(error => console.log(error))
    }
    const removeFromFavorites = city => {
        if (!user) return;
        let cityReq = {city_id: city._id}
        ReactGA.event({ category: 'User', action: `removed city from favorites: ${city.name_with_com}` });
        axiosAuth()
            .delete(`/users/favs`, { data: cityReq})
            .then(response => {
                setFavorites(favorites.filter(item =>  item !== city._id))
            })
            .catch(err => console.log(err))
    }
    return(
            <>
                <div className="heart-button" 
                    onClick={() => toggle()}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        'display': 'flex',
                        'cursor' : 'pointer',
                        'alignItems' : 'center',
                        'justifyContent' : 'spaceAround',
                        'background' : 'white',
                        'width': '1.4rem',
                        'justifyContent': 'space-around', 
                        'borderRadius': '0.3rem',
                        'margin': '0 0.3rem',
                        'margin-left': 'auto'
                    }}
                    >
                        <img style={{'width' : '100%'}} 
                        src={favorites && favorites.includes(city._id) ? filled_heart : heart_icon} alt='add to favorites'/>
                        {popupOpen === true && !user && <div className="save-container-big" style={{
                            'position': "absolute",
                            'bottom': '5rem'
                            }}>
                                <div className="save-container">
                                    <div className="save-title">Save your favorite cities.</div>
                                </div>
                        </div>}
                </div>
            </>
    )
}
export default FavoriteButton; 



