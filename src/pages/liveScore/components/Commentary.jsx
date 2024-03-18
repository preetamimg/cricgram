import React, { useEffect, useRef, useState } from "react";
import fourImg from "assets/img/four.svg";
import sixImg from "assets/img/six.svg";
import wicketImg from "assets/img/wicket.svg";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { baseUrl } from "pages/home";
import { token } from "pages/home";

const Commentary = ({ Inning, toss }) => {
  const locate = useLocation();
  const matchId = locate?.state;
  console.log(matchId);

  const [commentary, setCommentary] = useState([]);
  const [Innings, setInnings] = useState([]);
  const [keyStats, setKeyStats] = useState([]);
  const [Fows, setFows] = useState([]);
  const [InningCommentry, setInningCommentry] = useState(1);
  const [FilterTabs, setFilterTabs] = useState("All");
  const [commentaryFilter, setCommentaryFilter] = useState([]);
  const [latestInning, setLatestInnning] = useState(0);
  const [inning1, setInning1] = useState([]);
  const [inning2, setInning2] = useState([]);
  const [FilterInning1, setFilterInning1] = useState([]);
  const [FilterInning2, setFilterInning2] = useState([]);
  
  const ref = useRef({});

  const handleLiveApi = () => {
    axios
      .get(`${baseUrl}/v2/matches/${matchId}/live?token=${token}`)
      .then((res) => {
        console.log("<<<oopppoos>>>>", res?.data?.response);
        setInnings(res?.data?.response);
        setKeyStats(res?.data?.response);
      })
      .catch((err) => console.log(err));
  };

  const handleScoreCardApi = () => {
    axios
      .get(`${baseUrl}/v2/matches/${matchId}/scorecard?token=${token}`)
      .then((res) => {
        console.log(res?.data?.response);
        setLatestInnning(res?.data?.response?.latest_inning_number);
        setFows(res?.data?.response?.innings);
      })
      .catch((err) => console.log(err));
  };
  const obj = {};


  const handleCommentryApi = () => {
    axios
      .get(
        `${baseUrl}/v2/matches/${matchId}/innings/${InningCommentry}/commentary?token=${token}`
      )
      .then((res) => {
        console.log(res?.data?.response);
        setLatestInnning(res?.data?.response?.latest_inning_number);
        console.log(
          "res?.data?.response?.commentaries",
          res?.data?.response?.inning?.number
        );
        // let over = 0
        const data = res?.data?.response?.commentaries.sort((a, b) => b.over - a.over).sort((a, b) => {
          if(b.over == a.over){
             return b.ball - a.ball 
          }
        })
        setCommentary(data);
        res?.data?.response?.inning?.batsmen?.forEach((item)=>{
          console.log('item',item)
          console.log('test',ref[item.batsman_id])
          ref[item.batsman_id]=item.name
          ref[item.runs]= item.run
          ref[item.balls]=item.balls_faced
          return ref
        })
      })
      .catch((err) => console.log(err));
  };

  const Inning1Api = () => {
    axios
      .get(
        `${baseUrl}/v2/matches/${matchId}/innings/1/commentary?token=${token}`
      )
      .then((res) => {
        console.log(res?.data?.response);
        setInning1(res?.data?.response?.commentaries);
      })
      .catch((err) => console.log(err));
  };

  const Inning2Api = () => {
    axios
      .get(
        `${baseUrl}/v2/matches/${matchId}/innings/2/commentary?token=${token}`
      )
      .then((res) => {
        console.log(res?.data?.response?.inning?.number);
        setInning2(res?.data?.response?.commentaries);
      })
      .catch((err) => console.log(err));
  };

  const handleFilterCommentary = () => {
    if (FilterTabs === "Fours") {
      const fourDatainning1 = inning1.filter((data) => data.four === true);
      const fourDatainning2 = inning2.filter((data) => data.four === true);
      console.log("<<<<four>>>>", fourDatainning1, fourDatainning2);
      // setCommentaryFilter(fourDatainning2);
      setFilterInning1(fourDatainning1);
      setFilterInning2(fourDatainning2);
    } else if (FilterTabs === "sixes") {
      const sixDatainning1 = inning1.filter((data) => data.six === true);
      const sixDatainning2 = inning2.filter((data) => data.six === true);
      setFilterInning1(sixDatainning1);
      setFilterInning2(sixDatainning2);
    } else if (FilterTabs === "wicket") {
      const wicketDatainning1 = inning1.filter(
        (data) => data.event === "wicket"
      );
      const wicketDatainning2 = inning2.filter(
        (data) => data.event === "wicket"
      );
      setFilterInning1(wicketDatainning1);
      setFilterInning2(wicketDatainning2);
    } else if (FilterTabs === "All") {
      setCommentaryFilter(commentary);
    }
  };

  useEffect(() => {
    handleFilterCommentary();
  }, [FilterTabs]);

  useEffect(() => {
    handleLiveApi();
    handleCommentryApi();
    handleScoreCardApi();
    Inning1Api();
    Inning2Api();
  }, [InningCommentry]);

  console.log("<<<<<INnning commentry---->", commentary, { InningCommentry });
  console.log("<<INNING1>>>", inning1);
  console.log("<<INNING2>>>", inning2);
  console.log('obj',obj)

  return (
    <>
      <div className="row g-3 mb-3">
        <div className="xol-xl-7 col-xxl-8">
          <div className="table-responsive">
            <table className="table commonTable">
              <thead>
                <tr>
                  <th>Batter</th>
                  <th>R</th>
                  <th>B</th>
                  <th>SR</th>
                  <th>4s</th>
                  <th>6s</th>
                </tr>
              </thead>
              <tbody>
                {Innings?.batsmen?.map((batsmen) => (
                  <tr>
                    <td>{batsmen?.name}</td>
                    <td>{batsmen?.runs}</td>
                    <td>{batsmen?.balls_faced}</td>
                    <td>{batsmen?.strike_rate}</td>
                    <td>{batsmen?.fours}</td>
                    <td>{batsmen?.sixes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <table className="table commonTable mb-0">
              <thead>
                <tr>
                  <th>Bowler</th>
                  <th>Ov</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>Eco</th>
                </tr>
              </thead>
              <tbody>
                {Innings?.bowlers?.map((bowlers) => (
                  <tr>
                    <td>{bowlers?.name}</td>
                    <td>{bowlers?.overs}</td>
                    <td>{bowlers?.maidens}</td>
                    <td>{bowlers?.runs_conceded}</td>
                    <td>{bowlers?.wickets}</td>
                    <td>{bowlers?.econ}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-xl-5 col-xxl-4">
          <div className="fallOfWickets h-100">
            <div className="title">KEY STATS</div>
            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Partnership :</span>
              </div>
              <div className="value text-end">
                {keyStats?.live_inning?.current_partnership?.runs}(
                {keyStats?.live_inning?.current_partnership?.balls})
              </div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Last 5 Overs :</span>
              </div>
              <div className="value text-end">
                {keyStats?.live_inning?.last_five_overs}
              </div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Last Wicket :</span>
              </div>
              <div className="value text-end">
                {keyStats?.live_inning?.last_wicket?.name}{" "}
                {keyStats?.live_inning?.last_wicket?.runs}(
                {keyStats?.live_inning?.last_wicket?.balls}) -{" "}
                {keyStats?.live_inning?.last_wicket?.how_out}
              </div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Toss :</span>
              </div>
              <div className="value text-end">{toss}</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="fallOfWickets">
            <div className="title">FALL OF WICKETS</div>
            {latestInning === 1 ? (
              <>
                {!Fows?.[0] ? null : (
                  <div className="d-flex">
                    {Fows?.[0]?.fows?.map((fows) => (
                      <div className="value">
                        <span>
                          {fows?.runs}-{fows?.number}
                        </span>{" "}
                        ({fows?.name}, {fows?.overs_at_dismissal}),
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {!Fows?.[1] ? null : (
                  <div className="d-flex">
                    {Fows?.[1]?.fows?.map((fows) => (
                      <div className="value">
                        <span>
                          {fows?.runs}-{fows?.number}
                        </span>{" "}
                        ({fows?.name}, {fows?.overs_at_dismissal}),
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="commentaryTabs">
        <div
          className={`commentaryTab all ${FilterTabs === "All" ? "active" : "commentaryTab"
            }`}
          onClick={() => setFilterTabs("All")}
        >
          All
        </div>
        <div
          className={`commentaryTab ${FilterTabs === "Fours" ? "active" : "commentaryTab"
            }`}
          onClick={() => {
            setFilterTabs("Fours");
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <div className="value">4</div>
              <div className="name">Fours</div>
            </div>
            <div>
              <img className="image" src={fourImg} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`commentaryTab ${FilterTabs === "sixes" ? "active" : "commentaryTab"
            }`}
          onClick={() => {
            setFilterTabs("sixes");
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <div className="value">6</div>
              <div className="name">Sixs</div>
            </div>
            <div>
              <img className="image" src={sixImg} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`commentaryTab ${FilterTabs === "wicket" ? "active" : "commentaryTab"
            }`}
          onClick={() => {
            setFilterTabs("wicket");
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <div className="value">W</div>
              <div className="name">Wickets</div>
            </div>
            <div>
              <img className="image" src={wicketImg} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`commentaryTab ${FilterTabs === "1st" ? "active" : "commentaryTab"
            }`}
          onClick={() => {
            setInningCommentry(1);
            setFilterTabs("1st");
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <div className="value">
                1 <sup>st</sup>
              </div>
              <div className="name">Innings</div>
            </div>
            <div>
              <img
                className="image"
                src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-43_a162.png&w=40&q=75`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={`commentaryTab ${FilterTabs === "2nd" ? "active" : "commentaryTab"
            }`}
          onClick={() => {
            setInningCommentry(2);
            setFilterTabs("2nd");
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <div className="value">
                2 <sup>nd</sup>
              </div>
              <div className="name">Innings</div>
            </div>
            <div>
              <img
                className="image"
                src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-42_85a2.png&w=40&q=75`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">

        <div className="commonHeading">
          {InningCommentry} <sup>{InningCommentry === 1 ? "st" : "nd"}</sup>{" "}
          innings
        </div>

        {FilterTabs === 'All' || FilterTabs === '1st' || FilterTabs === '2nd' ?
          <ul className="list-unstyled m-0 p-0">
            {commentaryFilter.length === 0 ||
              FilterTabs === "1st" || FilterTabs === "2nd"
              ? commentary?.map((item) => {
                if (item.event === "wicket") {
                  console.log("SSSSSSSSSSSSSSSS");
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryLine"
                    >
                      <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                        <div className="over">
                          {item?.over}.{item?.ball}
                        </div>
                        {item.event === "wicket" ? (
                          <div className="run">W</div>
                        ) : (
                          <div className="run">{item?.run}</div>
                        )}
                      </div>
                      <div className="commentryTxt">{item?.commentary}</div>
                    </li>
                  );
                } else if (item.event === "overend") {
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryOver"
                    >
                      <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                          <div className="smallTxt text-center">
                            {item.commentary}
                          </div>
                          <div className="bigTxt text-center">18</div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                          <div className="smallTxt text-lg-center">
                            Run Scored:{" "}
                          </div>
                          <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                            <span> {item.runs}</span>
                          </div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                          <div className="smallTxt text-end text-lg-center">
                            Score After {item.over} Overs
                          </div>
                          <div className="bigTxt text-end text-lg-center">
                            GTW Inning - {item?.score}
                          </div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="smallTxt">{ref[item?.bats?.[0]?.batsman_id]}</div>
                            <div className="bigTxt">{item?.bats?.[0]?.runs}({item?.bats?.[0]?.balls_faced})</div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="smallTxt">{ref[item?.bats?.[1]?.batsman_id]}</div>
                            <div className="bigTxt">{item?.batsmen?.[1]?.runs}({item?.bowlers?.[1]?.balls_faced})</div>
                          </div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                          <div className="smallTxt text-end text-lg-center">
                          {item?.bowls?.[1]?.runs} Urmila Chatterjee
                          </div>
                          <div className="bigTxt text-end text-lg-center">
                            4-0-22-1
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                } else if (item.event === "ball" || item.event === "wicket") {
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryLine"
                    >
                      <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                        <div className="over">
                          {item?.over}.{item?.ball}
                        </div>
                        {item.event === "wicket" ? (
                          <div className="run">W</div>
                        ) : (
                          <div
                            className={`run ${item.event === "wicket" ? "bg-danger" : "run"
                              }`}
                          >
                            {item?.run}
                          </div>
                        )}
                      </div>
                      <div className="commentryTxt">{item?.commentary}</div>
                    </li>
                  );
                }
              })
              : commentaryFilter?.map((item) => {
                if (item.event === "wicket") {
                  console.log("SSSSSSSSSSSSSSSS");
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryLine"
                    >
                      <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                        <div className="over">
                          {item?.over}.{item?.ball}
                        </div>
                        {item.event === "wicket" ? (
                          <div className="run">W</div>
                        ) : (
                          <div className="run">{item?.run}</div>
                        )}
                      </div>
                      <div className="commentryTxt">{item?.commentary}</div>
                    </li>
                  );
                } else if (item.event === "overend") {
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryOver"
                    >
                      <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                          <div className="smallTxt text-center">
                            {item.commentary}
                          </div>
                          <div className="bigTxt text-center">18</div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                          <div className="smallTxt text-lg-center">
                            Run Scored:{" "}
                          </div>
                          <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                            <span> {item.runs}</span>
                          </div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                          <div className="smallTxt text-end text-lg-center">
                            Score After {item.over} Overs
                          </div>
                          <div className="bigTxt text-end text-lg-center">
                            GTW Inning - {item?.score}
                          </div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="smallTxt">Shivani Bishnoi</div>
                            <div className="bigTxt">5(10)</div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="smallTxt">Maina Narah</div>
                            <div className="bigTxt">13(16)</div>
                          </div>
                        </div>
                        <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                          <div className="smallTxt text-end text-lg-center">
                            Urmila Chatterjee
                          </div>
                          <div className="bigTxt text-end text-lg-center">
                            4-0-22-1
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                } else if (item.six === true) {
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryLine"
                    >
                      <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                        <div className="over">
                          {item?.over}.{item?.ball}
                        </div>
                        {item.event === "wicket" ? (
                          <div className="run">W</div>
                        ) : (
                          <div className="run">{item?.run}</div>
                        )}
                      </div>
                      <div className="commentryTxt">{item?.commentary}</div>
                    </li>
                  );
                } else if (item.four === true) {
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryLine"
                    >
                      <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                        <div className="over">
                          {item?.over}.{item?.ball}
                        </div>
                        {item.event === "wicket" ? (
                          <div className="run">W</div>
                        ) : (
                          <div className="run">{item?.run}</div>
                        )}
                      </div>
                      <div className="commentryTxt">{item?.commentary}</div>
                    </li>
                  );
                } else if (item.event === "ball") {
                  return (
                    <li
                      key={item?.event_id}
                      className="d-flex align-items-center commentryLine"
                    >
                      <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                        <div className="over">
                          {item?.over}.{item?.ball}
                        </div>
                        {item.event === "wicket" ? (
                          <div className="run">W</div>
                        ) : (
                          <div
                            className={`run ${item.event === "wicket" ? "bg-danger" : "run"
                              }`}
                          >
                            {item?.run}
                          </div>
                        )}
                      </div>
                      <div className="commentryTxt">{item?.commentary}</div>
                    </li>
                  );
                }
              })}
          </ul>
          :
          <ul className="list-unstyled m-0 p-0">
            {FilterInning1.map((item) => {
              if (item.four === true) {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>);
              } else if (item.six === true) {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>);
              } else if (item.event === 'wicket') {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>);
              } else if (item.event === 'overend') {
                return (
                  <li
                    key={item?.event_id}
                    className="d-flex align-items-center commentryOver"
                  >
                    <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                        <div className="smallTxt text-center">
                          {item.commentary}
                        </div>
                        <div className="bigTxt text-center">18</div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                        <div className="smallTxt text-lg-center">
                          Run Scored:{" "}
                        </div>
                        <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                          <span> {item.runs}</span>
                        </div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                        <div className="smallTxt text-end text-lg-center">
                          Score After {item.over} Overs
                        </div>
                        <div className="bigTxt text-end text-lg-center">
                          GTW Inning - {item?.score}
                        </div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="smallTxt">Shivani Bishnoi</div>
                          <div className="bigTxt">5(10)</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="smallTxt">Maina Narah</div>
                          <div className="bigTxt">13(16)</div>
                        </div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                        <div className="smallTxt text-end text-lg-center">
                          Urmila Chatterjee
                        </div>
                        <div className="bigTxt text-end text-lg-center">
                          4-0-22-1
                        </div>
                      </div>
                    </div>
                  </li>)
              } else if (item.event === 'ball' || item.event === 'wicket') {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>)
              }
            })}
            <div className="">
              <div className="name text-white m-3">2 <sup>nd</sup>Innings</div>
            </div>
            {FilterInning2.map((item) => {
              if (item.four === true) {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>)
              } else if (item.six === true) {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>)
              } else if (item.event === 'wicket') {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>)
              } else if (item.event === 'overend') {
                return (
                  <li
                    key={item?.event_id}
                    className="d-flex align-items-center commentryOver"
                  >
                    <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                        <div className="smallTxt text-center">
                          {item.commentary}
                        </div>
                        <div className="bigTxt text-center">18</div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                        <div className="smallTxt text-lg-center">
                          Run Scored:{" "}
                        </div>
                        <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                          <span> {item.runs}</span>
                        </div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                        <div className="smallTxt text-end text-lg-center">
                          Score After {item.over} Overs
                        </div>
                        <div className="bigTxt text-end text-lg-center">
                          GTW Inning - {item?.score}
                        </div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="smallTxt">Shivani Bishnoi</div>
                          <div className="bigTxt">5(10)</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="smallTxt">Maina Narah</div>
                          <div className="bigTxt">13(16)</div>
                        </div>
                      </div>
                      <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                        <div className="smallTxt text-end text-lg-center">
                          Urmila Chatterjee
                        </div>
                        <div className="bigTxt text-end text-lg-center">
                          4-0-22-1
                        </div>
                      </div>
                    </div>
                  </li>);
              } else if (item.event === 'ball' || item.event === 'wicket') {
                return (<li
                  key={item?.event_id}
                  className="d-flex align-items-center commentryLine"
                >
                  <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                    <div className="over">
                      {item?.over}.{item?.ball}
                    </div>
                    {item.event === "wicket" ? (
                      <div className="run">W</div>
                    ) : (
                      <div className="run">{item?.run}</div>
                    )}
                  </div>
                  <div className="commentryTxt">{item?.commentary}</div>
                </li>)
              }
            })}
          </ul>
        }
      </div>
    </>
  );
};

export default Commentary;
