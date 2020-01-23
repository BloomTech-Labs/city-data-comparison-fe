import React from 'react'; 
import CitySelection from './CitySelection'
const FavCard = props => {
    return (
        <div className="favcard">
            {props.selected.map( city => <CitySelection city={city}/>)}
        </div>
    )
}

export default FavCard