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
        <div>
            <h1>Costs of living analysis:</h1>
            <Route path="/map/housing/costs" component={() => <LineGraph selected = {selected} />} /> />
            <Route path="/map/housing/homeinfo"  render={ _ => <RoomGraph edData={selected} />} />
            <Route path="/map/housing/quality" render={ _ => <RentChart edData={selected} />} />
        </div>
    );
  };
  export default Housing;