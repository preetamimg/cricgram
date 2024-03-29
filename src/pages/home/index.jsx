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
import { useNavigate, useSearchParams } from "react-router-dom";
import MatchLoaderCard from "components/matchCard/MatchLoaderCard";
import NoDataFound from "components/noData";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(
    searchParams.get("status") || "Completed"
  );
  const [category, setCategory] = useState("international");
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [matchListData, setMatchListData] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [filtersData, setFiltersData] = useState({});


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

      setMatchListData((prev) => [...prev, ...res.data.data]);
      setPageCount(res?.data?.pageCount);
    } catch (error) {
      console.log({ error });
      setMatchListData([]);
    } finally {
      setLoadMoreLoading(false);
    }
  };

  


  const getFilterData = async () => {
    try {
      const res = await getAPI(`${API_ROUTES?.GET_MATCH_FILTER}/${category}/${status}`);
      setFiltersData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getMatches();
    getFilterData();
  }, [status, category]); //eslint-disable-line


  useEffect(() => {
    if (currentPage !== 1) {
      getMoreMatches();
    }
  }, [currentPage]); //eslint-disable-line

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const getMatches = async () => {
      setIsLoading(true);
      try {
        const res = await getAPI(
          `${API_ROUTES.GET_MATCHES_DATA}/${category}/${status}?page=${currentPage}&pageSize=20&venue=${selectedVenue}&team=${selectedTeam}&series=${selectedSeries}`
        );

        setMatchListData(res?.data?.data);
        setPageCount(res?.data?.pageCount);
      } catch (error) {
        console.log({ error });
        setMatchListData([]);
      } finally {
        setIsLoading(false);
      }
    };
    getMatches();
  }, [selectedVenue, selectedTeam, selectedSeries]);//eslint-disable-line

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
                  className={`tab ${status === "Live" ? "active" : ""}`}
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
                    <div
                      onClick={() => {
                        setCategory("women");
                        setCurrentPage(1);
                      }}
                      className={`tab ${category === "women" ? "active" : ""}`}
                    >
                      Women
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
                              {filtersData?.venues?.map((item) => (
                                  <Dropdown.Item
                                    as="button"
                                    onClick={() => setSelectedVenue(item)}
                                    className={`dropdownItem ${
                                      selectedVenue?.trim()?.toLowerCase() ===
                                      item?.trim()?.toLowerCase()
                                        ? "active"
                                        : ""
                                    }`}
                                    key={item}
                                  >
                                    {item}
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
                              {filtersData?.teams?.map((item) => (
                                  <Dropdown.Item
                                    as="button"
                                    onClick={() => setSelectedTeam(item)}
                                    className={`dropdownItem ${
                                      selectedTeam?.trim()?.toLowerCase() ===
                                      item?.trim()?.toLowerCase()
                                        ? "active"
                                        : ""
                                    }`}
                                    key={item}
                                  >
                                    {item}
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
                              {filtersData?.seriesData?.map((item) => (
                                  <Dropdown.Item
                                    as="button"
                                    onClick={() => setSelectedSeries(item)}
                                    className={`dropdownItem ${
                                      selectedSeries?.trim()?.toLowerCase() ===
                                      item?.trim()?.toLowerCase()
                                        ? "active"
                                        : ""
                                    }`}
                                    key={item}
                                  >
                                    {item}
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

              {!isLoading ? (
                matchListData.length ? (
                  <>
                    {" "}
                    <div className="row row-cols-1 row-cols-xl-2 g-3">
                      {matchListData?.map((item) => (
                        <MatchCard data={item} key={item?._id} />
                      ))}
                    </div>
                    {pageCount === currentPage || pageCount === 0 ? null : (
                      <div className="mt-3 d-flex justify-content-center">
                        {!loadMoreLoading ? (
                          <div
                            className="commonBtn"
                            style={{ maxWidth: "150px" }}
                            onClick={handleLoadMore}
                          >
                            Load more
                          </div>
                        ) : (
                          <div className="row row-cols-1 row-cols-xl-2 g-3">
                            <MatchLoaderCard />
                            <MatchLoaderCard />
                            <MatchLoaderCard />
                            <MatchLoaderCard />
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <NoDataFound />
                )
              ) : (
                <div className="row row-cols-1 row-cols-xl-2 g-3">
                  <MatchLoaderCard />
                  <MatchLoaderCard />
                  <MatchLoaderCard />
                  <MatchLoaderCard />
                </div>
              )}
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

export default Home;
