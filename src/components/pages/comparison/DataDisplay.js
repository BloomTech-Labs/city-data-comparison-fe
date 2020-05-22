import React from "react";
import Temperature from "./graphs/culture/Temperature";
import MapSearch from "./MapSearch";
import AverageHomePrices from "./graphs/housing/AverageHomePrices.js";
import RoomGraph from "./graphs/housing/HousingByRooms";
import AverageRent from "./graphs/housing/AverageRent";
import IndustryBarGraph from "./graphs/economics/IndustryBarGraph";
import IndustryLineGraph from "./graphs/economics/IndustryLineGraph.js";
import Commute from "./graphs/economics/commute.js";
import BarGraph from "./graphs/economics/AverageSalary";
import Diversity from "./graphs/culture/Diversity";
import Population from "./graphs/culture/PopulationGraph";
import EducationGraph from "./graphs/culture/EducationGraph";
import AgeDistributionGraph from "./graphs/culture/AgeDistrubution";
import RetirementGraph from "./graphs/economics/retirement";
import Vacancy from "./graphs/housing/vacancy";
import Unemployment from "./graphs/economics/Unemployment";
import Overview from "./overview/Overview";
import AverageTravelTime from "./graphs/economics/AverageTravelTime";
import {
  OwnerCosts,
  OwnerCostsModalContent,
} from "./graphs/housing/OwnerCosts";

import GraphCard from "./graphs/card/GraphCard.js";

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
              <GraphCard title={"Home Prices"}>
                <AverageHomePrices selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: zillow.com
                </p>
              </GraphCard>

              <GraphCard title={"Average Rent"} gridColumn="6">
                <AverageRent edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard title="Average Rooms Per Household" gridColumn="6">
                <RoomGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard title="Vacancy" gridColumn={9}>
                <Vacancy edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard
                title={"Owner Costs"}
                modalContent={<OwnerCostsModalContent />}
                modalTitle={"Selected Monthly Owner Costs"}
                gridColumn={3}
              >
                <OwnerCosts selected={selected} />
              </GraphCard>
            </div>

            <div className="data-category" id="industry">
              <GraphCard title={"Average Salary"}>
                <BarGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard title={"Job Industry Breakdown"}>
                <IndustryBarGraph selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              {/* Array.every() returns true if every item meets the condition.
              This way if none of the cities have Industry Trend data the component won't even be rendered.  
              */}
              {selected.every((item, index, array) => {
                return !item["Industry_Trends"];
              }) ? (
                <></>
              ) : (
                <GraphCard title={"Job Industry Trends"}>
                  <IndustryLineGraph selected={selected} />
                </GraphCard>
              )}

              <GraphCard title={"Ways to Commute"} gridColumn={9}>
                <Commute edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard title={"Average Commute"} gridColumn="3">
                <AverageTravelTime selected={selected} />
              </GraphCard>

              <GraphCard title={"Unemployment"} gridColumn="3">
                <Unemployment selected={selected} />
              </GraphCard>

              <GraphCard title={"Retirement Income Source"} gridColumn="9">
                <RetirementGraph selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>
            </div>

            <div className="data-category" id="culture">
              <GraphCard title={"Population Growth"}>
                <Population selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard title={"Age Distribution"}>
                <AgeDistributionGraph ethData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard title={"Diversity"}>
                <Diversity selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>

              <GraphCard title={"Education"}>
                <EducationGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </GraphCard>
            </div>
            <div className="data-category" id="weather">
              <GraphCard title={"Historical Temperature"}>
                <Temperature selected={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: NOAA
                </p>
              </GraphCard>
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
