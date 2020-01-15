import React, {useEffect} from "react";
import ReactGA from "react-ga";
import {Route} from "react-router-dom";
import LineGraph from "../graphs/housing/House_price";
import RoomGraph from "../graphs/housing/HousingByRooms";
import RentChart from "../graphs/housing/RentChart";

const Housing = ({selected}) => {
    useEffect( _ => {
        ReactGA.event({ category: 'Data', 
        action: 'loaded housing data' });
    },[])
    
    return (
        <div />
    );
  };
  export default Housing;