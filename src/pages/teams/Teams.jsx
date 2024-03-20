import React from "react";
import playerPoster from "assets/img/playerPlaceholder.webp";
import batsmanIcon from "assets/img/batsman.svg";
import allRounderIcon from "assets/img/allRounder.png";
import bowler from "assets/img/bowler.svg";

const players = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Teams = ({ matchData }) => {
  console.log({ matchData });
  return (
    <>
      <div className="commonHeading mt-3">PLAYING XI</div>
      <div className="fallOfWickets my-2">
        <div className="row mx-0 playerCardWrapper">
          <div className="col-6 ps-0 pe-md-4">
            <div className="title">{matchData?.teamaname}</div>
            <ul className="list-unstyled m-0 p-0">
              {matchData?.teamAPlayer?.map((item) => {
                if (item.playingstatus === 1) {
                  return (
                    <li className="playerCard">
                      <div className="playerImg">
                        <img src={playerPoster} alt="" />
                      </div>
                      <div className="playerDes">
                        <div className="playerName">{item?.player_name}</div>
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
              {matchData?.teamBPlayer?.map((item) => {
                if (item.playingstatus === 1) {
                  return (
                    <li className="playerCard reverse">
                      <div className="playerImg">
                        <img src={playerPoster} alt="" />
                      </div>
                      <div className="playerDes">
                        <div className="playerName">{item.player_name}</div>
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
              {matchData?.teamAPlayer?.map((item) => {
                if (item.playingstatus === 0) {
                  return (
                    <li className="playerCard">
                      <div className="playerImg">
                        <img src={playerPoster} alt="" />
                      </div>
                      <div className="playerDes">
                        <div className="playerName">{item?.player_name}</div>
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
              {matchData?.teamBPlayer?.map((item) => {
                if (item.playingstatus === 0) {
                  return (
                    <li className="playerCard reverse">
                      <div className="playerImg">
                        <img src={playerPoster} alt="" />
                      </div>
                      <div className="playerDes">
                        <div className="playerName">{item?.player_name}</div>
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
    </>
  );
};

export default Teams;
