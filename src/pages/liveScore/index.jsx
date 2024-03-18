import React, { useEffect, useState } from 'react';
import shareIcon from 'assets/img/share.svg';
import TimerComponent from 'components/timer/TimerComponent';
import CurrentSeries from 'components/currentSeries';
import RecentOver from 'components/recentOver';
import Commentary from './components/Commentary';
import ScoreCard from './components/ScoreCard';
import AdsComp from 'components/ads';
import axios from 'axios';
import { baseUrl } from 'pages/home';
import { token } from 'pages/home';
import {useLocation} from 'react-router-dom';
import moment from 'moment';

const LiveScorePage = () => {
  const [activeTab, setActiveTab] = useState('commentary');
  const [MatchInfo,setMatchInfo]=useState({});
  const [InningNumber,setInningNumber] = useState(1);
  const [liveScore,setLiveScore]= useState({});


  const locate = useLocation();
  const matchId=  locate?.state;
  console.log(matchId);

  useEffect(()=>{
    axios.get(`${baseUrl}/v2/matches/${matchId}/info?token=${token}`)
    .then((res)=>{
      console.log(res?.data?.response)
      setMatchInfo(res?.data?.response)
      setInningNumber(res?.data?.response?.latest_inning_number)
    })
    .catch((err)=> console.log(err))

    axios.get(`${baseUrl}/v2/matches/${74222}/live?token=${token}`)
    .then((res)=>{
      // setMatchInfo(res?.data?.response)
      setInningNumber(res?.data?.response?.latest_inning_number)
      setLiveScore(res?.data?.response)
      console.log('<<<>>>>',res?.data?.response)
      })
    .catch((err)=> console.log(err))
    
  },[])
  

console.log('<<<MatchINfo>>>>',MatchInfo)
console.log('<<<InningNumber>>>>',InningNumber)
console.log('<<<LIveScore>>>>',liveScore)

  return (
    <>
    <div className="container-fluid my-4">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="matchDetailCard">
                <div className="row align-items-start">
                  <div className="col-10 matchTeams">
                    {MatchInfo.title}
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <div className="shareBtn">
                      <img src={shareIcon} alt="" />
                    </div>
                  </div>
                  <div className="col-12 matchDes">
                    <span className='urlLink'>{MatchInfo?.competition?.abbr}, {MatchInfo?.competition?.season}</span>| {moment(MatchInfo?.competition?.dateend).format('MMMM Do YYYY')}| {MatchInfo?.venue?.name},{MatchInfo?.venue?.location}
                  </div>
                </div>
              </div>
              {/* timer for upcoming details */}
              {/* <div className="matchDetailCard mt-2">
                <div className="row align-items-center">
                  <div className="col-12 py-4">
                    <div className="startTxt">Match Starts In</div>
                    <TimerComponent targetTime={"2024-03-18T10:50:25.844Z"}/>
                  </div>
                </div>
              </div> */}
              <div className="matchDetailCard mt-2">
                <div className="row align-items-center">
                  <div className="col-12 teamAndMatchs">
                    <div className="row mb-2">
                      <div className="col d-flex align-items-center gap-2 gap-md-3 overflow-hidden">
                        <div className="mStatus">
                         {liveScore?.status_str} {MatchInfo.live}
                        </div>
                        <div className="whoPlaying">{MatchInfo?.result}</div>
                      </div>
                      <div className="col-auto d-none d-md-block">
                        <div className="runRate">Current Run Rate : {liveScore?.live_score?.runrate}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 teamAndScore">
                    <table>
                      <tbody>
                        <tr>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName">
                              <img src={MatchInfo?.teama?.logo_url} alt="" />
                            </div>
                          </td>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName pe-3 pe-md-4">
                              <span>{MatchInfo?.teama?.short_name}</span>
                            </div>
                          </td>
                          <td>
                            <div className="scoreDetail nowPlaying">{MatchInfo?.teama?.scores_full}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName">
                              <img src={MatchInfo?.teamb?.logo_url} alt="" />
                            </div>
                          </td>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName pe-3 pe-md-4">
                              <span>{MatchInfo?.teamb?.short_name}</span>
                            </div>
                          </td>
                          <td>
                            <div className="scoreDetail">{MatchInfo?.teamb?.scores_full}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 mt-2 teamAndMatchs d-md-none">
                    <div className="row">
                      <div className="col-auto">
                        <div className="runRate">Current Run Rate : {liveScore?.live_score?.runrate}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RecentOver
              overs={liveScore?.commentaries}
              />
              
                <div className="commonTabs mt-2 mb-2 mb-md-3">
                  <div onClick={()=>setActiveTab('commentary')} className={`tab ${activeTab === 'commentary' ? 'active' : ''}`}>commentary</div>
                  <div onClick={()=>setActiveTab('scoreCard')} className={`tab ${activeTab === 'scoreCard' ? 'active' : ''}`}>score card</div>
                  <div onClick={()=>setActiveTab('standings')} className={`tab ${activeTab === 'standings' ? 'active' : ''}`}>standings</div>
                  <div onClick={()=>setActiveTab('overs')} className={`tab ${activeTab === 'overs' ? 'active' : ''}`}>overs</div>
                  <div onClick={()=>setActiveTab('stats')} className={`tab ${activeTab === 'stats' ? 'active' : ''}`}>stats</div>
                  <div onClick={()=>setActiveTab('result')} className={`tab ${activeTab === 'result' ? 'active' : ''}`}>result</div>
                </div>
                {
                  activeTab === 'commentary' ? <Commentary Inning={InningNumber} matchId={matchId} toss={MatchInfo?.toss?.text}/> : 
                  activeTab === 'scoreCard' ? <ScoreCard   matchId={matchId}/> : ''

                }

            </div>

            <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <CurrentSeries/>
              <AdsComp/>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default LiveScorePage