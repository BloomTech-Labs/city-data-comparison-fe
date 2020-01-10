import React from "react";
import {Route} from "react-router-dom";
import LineGraph from "../graphs/housing/House_price";
import RoomGraph from "../graphs/housing/HousingByRooms";
import RentChart from "../graphs/housing/RentChart";

const Housing = ({selected}) => {
    return (
        <div>
            <h1>Costs of living analysis:</h1>
            
            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}

            <Route path="/map/housing/costs" component={() => <LineGraph selected = {selected} />} />
    <Route path="/map/housing/homeinfo"  render={ _ => <RoomGraph edData={selected} />} />
            <Route path="/map/housing/quality" render={ _ => <RentChart edData={selected} />} />
        </div>
    );
  };
  export default Housing;