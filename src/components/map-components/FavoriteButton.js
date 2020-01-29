import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from '../../contexts/UserContext'; 
//assets
import heart_icon from './icons/heart.svg';
import filled_heart from './icons/filled_heart.svg'
import signupArrow from './assets/signupArrow.svg'
import ReactGA from "react-ga";

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
            ReactGA.event({ category: 'User', 
            action: 'Added Favorite' });
            removeFromFavorites(city)
        }else{
            ReactGA.event({ category: 'User', 
            action: 'Removed Favorite' });
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
                        'width': '100px',
                        'justifyContent': 'space-around', 
                        'borderRadius': '5px',
                        'marginLeft' : 'auto',
                    }}
                    >
                        <img style={{'width' : '23%'}} 
                        src={favorites && favorites.includes(city._id) ? filled_heart : heart_icon} alt='add to favorites'/>

                        {hover === true && id === null && <div className="save-container-big" style={{
                            position: "absolute", 
                            // backgroundColor: "white",
                            // border:"1px solid #F8F8F9",
                            // // boxShadow: "1px 1px 1px #888888",
                            // borderRadius: "5px",
                            // padding: "0px 15px",
                            // width:'170px',
                            // fontSize:'1.7vh',
                            // textAlign: "center",
                            
                            // backgroundColor:"#2ca4fc",
                            // width:"200px",
                            // padding:"0px 15px",
                            // color:"white",
                            // // border:"1px solid red"
                            
                            }}>
                                <div className="save-container">
                                    <div className="save-title">Save your favorite cities.</div>
                                    <div className="save-desc"><a href="https://www.citrics.io/signup">Click here to get started </a><img className="save-img" src={signupArrow} alt="arrow"/></div>
                                </div>
                                {/* <p>Always have your cities on the go. <br /> Sign up to favorite cities for free.</p> */}
                        </div>}
                </div>
            </>
    )
}

export default FavoriteButton; 



