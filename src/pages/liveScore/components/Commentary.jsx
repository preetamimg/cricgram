import React, { useEffect, useState } from 'react';
import fourImg from 'assets/img/four.svg';
import sixImg from 'assets/img/six.svg';
import wicketImg from 'assets/img/wicket.svg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { baseUrl } from 'pages/home';
import { token } from 'pages/home';

const commentryOvers = [1, 1, 1, 1, 1, 1, 1]
const Commentary = ({ Inning, toss }) => {

  const locate = useLocation();
  const matchId = locate?.state;
  console.log(matchId);


  const [commentary, setCommentary] = useState([]);
  const [Innings, setInnings] = useState([]);
  const [keyStats, setKeyStats] = useState([]);
  const [Fows,setFows] = useState([]);
  const [InningCommentry,setInningCommentry] = useState(1);
  const [latestInning,setLatestInnning]=useState(0)

  const handleLiveApi=()=>{
    axios.get(`${baseUrl}/v2/matches/${matchId}/live?token=${token}`)
    .then((res) => {
      console.log('<<<oopppoos>>>>', res?.data?.response)
      setInnings( res?.data?.response)
      setKeyStats( res?.data?.response)
    })
    .catch((err) => console.log(err))
  }


  const handleScoreCardApi=()=>{
    axios.get(`${baseUrl}/v2/matches/${matchId}/scorecard?token=${token}`)
    .then((res)=>{
      console.log(res?.data?.response)
      setLatestInnning(res?.data?.response?.latest_inning_number)
      setFows(res?.data?.response?.innings)
      // setInningCommentry(res?.data?.response?.latest_inning_number)
    })
    .catch((err)=>console.log(err))
  }


  const handleCommentryApi=()=>{
    axios.get(`${baseUrl}/v2/matches/${matchId}/innings/${InningCommentry}/commentary?token=${token}`)
    .then((res)=>{
      console.log(res?.data?.response)
      setLatestInnning(res?.data?.response?.latest_inning_number)
      // setCommentary(res?.data?.response?.commentaries)
    // res?.data?.response?.commentaries
    console.log("res?.data?.response?.commentaries",res?.data?.response?.inning?.number)
   setCommentary(res?.data?.response?.commentaries)
      // setCommentary((a,b)=>{ return b?.res?.data?.response?.commentaries -   a?.res?.data?.response?.commentaries})
    })
    .catch((err)=>console.log(err))
  }
  useEffect(() => {
   

    handleLiveApi()
    handleCommentryApi()
    handleScoreCardApi()

      

  }, [])

  // const handleCommentry=()=>{

  //   commentary?.commentaries?.filter((four))
  // }
// fows
  console.log(commentary,{InningCommentry})
  console.log(Fows?.[0],Fows?.[1])
  console.log('<<<innninggnng',Innings)
  console.log(latestInning)
  console.log('<<<KeyStats>>>>', keyStats)
  return (
    <>

      <div className="row g-3 mb-3" >
        <div className="xol-xl-7 col-xxl-8">

          <div className="table-responsive">
            <table className='table commonTable'>
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
            <table className='table commonTable mb-0'>
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
              <div className="key value text-nowrap"> <span>Partnership :</span></div>
              <div className="value text-end">{keyStats?.live_inning?.current_partnership?.runs}({keyStats?.live_inning?.current_partnership?.balls})</div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap"> <span>Last 5 Overs :</span></div>
              <div className="value text-end">{keyStats?.live_inning?.last_five_overs}</div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap"> <span>Last Wicket :</span></div>
              <div className="value text-end">{keyStats?.live_inning?.last_wicket?.name} {keyStats?.live_inning?.last_wicket?.runs}({keyStats?.live_inning?.last_wicket?.balls}) - {keyStats?.live_inning?.last_wicket?.how_out}</div>
            </div>

            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap"> <span>Toss :</span></div>
              <div className="value text-end">{toss}</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="fallOfWickets">
            <div className="title">FALL OF WICKETS</div>
              {latestInning === 1 ?
              <>
              {!Fows?.[0] ? null :
            <div className='d-flex'>
        {Fows?.[0]?.fows?.map((fows)=>(
            <div className="value"><span>{fows?.runs}-{fows?.number}</span> ({fows?.name}, {fows?.overs_at_dismissal}),</div>
            ))}
            </div>
}
            </>
            :
          <>
            {!Fows?.[1] ? null :
            <div className='d-flex'>
        {Fows?.[1]?.fows?.map((fows)=>(
            <div className="value"><span>{fows?.runs}-{fows?.number}</span> ({fows?.name}, {fows?.overs_at_dismissal}),</div>
            ))}
            </div>   
            }
            </>
        }
          </div>
        </div>
      </div>
      <div className="commentaryTabs">
        <div className="commentaryTab all active">All</div>
        <div className="commentaryTab" onClick=''>
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>4</div>
              <div className='name'>Fours</div>
            </div>
            <div>
              <img className='image' src={fourImg} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>6</div>
              <div className='name'>Sixs</div>
            </div>
            <div>
              <img className='image' src={sixImg} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab" >
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>W</div>
              <div className='name'>Wickets</div>
            </div>
            <div>
              <img className='image' src={wicketImg} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between" onClick={()=>setInningCommentry(1)}>
            <div className="" >
              <div className='value'>1 <sup>st</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-43_a162.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between" onClick={()=>setInningCommentry(2)}>
            <div className="" >
              <div className='value'>2 <sup>nd</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-42_85a2.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="commonHeading">{InningCommentry} <sup>{InningCommentry == 1 ? 'st' : 'nd'}</sup> innings</div>
        <ul className='list-unstyled m-0 p-0'>
          {commentary?.map((item) => {
console.log(commentary)
            if (item.event === 'ball' || item.event === "wicket") {
              return (
              <li key={item?.event} className='d-flex align-items-center commentryLine'>
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over">{item?.over}.{item?.ball}</div>
                  { item.event === "wicket" ? <div className="run">W</div>:<div className="run">{item?.run}</div>}
                </div>
                <div className="commentryTxt">{item?.commentary}</div>
              </li>
              )
            }else if (item.event === "overend") {
                  
              return (
                <li key={item?.event} className='d-flex align-items-center commentryOver'>
                  <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                      <div className="smallTxt text-center">{item.commentary}</div>
                      <div className="bigTxt text-center">18</div>
                    </div>
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                      <div className="smallTxt text-lg-center">Run Scored: </div>
                      <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                        <span> {item.runs}</span>
                      </div>
                    </div>
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                      <div className="smallTxt text-end text-lg-center">Score After {item.over} Overs</div>
                      <div className="bigTxt text-end text-lg-center">GTW Inning - {item?.score}</div>
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
                      <div className="smallTxt text-end text-lg-center">Urmila Chatterjee</div>
                      <div className="bigTxt text-end text-lg-center">4-0-22-1</div>
                    </div>
                  </div>
                </li>
                )

            }

          })
          }
        </ul>
      </div>

      
    </>
  )
}

export default Commentary