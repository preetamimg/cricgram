import React,{ useEffect, useRef, useState } from "react";
import fourImg from "assets/img/four.svg";
import sixImg from "assets/img/six.svg";
import wicketImg from "assets/img/wicket.svg";
import { formatDate } from "utils/helpers";
import { API_ROUTES } from "../../constants";
import { getAPI } from "utils/services";

const commentryOverLoading = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];


const Commentary = ({ matchData,id }) => {
   const [data,setData] =useState({});

    const [ inning1,setInning1 ] = useState({});
    const [ inning2,setInning2 ] = useState({}); 

    const playersRef = useRef({});

    const [ isLoading,setIsLoading ] = useState(false);

   const getCommentaryData = async () => {
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.GET_MATCH_INFO_COMMENTARY}/${id}`);
      
      console.log({ data:res.data.data });

      let in1Player ={};
      let in2Player ={};

      res?.data?.data?.inning1?.[0]?.players.forEach((el)=>{
          in1Player[String(el?.pid)]=el?.title
      });

      res?.data?.data?.inning2?.[0]?.players.forEach((el)=>{
        in1Player[String(el?.pid)]=el?.title
    });

    playersRef.current = { ...in1Player,in2Player }

      setInning1({...res?.data?.data?.inning1[0],commentaries:res?.data?.data?.inning1[0].commentaries.reverse()});

      setInning2({...res?.data?.data?.inning2[0],commentaries:res?.data?.data?.inning2[0].commentaries.reverse()});

      setData({  batsmen:[...res?.data?.data?.batsmen], bowlers:[ ...res?.data?.data?.bowlers],live_inning:{ ...res?.data?.data?.live_inning[0] }   });

    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    getCommentaryData();
  },[])
  

  return matchData.status_str !== "Scheduled" ? (
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
                {data?.batsmen?.map((item)=>(
                  <tr>
                  <td>{item?.name}</td>
                  <td>{item?.runs}</td>
                  <td>{item?.balls_faced}</td>
                  <td>{item?.strike_rate}</td>
                  <td>{item?.fours}</td>
                  <td>{item?.sixes}</td>
                </tr>))}
                
{/* -------------------------------------------------------------------------------------------------------------------------------- */}
                {/* loading td */}
                {/* <tr>
                  <td colSpan={6} className="tableLoader"></td>
                </tr> */}

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
                {data?.bowlers?.map((item)=>(
                  <tr>
                  <td>{item?.name}</td>
                  <td>{item?.overs}</td>
                  <td>{item?.maidens}</td>
                  <td>{item?.runs_conceded}</td>
                  <td>{item?.wickets}</td>
                  <td>{item?.econ}</td>
                </tr>
                ))}
                
                {/* --------------------------------------------------------------------------------------------------------------- */}
                {/* loading td */}
                {/* <tr>
                  <td colSpan={6} className="tableLoader"></td>
                </tr> */}


              </tbody>
            </table>
          </div>
        </div>
        <div className="col-xl-5 col-xxl-4">
          <div className="fallOfWickets h-100">
            {/* loading class here */}
            <div className="title">KEY STATS</div>
            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Partnership :</span>
              </div>
              <div className="value text-end">{data?.live_inning?.current_partnership?.runs}({data?.live_inning?.current_partnership?.balls})</div>
            </div>


            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Last 5 Overs :</span>
              </div>
              <div className="value text-end">{data?.live_inning?.last_five_overs}</div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Last Wicket :</span>
              </div>
              <div className="value text-end">
                {playersRef?.current[data?.live_inning?.last_wicket?.batsman_id]} {data?.live_inning?.last_wicket?.runs}({data?.live_inning?.last_wicket?.balls}) - {data?.live_inning?.last_wicket?.how_out}
              </div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap">
                {" "}
                <span>Toss :</span>
              </div>
              <div className="value text-end">{matchData?.tossWinningTeam}</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="fallOfWickets">
            <div className="title">FALL OF WICKETS</div>
            <div className="value">
              <span>8-1</span> (Peculiar Agboya, 1.1), <span>8-2</span> (Sarah
              Etim, 1.4), <span>8-3</span> (Favour Eseigbe, 2.6)
            </div>
          </div>
        </div>
      </div>

      <div className="commentaryTabs">
        <div className="commentaryTab all active">All</div>

        <div className="commentaryTab">
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

        <div className="commentaryTab">
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

        <div className="commentaryTab">
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

        <div className="commentaryTab">
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

        <div className="commentaryTab">
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


      {inning2?.commentaries?.length ? <div className="mt-3">
        <div className="commonHeading">
          2 <sup>nd</sup> inning
        </div>
       

        {/* --------------------------------------------------------------------------LOADER------------- */}
        {commentryOverLoading?.map((item, index) => (
          <ul className="list-unstyled m-0 p-0">
            {/* {item?.map((abc) => (
              <li className="d-flex align-items-center commentryLine loading">
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over"></div>
                  <div className="run"></div>
                </div>
                <div className="commentryTxt"></div>
              </li>
            ))} */}
            {/* over description */}
            {/* <li className="d-flex align-items-center commentryOver loading">
              <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                  <div className="smallTxt text-center"></div>
                  <div className="bigTxt text-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-lg-center"></div>
                  <div className="bigTxt d-flex gap-1 justify-content-lg-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-end text-lg-center"></div>
                  <div className="bigTxt text-end text-lg-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="smallTxt text-end text-lg-center"></div>
                  <div className="bigTxt text-end text-lg-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="smallTxt text-end text-lg-center"></div>
                  <div className="bigTxt text-end text-lg-center"></div>
                </div>
              </div>
            </li> */}
          </ul>
        ))}


        {inning1?.commentaries?.map((item) => (
          <ul key={item} className="list-unstyled m-0 p-0">
            {item.event!=="overend" ? <li className="d-flex align-items-center commentryLine">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                <div className="over">{item?.over}.{item?.ball}</div>
                <div className="run">1</div>
              </div>
              <div className="commentryTxt">
                {item?.commentary}
              </div>
            </li>: null }
            
            
            {/* over description */}
            {item.event==="overend" ? <li className="d-flex align-items-center commentryOver">
              <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                  <div className="smallTxt text-center">End Of Over</div>
                  <div className="bigTxt text-center">{item.over}</div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-lg-center">Run Scored:</div>
                  <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                    <span>{item?.runs}</span>
                    {/* <span>4</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                    <span>0</span> */}
                  </div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-end text-lg-center">
                    Score After {item.over} Overs
                  </div>
                  <div className="bigTxt text-end text-lg-center">
                    GTW Inning - {item.score}
                  </div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="smallTxt">{playersRef?.current[item?.bats[0]?.batsman_id]}</div>
                    <div className="bigTxt">5(10)</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="smallTxt">{playersRef?.current[item?.bats[1]?.batsman_id]}</div>
                    <div className="bigTxt">13(16)</div>
                  </div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="smallTxt text-end text-lg-center">
                  {playersRef?.current[item?.bowls[0]?.bowler_id]}
                  </div>
                  <div className="bigTxt text-end text-lg-center">{item?.bowls[0]?.overs}-{item?.bowls[0]?.maidens}-{item?.bowls[0]?.runs_conceded}-{item?.bowls[0]?.wickets}</div>
                </div>
              </div>
            </li>:null}
          </ul>
        ))} 
      </div> : null }

      {/* <div className="mt-3 d-flex justify-content-center">
        <div className="commonBtn" style={{ maxWidth: "150px" }}>
          Load more
        </div>
      </div> */}
      
      {inning1?.commentaries?.length ? <div className="mt-3">
        <div className="commonHeading">
          1 <sup>st</sup> inning
        </div>
       

        {/* --------------------------------------------------------------------------LOADER------------- */}
        {commentryOverLoading?.map((item, index) => (
          <ul className="list-unstyled m-0 p-0">
            {/* {item?.map((abc) => (
              <li className="d-flex align-items-center commentryLine loading">
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over"></div>
                  <div className="run"></div>
                </div>
                <div className="commentryTxt"></div>
              </li>
            ))} */}
            {/* over description */}
            {/* <li className="d-flex align-items-center commentryOver loading">
              <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                  <div className="smallTxt text-center"></div>
                  <div className="bigTxt text-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-lg-center"></div>
                  <div className="bigTxt d-flex gap-1 justify-content-lg-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-end text-lg-center"></div>
                  <div className="bigTxt text-end text-lg-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="smallTxt text-end text-lg-center"></div>
                  <div className="bigTxt text-end text-lg-center"></div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="smallTxt text-end text-lg-center"></div>
                  <div className="bigTxt text-end text-lg-center"></div>
                </div>
              </div>
            </li> */}
          </ul>
        ))}


        {inning1?.commentaries?.map((item) => (
          <ul key={item} className="list-unstyled m-0 p-0">
            {item.event!=="overend" ? <li className="d-flex align-items-center commentryLine">
              <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                <div className="over">{item?.over}.{item?.ball}</div>
                <div className="run">1</div>
              </div>
              <div className="commentryTxt">
                {item?.commentary}
              </div>
            </li>: null }
            
            
            {/* over description */}
            {item.event==="overend" ? <li className="d-flex align-items-center commentryOver">
              <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                  <div className="smallTxt text-center">End Of Over</div>
                  <div className="bigTxt text-center">{item.over}</div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-lg-center">Run Scored:</div>
                  <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                    <span>{item?.runs}</span>
                    {/* <span>4</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                    <span>0</span> */}
                  </div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                  <div className="smallTxt text-end text-lg-center">
                    Score After {item.over} Overs
                  </div>
                  <div className="bigTxt text-end text-lg-center">
                    GTW Inning - {item.score}
                  </div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="smallTxt">{playersRef?.current[item?.bats[0]?.batsman_id]}</div>
                    <div className="bigTxt">5(10)</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="smallTxt">{playersRef?.current[item?.bats[1]?.batsman_id]}</div>
                    <div className="bigTxt">13(16)</div>
                  </div>
                </div>
                <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                  <div className="smallTxt text-end text-lg-center">
                  {playersRef?.current[item?.bowls[0]?.bowler_id]}
                  </div>
                  <div className="bigTxt text-end text-lg-center">{item?.bowls[0]?.overs}-{item?.bowls[0]?.maidens}-{item?.bowls[0]?.runs_conceded}-{item?.bowls[0]?.wickets}</div>
                </div>
              </div>
            </li>:null}
          </ul>
        ))} 
      </div> : null }
    </>
  ) : (
    <>
      <div className="commonHeading mt-3">MATCH INFO</div>
      <div className="fallOfWickets fallOfWic py-0">
        {" "}
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
  );
};

export default Commentary;
