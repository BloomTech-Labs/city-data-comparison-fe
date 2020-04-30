import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactGA from "react-ga";
import { getCity } from "../../../../redux/actions/cityActions.js";
const MapSearch = ({
  cityMarkers,
  viewport,
  setViewport,
  cityIndex,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const selectSearch = (cityMarker) => {
    // Stop function and return if the city is already selected
    dispatch(getCity(cityMarker));
  };

  //WORKS WITH THE SEARCH BAR ON LEFT
  const onSearch = (e) => {
    e.preventDefault();
    const found = cityMarkers.find(
      (item) => item.name.replace(" city", "") === search
    );
    if (found) {
      selectSearch(found);
      // the viewport set below will require zoom handling based on population
      setViewport({
        ...viewport,
        longitude: found.lng,
        latitude: found.lat,
      });
    } else {
      dispatch(getCity(search));
    }
  };

  const handleChange = (e) => {
    const searchText = e.target.value;
    searchText
      ? setSuggestions(
          topPopFilter(
            cityIndex.filter((city) =>
              city.name.toLowerCase().includes(searchText.toLowerCase())
            )
          )
        )
      : setSuggestions([]);
    setSearch(searchText);
  };

  const topPopFilter = (arr) => {
    let sorted = arr.sort(
      (city1, city2) => city2.population - city1.population
    );
    if (sorted.length > 5) {
      sorted = sorted.slice(0, 8);
    }
    return sorted;
  };

  const chooseSuggestion = (city) => {
    ReactGA.event({ category: "Search", action: `used autofill` });
    setSearch(city.name.replace(" city", ""));
    selectSearch(city);
    setSuggestions([]);
    setViewport({
      ...viewport,
      longitude: city.lng,
      latitude: city.lat,
    });
  };

  return (
    <form className="search-form" autoComplete="off" onSubmit={onSearch}>
      <input
        className={"search-bar " + (suggestions.length ? "active" : "")}
        placeholder="Search up to 3 cities"
        onChange={handleChange}
        value={search}
        data-testid="map-search"
      />

      <div className={suggestions.length ? "autofill-container" : null}>
        <div className={suggestions.length ? "border-line" : null} />
        {suggestions.map((item) => (
          <li
            className="autofill-option"
            key={item.lat}
            onClick={() => chooseSuggestion(item)}
          >
            {item.name.replace(" city", "")}
          </li>
        ))}
      </div>
    </form>
  );
};

export default MapSearch;
