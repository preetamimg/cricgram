import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import helmetIcon from "assets/img/helmet.svg";
import playerPoster from "assets/img/playerPlaceholder.webp";
import batsmanIcon from "assets/img/batsman.svg";
import bowlerIcon from "assets/img/bowler.svg";
import allrounderIcon from "assets/img/allRounder.svg";
import NoDataFound from "components/noData";
import { getAPI } from "utils/services";
import { API_ROUTES } from "../../constants";
import { formatDate } from "utils/helpers";


const ScoreCard = ({ matchData, id }) => {
  const [data, setData] = useState([]);

  const getScoreboardData = async () => {
    try {
      const res = await getAPI(`${API_ROUTES.GET_MATCH_INFO_SCORECARD}/${id}`);

      // console.log({ res });

      setData(res.data.data.scoreCardData);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getScoreboardData();
  }, []); //eslint-disable-line

  return matchData.status_str !== "Scheduled" ? (
    <>
      <Accordion className="commonAccordian" defaultActiveKey="0">
        {data.map((inning, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <div className="d-flex align-items-center justify-content-between w-100 pe-2">
                <div>{inning?.name}</div>
                <div>{inning?.scores_full}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="table-responsive">
                <table className="table commonTable mb-0">
                  <thead>
                    <tr>
                      <th>Batter</th>
                      <th></th>
                      <th>R</th>
                      <th>B</th>
                      <th>4s</th>
                      <th>6s</th>
                      <th>SR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* -------------------------------------------------------------------------loader */}
                    {/* <tr>
                    <td colSpan={7} className="tableLoader"></td>
                  </tr> */}

                    {inning?.batsmen?.map((item) => {
                      if (item?.how_out === "Not out") {
                        return (
                          <tr>
                            <td className="text-nowrap">
                              <div className="d-flex align-items-center captain">
                                <img src={helmetIcon} alt="" />
                                {item?.name} {item?.role_str}
                              </div>
                            </td>
                            <td className="fadedTxt text-nowrap">
                              {item?.how_out}
                            </td>
                            <td>{item?.runs}</td>
                            <td>{item?.balls_faced}</td>
                            <td>{item?.fours}</td>
                            <td>{item?.sixes}</td>
                            <td>{item?.strike_rate}</td>
                          </tr>
                        );
                      }

                      return (
                        <tr>
                          <td className="text-nowrap">
                            {item?.name} {item?.role_str}
                          </td>
                          <td className="fadedTxt text-nowrap">
                            {item?.how_out}
                          </td>
                          <td>{item?.runs}</td>
                          <td>{item?.balls_faced}</td>
                          <td>{item?.fours}</td>
                          <td>{item?.sixes}</td>
                          <td>{item?.strike_rate}</td>
                        </tr>
                      );
                    })}

                    {matchData.status_str !== "Completed" ? (
                      <tr>
                        <td colSpan={7} className="extraTd">
                          <span>YET TO BAT:</span>{" "}
                          {inning?.did_not_bat?.map((item) => (
                            <>{item?.name},</>
                          ))}
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}

                    <tr>
                      <td colSpan={7} className="extraTd">
                        <span>EXTRA:</span> ( B - {inning?.extra_runs?.byes}, W
                        - {inning?.extra_runs?.wides}, NO -{" "}
                        {inning?.extra_runs?.noballs}, LB -{" "}
                        {inning?.extra_runs?.legbyes}, P -{" "}
                        {inning?.extra_runs?.penalty})
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="extraTd" colSpan={2}>
                        <span>TOTAL</span> ( {inning?.equations?.runrate} RUNS
                        PER OVER )
                      </td>
                      <td colSpan={5}>{inning?.scores_full} </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="fallOfWickets my-2">
                <div className="title">FALL OF WICKETS</div>
                <div className="value">
                  {inning?.fows?.map((item) => (
                    <>
                      <span>
                        {item?.score_at_dismissal}-{item?.number}
                      </span>{" "}
                      (<span className="activeSpan">{item?.name}</span>,{" "}
                      {item?.overs_at_dismissal}),
                    </>
                  ))}
                  {/* <span>8-3</span> (Favour Eseigbe, 2.6) */}
                </div>
              </div>

              <div className="table-responsive mt-1">
                <table className="table commonTable mb-0">
                  <thead>
                    <tr>
                      <th>Bowler</th>
                      <th>Ov</th>
                      <th>M</th>
                      <th>R</th>
                      <th>W</th>
                      <th>NB</th>
                      <th>WD</th>
                      <th>Eco</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inning?.bowlers.map((item) => (
                      <tr>
                        <td className="text-nowrap">{item?.name}</td>
                        <td>{item?.overs}</td>
                        <td>{item?.maidens}</td>
                        <td>{item?.runs_conceded}</td>
                        <td>{item?.wickets}</td>
                        <td>{item?.noballs}</td>
                        <td>{item?.wides}</td>
                        <td>{item?.econ}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <>
      <div className="commonHeading mt-3">MATCH INFO</div>
      <div className="fallOfWickets fallOfWic py-0">
        {/* add loading class here */}
        <div className="row keyValueDiv">
          <div className="col-4 value">SERIES</div>
          <div className="col-8 key value">
            {" "}
            <span>
              {matchData?.seriesData?.name ? (
                matchData.seriesData.name
              ) : (
                <i>Unavailable</i>
              )}
            </span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">DATE & TIME</div>
          <div className="col-8 key value">
            {" "}
            <span>
              {matchData.start_date ? (
                formatDate(matchData?.start_date)
              ) : (
                <i>Unavailable</i>
              )}
            </span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">TOSS</div>
          <div className="col-8 key value">
            {" "}
            <span>
              {matchData?.tosswinner_team ? (
                matchData?.tosswinner_team
              ) : (
                <i>Unavailable</i>
              )}
            </span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">VENUE</div>
          <div className="col-8 key value">
            {" "}
            <span>
              {matchData?.stadiumName ? (
                matchData.stadiumName
              ) : (
                <i>Unavailable</i>
              )}
            </span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">UMPIRES</div>
          <div className="col-8 key value">
            {" "}
            <span>
              {matchData?.umpires ? matchData?.umpires : <i>Unavailable</i>}
            </span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">MATCH REFEREE</div>
          <div className="col-8 key value">
            {" "}
            <span>
              {matchData?.referee ? matchData?.referee : <i>Unavailable</i>}
            </span>
          </div>
        </div>
      </div>
    </>

      <div className="fallOfWickets fallOfWic py-0 mt-3">
        {" "}
        {/* add loading class here */}
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">WEATHER REPORT</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>Clear Sky</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">PITCH CONDITION</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>Balanced</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">AVG 1ST INNING SCORE</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>292</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">WIN PREDICTION</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>Mumbai</span>
          </div>
        </div>
      </div>

      {/* match preview */}
      <div className="commonHeading mt-3">PREVIEW</div>
      <div className="matchDetailCard">
        {" "}
        {/* add loading class here */}
        <div className="previewTxt">
          Mumbai will take on Vidarbha in the Final of the Ranji Trophy. This
          match will be played at the iconic Wankhede Stadium in Mumbai.
          Vidarbha secured qualification to the final with a 62-run victory over
          Madhya Pradesh in the semi-final. On the other hand, Mumbai qualified
          for the final by picking up a victory over Tamil Nadu, winning the
          semi-final matchup by an innings and 70 runs, courtesy of an all-round
          performance by Shardul Thakur. Vidarbha will look to secure its third
          Ranji Trophy title while Mumbai has a chance of winning a record 42nd
          title.
        </div>
      </div>
    </>
  ) : (
    <NoDataFound />
  );
};

export default ScoreCard;
