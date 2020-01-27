import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {UserContext} from "../../contexts/UserContext"
import GeneralStats from "../graphs/GeneralStats";

const Favorites = ()=> {

    const { user, setUser } = useContext(UserContext);
    //state for saved cities for specific user
    const [savedCitiesId, setSavedCitiesId] = useState();
    const [savedCities, setSavedCities] = useState([]);
    console.log('Saved cities url',savedCitiesUrl)
    console.log('Saved cities array state',savedCities)

        //Users saved cities axios call
        useEffect(() => {
            axios
                .get(`https://citrics-staging.herokuapp.com/api/favs/${user.id}`)
                .then(res => {
                    console.log('Response to get users saved cities urls',res)
                    setSavedCitiesId(res.data)
                    //Once savedCitiesUrl is set, this call will take that information and call our DS db for the acutal information for each city
                    savedCitiesId.forEach(city => {
                    axios
                        .get(`https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/${city}`)
                        .then(res => {
                            console.log('Response from getting array of all saved cities', res)
                            setSavedCities(res.data)
                        })
                        .catch(err => {
                            console.error('Error calling DS db', err)
                        })
                    })
                })
                .catch(err => {
                    console.error('Unable to get saved cities list', err);
                })
        }, []);

        
    //delete saved city handler
    const handleDelete = id => {
        e.preventDefault();
        axios
            .delete(`https://citrics-staging.herokuapp.com/api/favs`, id)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error('Error removing city', err);
            })
    };

    return (
        <div>
            <h2>Favorites Page</h2>
            {savedCities.forEach(city => {
                <>
                    <GeneralStats ethData={city}/>
                    <button onClick={handleDelete(city.id)}>Remove</button>
                </>
            })}
        </div>
    )
}

export default Favorites;