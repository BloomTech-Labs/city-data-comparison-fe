import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {UserContext} from "../../contexts/UserContext"
import GeneralStats from "../graphs/GeneralStats";

const Favorites = ()=> {

    const { user, setUser, axiosAuth } = useContext(UserContext);
    //state for saved cities for specific user
    const [savedCitiesId, setSavedCitiesId] = useState();
    const [savedCities, setSavedCities] = useState([]);


        //Users saved cities axios call
        useEffect(() => {
            axiosAuth()
                .get(`https://be.citrics.io/api/users/favs/${user.id}`)
                .then(res => {
                    const favArray = [];
                    res.data.forEach(city => {
                        axios
                            .get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${city.city_id}`)
                            .then(res => {
                                favArray.push(res.data)
                            }).then(_ => setSavedCities([...savedCities, ...favArray]))
                            .catch(err => {
                                console.error('Error calling DS db', err)
                            })
                        })
                    //Once savedCitiesUrl is set, this call will take that information and call our DS db for the acutal information for each city
                    
                })
                .catch(err => {
                    console.error('Unable to get saved cities list', err);
                })
        }, []);

        
    //delete saved city handler
    const handleDelete = id => {
        // id.preventDefault();
        axiosAuth()
            .delete(`https://be.citrics.io/api/users/favs`, id)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error('Error removing city', err);
            })
    };

    return (
        <div className="favorites">
            <h2>Favorites </h2>
                    <GeneralStats ethData={savedCities}/>
        </div>
    )
}

export default Favorites;