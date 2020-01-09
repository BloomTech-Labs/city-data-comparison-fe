import React from "react";
import {Route} from "react-router-dom";
import BarGraph from "../graphs/housing/HouseIncome_BarGraph";
import LineGraph from "../graphs/housing/House_price";
import RoomGraph from "../graphs/housing/HousingByRooms";
import RentChart from "../graphs/housing/RentChart";

const Housing = ({selected}) => {
    return (
        <div>
            <h1>Costs of living analysis:</h1>
            
            {selected.map(item => <h3 key={item._id}>{item.name.replace(" city" , "")}</h3>)}

            <Route path="/map/housing/housing" component={() => <BarGraph selected = {selected} />} />
            <Route path="/map/housing/grocery" component={LineGraph}/>
            <Route path="/map/housing/dining" component={RoomGraph}/>
            <Route path="/map/housing/transportation" component={RentChart}/>
        </div>
    );
  };
  export default Housing;