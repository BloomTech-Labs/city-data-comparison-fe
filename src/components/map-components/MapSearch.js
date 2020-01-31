import React, {useState} from "react";
import ReactGA from "react-ga";


const MapSearch = ({menu, search, onSearch, setSearch, cityMarkers, viewport, setViewport,selectSearch, cityIndex}) => {


    const [suggestions, setSuggestions] = useState([]);
    const handleChange= e => {
        const searchText = e.target.value;
        searchText
        ? setSuggestions(topPopFilter(cityIndex.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase()))))
        : setSuggestions([]);
        setSearch(searchText)
    };

    const topPopFilter = arr => {
        let sorted = arr.sort((city1, city2) => city2.population - city1.population);
        if (sorted.length > 5) {
          sorted = sorted.slice(0,8)
        }
        return sorted;
      }
    
    const chooseSuggestion = city => {
        ReactGA.event({ category: 'Search', 
        action: `used autofill` });
        setSearch(city.name.replace(" city", ""));
        selectSearch(city);
        setSuggestions([]);
        setViewport({
            ...viewport,
            longitude: city.lng,
            latitude: city.lat
          })
    }
    
    return(
        <form autoComplete="off" onSubmit={onSearch}>
            <input
                        className={`search-bar ${menu}`}
                        placeholder="Search up to 3 cities" 
                        onChange={handleChange} 
                        value={search}
            />
            <div className="autofill-container">
                {suggestions.map(item =>
                    <li 
                        className="autofill-option" 
                        key={item.lat} 
                        onClick={() => chooseSuggestion(item)}>
                        {item.name.replace(" city" , "")}
                    </li>    
                )}
            </div>
        </form>
    )
}

export default MapSearch;