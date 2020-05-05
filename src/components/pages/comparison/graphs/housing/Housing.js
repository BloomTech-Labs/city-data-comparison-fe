import React from "react";

import RoomGraph from "../../graphs/housing/HousingByRooms";
import RentChart from "../../graphs/housing/RentChart";

const Housing = ({selected}) => {

    return (
        <div className="housing-graphs data-category">
            <h3>Housing:</h3>
            <RentChart edData={selected} />
            <RoomGraph edData={selected} />
        </div> 
    )
}
export default Housing;