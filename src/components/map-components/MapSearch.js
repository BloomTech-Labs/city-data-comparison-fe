import React, {useState} from "react";

const MapSearch = ({search, onSearch, setSearch, cityMarkers, viewport, setViewport, toggleSelected}) => {
    const [suggestions, setSuggestions] = useState([]);
    const handleChange= e => {
        const searchText = e.target.value;
        searchText
        ? setSuggestions(cityMarkers.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase())))
        : setSuggestions([]);
        setSearch(searchText)
    };
    
    const chooseSuggestion = city => {
        setSearch(city.city);
        toggleSelected(city);
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