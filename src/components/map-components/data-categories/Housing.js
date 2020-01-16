import React from "react";
import LineGraph from "../../graphs/housing/House_price";
import RoomGraph from "../../graphs/housing/HousingByRooms";
import RentChart from "../../graphs/housing/RentChart";

const Housing = ({selected}) => {

    return (
        <div className="housing-graphs data-category">
            <h3>Housing:</h3>
            {/* <span id="homeprice"><LineGraph selected = {selected} /></span> */}
            <span id="rent"><RentChart edData={selected} /></span>
            <span id="rooms"><RoomGraph edData={selected} /></span>
        </div> 
    )
}
export default Housing;