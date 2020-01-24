import React, {useContext} from 'react'; 
import CitySelection from './CitySelection'

import { CityContext } from '../../contexts/CityContext';

const FavCard = props => {
    const {selected} = useContext(CityContext); 

    return (
        <div className="favcard"style={{
            'width' : '30%',
            'position' : 'absolute',
            'left': '68%',
            'zIndex': '9999',
            'bottom': '27%', 
            
        }}>
            {selected.map( city => <CitySelection  key={Math.random()}  city={city}/>)}
        </div>
    )
}

export default FavCard