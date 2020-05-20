import React from "react";
import AvgTemp from "./graphs/culture/tempAvg";
import MapSearch from "./MapSearch";
import HousePriceGraph from "./graphs/housing/House_price";
import RoomGraph from "./graphs/housing/HousingByRooms";
import RentChart from "./graphs/housing/RentChart";
import IndustryBarGraph from "./graphs/economics/IndustryBarGraph";
import IndustryLineGraph from "./graphs/economics/IndustryLineGraph.js";
import Commute from "./graphs/economics/commute";
import BarGraph from "./graphs/economics/HouseIncome_BarGraph";
import EthnicityGraph from "./graphs/culture/EthnicityGraph";
import Population from "./graphs/culture/PopulationGraph";
import EducationGraph from "./graphs/culture/EducationGraph";
import AgeDistributionGraph from "./graphs/culture/AgeDistrubution";
import RetirementGraph from "./graphs/economics/retirement";
import VacancyGraph from "./graphs/housing/vacancy";
import Unemployment from "./graphs/economics/Unemployment";
import Overview from "./overview/Overview";
import TravelTime from "./graphs/economics/TravelTimeCard";
import {
  OwnerCosts,
  OwnerCostsModalContent,
} from "./graphs/housing/OwnerCosts";

import Card from "../../card/Card.js";

import { navGrey } from "../../../utils/cityColors.js";

const DataDisplay = ({
  selected,
  cityMarkers,
  viewport,
  setViewport,
  cityIndex,
}) => {
  return (
    <div className="comparison-page-content-container">
      <div className="search-container">
        <MapSearch
          cityMarkers={cityMarkers}
          viewport={viewport}
          setViewport={setViewport}
          cityIndex={cityIndex}
        />
      </div>

      <div className="data-by-category">
        {selected.length > 0 ? (
          <>
            <Overview selected={selected} />

            <div className="data-category" id="housing">
              <Card title={"Home Prices"}>
                <HousePriceGraph selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: zillow.com
                </p>
              </Card>

              <Card title={"Average Rent"} gridColumn="6">
                <RentChart edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title="Average Rooms Per Household" gridColumn="6">
                <RoomGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title="Vacancy" gridColumn={9}>
                <VacancyGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card
                title={"Owner Costs"}
                modalContent={<OwnerCostsModalContent />}
                gridColumn={3}
              >
                <OwnerCosts selected={selected} />
              </Card>
            </div>

            <div className="data-category" id="industry">
              <Card title={"Average Salary"}>
                <BarGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Job Industry Breakdown"}>
                <IndustryBarGraph selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              {/* Array.every() returns true if every item meets the condition.
              This way if none of the cities have Industry Trend data the component won't even be rendered.  
              */}
              {selected.every((item, index, array) => {
                return !item["Industry_Trends"];
              }) ? (
                <></>
              ) : (
                <Card title={"Job Industry Trends"}>
                  <IndustryLineGraph selected={selected} />
                </Card>
              )}

              <Card title={"Ways to Commute"} gridColumn={9}>
                <Commute edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Average Commute"} gridColumn="3">
                <TravelTime selected={selected} />
              </Card>

              <Card title={"Unemployment"} gridColumn="3">
                <Unemployment selected={selected} />
              </Card>

              <Card title={"Retirement Income Source"} gridColumn="9">
                <RetirementGraph ethData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>
            </div>

            <div className="data-category" id="culture">
              <Card title={"Population Growth"}>
                <Population selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Age Distribution"}>
                <AgeDistributionGraph ethData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Diversity"}>
                <EthnicityGraph ethData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Education"}>
                <EducationGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>
            </div>
            <div className="data-category" id="weather">
              <Card title={"Historical Temperature"}>
                <AvgTemp edData={selected} />
              </Card>
            </div>
          </>
        ) : (
          <p className="map-prompt" style={{ color: navGrey }}>
            Select up to three cities to compare
          </p>
        )}
      </div>
    </div>
  );
};

export default DataDisplay;
