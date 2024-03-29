import React, { useEffect, useState } from "react";
import playerPoster from "assets/img/playerPlaceholder.webp";
import batsmanIcon from "assets/img/batsman.svg";
import allRounderIcon from "assets/img/allRounder.png";
import bowler from "assets/img/bowler.svg";
import NoDataFound from "components/noData";
import { getAPI } from "utils/services";
import { API_ROUTES } from "../../constants";
import { useRefreshValue } from "context/refresh-value/RefreshContext";

const Teams = ({ matchData, id }) => {
  const [data, setData] = useState([]);
  const { value, initialLoad } = useRefreshValue();

  const getTeams = async () => {
    try {
      const res = await getAPI(
        `${API_ROUTES.GET_MATCH_INFO_PLAYER}/${id}`
      );
      setData(res?.data?.data?.[0]);
    } catch (error) {
      console.log({ error });
    }
  };

  const getTeamsLive = async () => {
    try {
      const res = await getAPI(
        `${API_ROUTES.GET_MATCH_INFO_PLAYER}/${id}`
      );
      setData(res?.data?.data?.[0]);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getTeams();
  }, [id]);//eslint-disable-line

  useEffect(() => {
    if (initialLoad) {
      getTeamsLive();
    }
  }, [value]);//eslint-disable-line

  console.log({ matchData });

  return (
    <>
      <div className="commonHeading mt-3">PLAYING XI</div>
      {matchData?.playing11_status === 1 ? (
        <div className="fallOfWickets my-2">
          <div className="row mx-0 playerCardWrapper">
            <div className="col-6 ps-0 pe-md-4">
              <div className="title">{matchData?.teamaname}</div>
              <ul className="list-unstyled m-0 p-0">
                {data?.teamAPlayer?.map((item) => {
                  if (item?.playingstatus === 1) {
                    return (
                      <li className="playerCard">
                        <div className="playerImg">
                          <img src={playerPoster} alt="" />
                        </div>
                        <div className="playerDes">
                          <div className="playerName">{item?.fullname}</div>
                          <div className="playerIcon">
                            {item.role === "bat" ? (
                              <img src={batsmanIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "all" ? (
                              <img src={allRounderIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "bowl" ? (
                              <img src={bowler} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "wk" ? (
                              <div className="captian">WK</div>
                            ) : (
                              ""
                            )}
                            {/* <div className="captian">C</div> */}
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
            <div className="col-6 pe-0 ps-md-4">
              <div className="title text-end">{matchData?.teambname}</div>
              <ul className="list-unstyled m-0 p-0">
                {data?.teamBPlayer?.map((item) => {
                  if (item?.playingstatus === 1) {
                    return (
                      <li className="playerCard reverse">
                        <div className="playerImg">
                          <img src={playerPoster} alt="" />
                        </div>
                        <div className="playerDes">
                          <div className="playerName">{item.fullname}</div>
                          <div className="playerIcon">
                            {item.role === "bat" ? (
                              <img src={batsmanIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "all" ? (
                              <img src={allRounderIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "bowl" ? (
                              <img src={bowler} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "wk" ? (
                              <div className="captian">WK</div>
                            ) : (
                              ""
                            )}
                            {/* <div className="captian">C</div> */}
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
            <div className="col-12 px-0">
              <div className="reserveTxt">Reserve</div>
            </div>
            <div className="col-6 ps-0 pe-md-4">
              <ul className="list-unstyled m-0 p-0">
                {data?.teamAPlayer?.map((item) => {
                  if (item?.playingstatus === 0) {
                    return (
                      <li className="playerCard">
                        <div className="playerImg">
                          <img src={playerPoster} alt="" />
                        </div>
                        <div className="playerDes">
                          <div className="playerName">{item?.fullname}</div>
                          <div className="playerIcon">
                            {item.role === "bat" ? (
                              <img src={batsmanIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "all" ? (
                              <img src={allRounderIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "bowl" ? (
                              <img src={bowler} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "wk" ? (
                              <div className="captian">WK</div>
                            ) : (
                              ""
                            )}
                            {/* <div className="captian">C</div> */}
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
            <div className="col-6 pe-0 ps-md-4">
              <ul className="list-unstyled m-0 p-0">
                {data?.teamBPlayer?.map((item) => {
                  if (item?.playingstatus === 0) {
                    return (
                      <li className="playerCard reverse">
                        <div className="playerImg">
                          <img src={playerPoster} alt="" />
                        </div>
                        <div className="playerDes">
                          <div className="playerName">{item?.fullname}</div>
                          <div className="playerIcon">
                            {item.role === "bat" ? (
                              <img src={batsmanIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "all" ? (
                              <img src={allRounderIcon} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "bowl" ? (
                              <img src={bowler} alt="" />
                            ) : (
                              ""
                            )}
                            {item.role === "wk" ? (
                              <div className="captian">WK</div>
                            ) : (
                              ""
                            )}
                            {/* <div className="captian">C</div> */}
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default Teams;
