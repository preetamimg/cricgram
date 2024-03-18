import React, { useEffect, useState } from "react";
import CurrentSeries from "components/currentSeries";
import MatchCard from "components/matchCard";
import filterIcon from "assets/img/filter.svg";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import HeroBanner from "components/heroBanner";
import AdsComp from "components/ads";
import { getAPI } from "utils/services";
import { API_ROUTES, ROUTE_CONST } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

const venue = [
  {
    id: "venue1",
    name: "Mission Road Ground, Mong Kok, Hong Kong",
  },
  {
    id: "venue2",
    name: "Judges Field, Guwahati, India",
  },
];

const team = [
  {
    id: "team1",
    name: "Hong Kong",
  },
  {
    id: "team2",
    name: "Papua New Guinea",
  },
  {
    id: "team3",
    name: "91 Yard Club Women",
  },
  {
    id: "team4",
    name: "New Star Club Women",
  },

  {
    id: "team1",
    name: "Hong Kong",
  },
  {
    id: "team2",
    name: "Papua New Guinea",
  },
  {
    id: "team3",
    name: "91 Yard Club Women",
  },
  {
    id: "team4",
    name: "New Star Club Women",
  },
];

const series = [
  {
    id: "series1",
    name: "Hong Kong T20I Tri-Series",
  },
  {
    id: "series2",
    name: `Guwahati Women's T20 League`,
  },
];

const tabObject={
    [ROUTE_CONST.CRICKET_MATCH_RESULTS]:"Completed",
    [ROUTE_CONST.CRICKET_UPCOMING_MATCHES_SCHEDULE]:"Scheduled",
    [ROUTE_CONST.LIVE_CRICKET_SCORES]:"live"
}

const HomeLayout = ({ Content }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [matchListData, setMatchListData] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  
  const { pathname } = useLocation()
  
  const [status, setStatus] = useState(tabObject[pathname]);
  const [category, setCategory] = useState("international");
  
  
  const navigate = useNavigate();

  const handleClearFilter = () => {
    setSelectedVenue("");
    setSelectedTeam("");
    setSelectedSeries("");
  };



  const getMatches = async () => {
    setIsLoading(true);
    try {
      const res = await getAPI(
        `${API_ROUTES.GET_MATCHES_DATA}/${category}/${status}?page=${currentPage}&pageSize=20`
      );

      console.log({ res });

      setMatchListData(res?.data?.data);
      setPageCount(res?.data?.pageCount);
    } catch (error) {
      console.log({ error });
      setMatchListData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getMoreMatches = async () => {
    setLoadMoreLoading(true);
    try {
      const res = await getAPI(
        `${API_ROUTES.GET_MATCHES_DATA}/${category}/${status}?page=${currentPage}&pageSize=20`
      );

      console.log({ res });

      setMatchListData((prev) => [...prev, ...res.data.data]);
      setPageCount(res?.data?.pageCount);
    } catch (error) {
      console.log({ error });
      setMatchListData([]);
    } finally {
      setLoadMoreLoading(false);
    }
  };

  useEffect(() => {
    getMatches();
  }, [status, category]); //eslint-disable-line

  useEffect(() => {
    if (currentPage !== 1) {
      getMoreMatches();
    }
  }, [currentPage]); //eslint-disable-line

  useEffect(()=>{
    setStatus(tabObject[pathname]);
  },[pathname]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <HeroBanner />
      <div className="container-fluid my-4">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="commonTabs mb-2 mb-md-3">
                <div
                  onClick={() => {
                    // setStatus("live");
                    setCurrentPage(1);
                    navigate(ROUTE_CONST.LIVE_CRICKET_SCORES);
                  }}
                  className={`tab ${status === "live" ? "active" : ""}`}
                >
                  Live
                </div>
                <div
                  onClick={() => {
                    // setStatus("Scheduled");
                    setCurrentPage(1);
                    navigate(ROUTE_CONST.CRICKET_UPCOMING_MATCHES_SCHEDULE);
                  }}
                  className={`tab ${status === "Scheduled" ? "active" : ""}`}
                >
                  upcoming
                </div>
                <div
                  onClick={() => {
                    // setStatus("Completed");
                    setCurrentPage(1);
                    navigate(ROUTE_CONST.CRICKET_MATCH_RESULTS);
                  }}
                  className={`tab ${status === "Completed" ? "active" : ""}`}
                >
                  recent
                </div>
              </div>

              <div className="row gx-2 gx-md-3 mb-3">
                <div className="col filterTabCol">
                  <div className="commonTabs commonInnerTabs">
                    <div
                      onClick={() => {
                        setCategory("international");
                        setCurrentPage(1);
                      }}
                      className={`tab ${
                        category === "international" ? "active" : ""
                      }`}
                    >
                      international
                    </div>
                    <div
                      onClick={() => {
                        setCategory("league");
                        setCurrentPage(1);
                      }}
                      className={`tab ${category === "league" ? "active" : ""}`}
                    >
                      league
                    </div>
                    <div
                      onClick={() => {
                        setCategory("domestic");
                        setCurrentPage(1);
                      }}
                      className={`tab ${
                        category === "domestic" ? "active" : ""
                      }`}
                    >
                      domestic
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="filterBtn"></div>
                </div>

                <div className="col-12 filterBtnAccordian">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <img src={filterIcon} alt="" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="row g-2 g-md-3">
                          <div className="col-md col-6 customDropdown">
                            <Dropdown>
                              <Dropdown.Toggle id="venue">
                                <div className="innerTxt">
                                  {selectedVenue
                                    ? selectedVenue
                                    : "Select Venue"}
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {venue?.map((item) => (
                                  <Dropdown.Item
                                    as="button"
                                    onClick={() => setSelectedVenue(item?.name)}
                                    className={`dropdownItem ${
                                      selectedVenue?.trim()?.toLowerCase() ===
                                      item?.name?.trim()?.toLowerCase()
                                        ? "active"
                                        : ""
                                    }`}
                                    key={item?.id}
                                  >
                                    {item?.name}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>

                          <div className="col-md col-6 customDropdown">
                            <Dropdown>
                              <Dropdown.Toggle id="team">
                                <div className="innerTxt">
                                  {selectedTeam ? selectedTeam : "Select Team"}
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {team?.map((item) => (
                                  <Dropdown.Item
                                    as="button"
                                    onClick={() => setSelectedTeam(item?.name)}
                                    className={`dropdownItem ${
                                      selectedTeam?.trim()?.toLowerCase() ===
                                      item?.name?.trim()?.toLowerCase()
                                        ? "active"
                                        : ""
                                    }`}
                                    key={item?.id}
                                  >
                                    {item?.name}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>

                          <div className="col-md col-6 customDropdown">
                            <Dropdown>
                              <Dropdown.Toggle id="series">
                                <div className="innerTxt">
                                  {selectedSeries
                                    ? selectedSeries
                                    : "Select Series"}
                                </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {series?.map((item) => (
                                  <Dropdown.Item
                                    as="button"
                                    onClick={() =>
                                      setSelectedSeries(item?.name)
                                    }
                                    className={`dropdownItem ${
                                      selectedSeries?.trim()?.toLowerCase() ===
                                      item?.name?.trim()?.toLowerCase()
                                        ? "active"
                                        : ""
                                    }`}
                                    key={item?.id}
                                  >
                                    {item?.name}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>

                          <div className="col-md-auto col-6">
                            <div
                              onClick={handleClearFilter}
                              className="commonBtn"
                            >
                              Clear
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              {/* Content-------------------------------------------------------------------> */}
                
                <Content 
                    isLoading={isLoading} 
                    matchListData={matchListData} 
                    pageCount={pageCount} 
                    currentPage={currentPage} 
                    loadMoreLoading={loadMoreLoading} 
                    handleLoadMore={handleLoadMore} 
                />

              {/* Content-------------------------------------------------------------------> */}
            </div>
            <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <CurrentSeries />
              {/* <AdsComp /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
