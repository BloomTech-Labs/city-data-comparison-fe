import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Favorites = ()=> {

    //state for saved cities for specific user
    const [savedCitiesUrl, setSavedCitiesUrl] = useState();
    const [savedCities, setSavedCities] = useState([]);
    console.log('Saved cities url',savedCitiesUrl)
    console.log('Saved cities array state',savedCities)

        //Users saved cities axios call
        useEffect(() => {
            axios
                .get('')
                .then(res => {
                    console.log('Response to get users saved cities urls',res)
                    setSavedCitiesUrl(res.data)
                    //Once savedCitiesUrl is set, this call will take that information and call our DS db for the acutal information for each city
                    axios
                        .get(setSavedCitiesUrl)
                        .then(res => {
                            console.log('Response from getting array of all saved cities', res)
                            setSavedCities(res.data)
                        })
                        .catch(err => {
                            console.error('Error calling DS db', err)
                        })
                })
                .catch(err => {
                    console.error('Unable to get saved cities list', err);
                })
        }, []);

        
    //delete saved city handler
    const handleDelete = e => {
        e.preventDefault();
        axios
            .delete(``)
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
        </div>
    )
}

export default Favorites;