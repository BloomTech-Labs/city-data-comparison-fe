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
    // const [saved, setSaved] = useState(false)
    const favcities = [{}];
    let id = null;

    if(user != null){
        id = user.id;
    } else {
        id = null;
    }
    
    useEffect(() => {

        Axios
            .get(`https://citrics-staging.herokuapp.com/api/users/favs/${id}`)
            .then(response => {
                console.log(response)
                response.data.forEach(cityid => {favcities.push(cityid.city_id)
                setFavorites([...favorites, ...favcities])})
                console.log(favorites)
            })
            .catch(error => console.log(error))

    }, [])  

    const toggle = () => {
        if(favorites.includes(city._id)){
            removeFromFavorites(city)
        }else{
            saveToFavorites(city)
        }
    }
    
    const saveToFavorites = city => {
        if (!id) return;
        let cityReq = {city_id: city._id};
        Axios
            .post(`https://citrics-staging.herokuapp.com/api/users/favs/${id}`, cityReq)
            .then(response => {
                
                console.log(response)
                setFavorites([...favorites, (city._id)])
                console.log(favorites)
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
                setFavorites(favorites.filter(item =>  item !== city._id))
            })
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
                        'width': '10%',
                        'justifyContent': 'space-around', 
                        'borderRadius': '10px',
                        'fontWeight': '500',
                        'marginLeft' : 'auto',
                    }}
                    >
                        <img style={{'width' : '23%'}} 
                        src={favorites.includes(city._id) ? filled_heart : heart_icon} alt='add to favorites'/>

                        {hover === true && id === null && <div style={{
                            position: "absolute", 
                            backgroundColor: "white",
                            boxShadow: "5px 10px 8px #888888",
                            borderRadius: "5px",
                            padding: "0px 10px",
                            textAlign: "center"}}>
                                <p>Sign up or Log in to favorite cities!</p>
                        </div>}
                </div>
            </>
    )
}

export default FavoriteButton; 



