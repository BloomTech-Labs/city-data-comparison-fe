import React, {useState} from "react";

const MapSearch = ({search, onSearch, setSearch, cityMarkers, viewport, setViewport}) => {
    const [suggestions, setSuggestions] = useState([]);
    const handleChange= e => {
        const searchText = e.target.value;
        searchText
        ? setSuggestions(cityMarkers.filter(city => city.city.toLowerCase().includes(searchText.toLowerCase())))
        : setSuggestions([]);
        setSearch(searchText)
    };
    
    const chooseSuggestion = city => {
        setSearch(city.city);
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
                        name="search"
                        placeholder="Search" 
                        onChange={handleChange} 
                        value={search}
            />
            {suggestions.map(item =>
                <li className="autofill-option" key={item.lat} onClick={() => chooseSuggestion(item)}>{item.city}</li>    
            )}
        </form>
    )
}

export default MapSearch;