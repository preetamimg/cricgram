import React, { useEffect, useState } from "react";
import shareIcon from "assets/img/share.svg";
import TimerComponent from "components/timer/TimerComponent";
import CurrentSeries from "components/currentSeries";
import RecentOver from "components/recentOver";
import Commentary from "../../pages/commentary/Commentary";
import ScoreCard from "../../pages/scoreCard/ScoreCard";
import AdsComp from "components/ads";
import Overs from "../../pages/overs/Overs";
import { useNavigate } from "react-router";
import { useLocation, useParams } from "react-router-dom";
import { API_ROUTES, ROUTE_CONST } from "../../constants";
import { getAPI } from "utils/services";
import { formatDate, shareUrl } from "utils/helpers";
import { useRefreshValue } from "context/refresh-value/RefreshContext";

const tabObject = {
  [ROUTE_CONST.LIVE_SCORE]: "commentary",
  [ROUTE_CONST.LIVE_SCORECARD]: "scoreCard",
  [ROUTE_CONST.MATCH_SQUADS]: "teams",
  [ROUTE_CONST.OVERS]: "overs",
  // [ROUTE_CONST.RESULT]:"result"
};

const MatchDetailsLayout = ({ Content }) => {
  const location = useLocation();
  const { value,initialLoad } =useRefreshValue();

  const pathName = `/${location.pathname.split("/")[1]}`;
  const [activeTab, setActiveTab] = useState(tabObject[pathName]);

  const [matchData, setMatchData] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const { id, matchName } = useParams();

  const navigate = useNavigate();

  const getMatchData = async () => {
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.GET_MATCH_INFO}/${id}`);
      
      setMatchData({...res?.data?.data?.[0],lastFiveOver:res?.data?.data?.[0]?.lastFiveOver?.reverse()});
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const getMatchDataLive = async () => {
    try {
      const res = await getAPI(`${API_ROUTES.GET_MATCH_INFO}/${id}`);
      setMatchData({...res?.data?.data?.[0],lastFiveOver:res?.data?.data?.[0]?.lastFiveOver?.reverse()});
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    setActiveTab(tabObject[pathName]);
  }, [pathName]);

  useEffect(() => {
    getMatchData();
  }, [id]); //eslint-disable-line

  useEffect(()=>{
    if(!initialLoad){
      getMatchDataLive();
    }
  },[value]);//eslint-disable-line

  return (
    <>
      <div className="container-fluid my-4">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="matchDetailCard">
                {" "}
                {/* add loading class here for loader*/}
                <div className={`row align-items-start ${isLoading ? "loading" :"" }`}>
                  <div className="col-10 matchTeams">
                    {/* Mumbai vs Vidarbha, Final - Live Cricket Score */}
                    {matchData?.name}
                  </div>
                  <div
                    className="col-2 d-flex justify-content-end"
                    onClick={() => shareUrl(location.pathname)}
                  >
                    <div className="shareBtn">
                      <img src={shareIcon} alt="" />
                    </div>
                  </div>
                  <div className="col-12 matchDes">
                    <span
                      onClick={() => navigate(`${ROUTE_CONST.CRICKET_SERIES}/${matchData?.seriesData?.series_key}/${matchData?.seriesData?.name.replaceAll(" ","-")}?tab=Home`)}
                      className="urlLink"
                    >
                      {matchData?.seriesData?.name}
                    </span>
                    | {formatDate(matchData?.start_date)} |{" "}
                    {matchData?.stadiumName}
                  </div>
                </div>
              </div>

              {/* timer for upcoming details */}
              {matchData?.start_date && matchData.status_str === "Scheduled" ? (
                <div className="matchDetailCard mt-2">
                  <div className="row align-items-center">
                    <div className="col-12 py-4">
                      <div className="startTxt">Match Starts In</div>
                      <TimerComponent targetTime={matchData?.start_date} />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* add loading class here for loader (below) */}
              {matchData.status_str !== "Scheduled" ? (
                <div className={`matchDetailCard mt-2 ${ isLoading ? "loading" : "" }`}>
                  <div className="row align-items-center">
                    <div className="col-12 teamAndMatchs">
                      <div className="row mb-2">
                        <div className="col d-flex align-items-center gap-2 gap-md-3 overflow-hidden">
                          
                          {matchData?.status_str==="Live" ? <div className="mStatus">Live</div>: "" }
                          {matchData?.status_str==="Completed" ? <div className="mStatus green">Result</div>: "" }
                          
                          <div className="whoPlaying">
                            {matchData?.seriesData?.name}
                          </div>
                        </div>
                        <div className="col-auto d-none d-md-block">
                          {/* <div className="runRate">Current Run Rate : 5.76</div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 teamAndScore">
                      <table>
                        <tbody>
                          <tr>
                            <td className="ps-0">
                              <div className="flex align-items-center teamName">
                                <div className="teamNameImg">
                                  <img
                                    src={matchData?.teamAImage}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="ps-0">
                              <div className={`flex align-items-center teamName pe-3 pe-md-4 ${matchData?.status_str==="Completed"?  (matchData?.teamAId === matchData?.winningTeamId ? "winner" :'disabled'):""}`}>
                                <span>{matchData?.teamaname}</span>
                              </div>
                            </td>
                            <td>
                              <div className="scoreDetail nowPlaying">
                                {matchData?.teamAFullScore}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <div className="flex align-items-center teamName">
                                <div className="teamNameImg">
                                  <img
                                    src={matchData?.teamBImage}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="ps-0">
                              <div className={`flex align-items-center teamName pe-3 pe-md-4 ${matchData?.status_str==="Completed"?  (matchData?.teamBId === matchData?.winningTeamId ? "winner" :'disabled'):"" }`}>
                                <span>{matchData?.teambname}</span>{}
                              </div>
                            </td>
                            <td>
                              <div className="scoreDetail">{matchData?.teamBFullScore}</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 mt-2 teamAndMatchs d-md-none">
                      <div className="row">
                        <div className="col-auto">
                          {/* <div className="runRate">Current Run Rate : 5.76</div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              
              {matchData.status_str !== "Scheduled" ? <RecentOver isLoading={isLoading} data={matchData?.lastFiveOver}  /> : ""}

              <div className="commonTabs mt-2 mb-2 mb-md-3">
                <div
                  onClick={() =>
                    navigate(`${ROUTE_CONST.LIVE_SCORE}/${id}/${matchName}`)
                  }
                  className={`tab ${
                    activeTab === "commentary" ? "active" : ""
                  }`}
                >
                  {matchData.status_str !== "Scheduled"
                    ? "Commentary"
                    : "Overview"}
                </div>
                <div
                  onClick={() =>
                    navigate(`${ROUTE_CONST.LIVE_SCORECARD}/${id}/${matchName}`)
                  }
                  className={`tab ${activeTab === "scoreCard" ? "active" : ""}`}
                >
                  Score card
                </div>
                <div
                  onClick={() =>
                    navigate(`${ROUTE_CONST.MATCH_SQUADS}/${id}/${matchName}`)
                  }
                  className={`tab ${activeTab === "teams" ? "active" : ""}`}
                >
                  Teams
                </div>
                <div
                  onClick={() =>
                    window.open(
                      `${ROUTE_CONST.CRICKET_SERIES}/${
                        matchData?.seriesData?.series_key
                      }/${matchData?.seriesData?.name.replaceAll(
                        " ",
                        "-"
                      )}?tab=Standings`,
                      "_blank"
                    )
                  }
                  className={`tab ${activeTab === "Standings" ? "active" : ""}`}
                >
                  Standings
                </div>
                <div
                  onClick={() =>
                    window.open(
                      `${ROUTE_CONST.CRICKET_SERIES}/${
                        matchData?.seriesData?.series_key
                      }/${matchData?.seriesData?.name.replaceAll(
                        " ",
                        "-"
                      )}?tab=Stats`,
                      "_blank"
                    )
                  }
                  className={`tab ${activeTab === "Stats" ? "active" : ""}`}
                >
                  Stats
                </div>
                <div
                  onClick={() =>
                    navigate(`${ROUTE_CONST.OVERS}/${id}/${matchName}`)
                  }
                  className={`tab ${activeTab === "overs" ? "active" : ""}`}
                >
                  Overs
                </div>
                {/* <div onClick={()=>setActiveTab('result')} className={`tab ${activeTab === 'result' ? 'active' : ''}`}>Result</div> */}
              </div>

              {/* Content--------------------------------------------------------------------------------> */}
              <Content matchData={matchData}  id={id} matchName={matchName}  />
              {/* Content--------------------------------------------------------------------------------> */}
            </div>

            <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <CurrentSeries />
              {/* <AdsComp/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchDetailsLayout;