import React, {useState} from "react";


const MapSearch = ({menu, search, onSearch, setSearch, cityMarkers, viewport, setViewport,selectSearch}) => {


    const [suggestions, setSuggestions] = useState([]);
    const handleChange= e => {
        const searchText = e.target.value;
        searchText
        ? setSuggestions(cityMarkers.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase())))
        : setSuggestions([]);
        setSearch(searchText)
    };
    
    
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
                        placeholder="Search" 
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