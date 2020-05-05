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
    <div className="data-browser">
      <div className="inner-search-container">
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
            <div className="general-stats-container">
              <GeneralStats ethData={selected} />
            </div>

            <div className="data-category">
              <div className="rent-container">
                <p className="chart-title">Average rent</p>
                <RentChart edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </div>

              <div className="home-container">
                <div className="homeprice-container">
                  <p className="chart-title">Home prices</p>
                  <HousePriceGraph selected={selected} />
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: zillow.com
                  </p>
                </div>

                <div className="ownerMortgage">
                  <OwnerCostCard ethData={selected} />
                </div>
              </div>

              <div className="rooms-vacancy-container">
                <div className="room-container">
                  <p className="chart-title">Average rooms per household</p>
                  <RoomGraph edData={selected} />
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>

                <div className="vacancy-owner-container">
                  <p className="chart-title">Vacancy</p>
                  <VacancyGraph edData={selected} />
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              </div>
            </div>

            <div className="data-category">
              <div className="industries-container">
                <p className="chart-title">Job industry</p>
                <Industry edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </div>

              <div className="salary-container">
                <p className="chart-title">Average salary</p>
                <BarGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </div>

              <div className="commute-travel-container">
                <div className="commute-container">
                  <p className="chart-title">Ways to commute</p>
                  <Commute edData={selected} />
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
                <div className="travel-container">
                  <TravelTime ethData={selected} />
                </div>
              </div>

              <div className="other-industries-container">
                <div className="unemployment-container">
                  <UnemploymentCard ethData={selected} />
                </div>

                <div className="retirement-container">
                  <p className="chart-title">Retirement income source</p>
                  <RetirementGraph ethData={selected} />
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              </div>
            </div>

            <div className="data-category">
              <div className="age-container">
                <p className="chart-title">Age distribution</p>
                <AgeDistributionGraph ethData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </div>

              <div className="ethnicity-container">
                <p className="chart-title">Diversity</p>
                <EthnicityGraph ethData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </div>

              <div className="education-container">
                <p className="chart-title">Education</p>
                <EducationGraph edData={selected} />
                <p style={{ textAlign: "right", fontSize: "10px" }}>
                  Source: U.S. Census (2018)
                </p>
              </div>

              <div className="population-birth-container">
                <div className="population-container">
                  <p className="chart-title">Population growth</p>
                  <Population selected={selected} />
                  <p style={{ textAlign: "right", fontSize: "10px" }}>
                    Source: U.S. Census (2018)
                  </p>
                </div>
              </div>

              <div className="avg-temp-container">
                <p className="chart-title">Historical temperature</p>
                <AvgTemp edData={selected} />
              </div>
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
