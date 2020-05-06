import React from "react";
import ReactGA from "react-ga";
import AvgTemp from "./graphs/culture/tempAvg";
import MapSearch from "./MapSearch";
import HousePriceGraph from "./graphs/housing/House_price";
import RoomGraph from "./graphs/housing/HousingByRooms";
import RentChart from "./graphs/housing/RentChart";
import Industry from "./graphs/economics/industries";
import Commute from "./graphs/economics/commute";
import BarGraph from "./graphs/economics/HouseIncome_BarGraph";
import EthnicityGraph from "./graphs/culture/EthnicityGraph";
import Population from "./graphs/culture/PopulationGraph";
import EducationGraph from "./graphs/culture/EducationGraph";
import AgeDistributionGraph from "./graphs/culture/AgeDistrubution";
import RetirementGraph from "./graphs/economics/retirement";
import VacancyGraph from "./graphs/housing/vacancy";
import UnemploymentCard from "./graphs/economics/unemploymentCard";
import GeneralStats from "./overview/GeneralStats";
import TravelTime from "./graphs/economics/TravelTimeCard";
import OwnerCostCard from "./graphs/housing/OwnerCostCard";

import Card from "../../card/Card.js";

const DataDisplay = ({
  selected,
  cityMarkers,
  viewport,
  setViewport,
  cityIndex,
}) => {
  const dataNavClicked = (link) => {
    ReactGA.event({ category: "Data", action: `clicked ${link} link` });
  };

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
            <GeneralStats ethData={selected} />

            <div className="data-category">
              <Card title={"Average Rent"}>
                <RentChart edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Home Prices"}>
                <HousePriceGraph selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: zillow.com
                </p>
              </Card>

              <OwnerCostCard ethData={selected} />

              <Card title="Average Rooms Per Household">
                <RoomGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title="Vacancy">
                <VacancyGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>
            </div>

            <div className="data-category">
              <Card title={"Job Industry"}>
                <Industry edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Average Salary"}>
                <BarGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <Card title={"Ways to Commute"}>
                <Commute edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>

              <TravelTime ethData={selected} />

              <UnemploymentCard ethData={selected} />

              <Card title={"Retirement Income Source"}>
                <RetirementGraph ethData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </Card>
            </div>

            <div className="data-category">
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

                <Card title={"Population Growth"}>
                <Population selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
                </Card>

                <Card title={"Historical Temperature"}>
                <AvgTemp edData={selected} />
                </Card>
            </div>
          </>
        ) : (
          <p className="map-prompt">Select up to three cities to compare.</p>
        )}
      </div>
    </div>
  );
};

export default DataDisplay;
