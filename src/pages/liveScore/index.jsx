import React, { useState } from 'react'
import shareIcon from 'assets/img/share.svg'
import TimerComponent from 'components/timer/TimerComponent'
import CurrentSeries from 'components/currentSeries'
import RecentOver from 'components/recentOver'
import Commentary from './components/Commentary'
import ScoreCard from './components/ScoreCard'
import AdsComp from 'components/ads'
import Overs from './components/Overs'
import { useNavigate } from 'react-router'

const LiveScorePage = () => {
  const [activeTab, setActiveTab] = useState('commentary')
  const navigate = useNavigate()
  return (
    <>
    <div className="container-fluid my-4">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="matchDetailCard">
                <div className="row align-items-start">
                  <div className="col-10 matchTeams">
                    Mumbai vs Vidarbha, Final - Live Cricket Score
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <div className="shareBtn">
                      <img src={shareIcon} alt="" />
                    </div>
                  </div>
                  <div className="col-12 matchDes">
                    <span onClick={()=>navigate('/series')} className='urlLink'>Ranji Trophy, 2024</span>| 10 Mar 2024, Sun, 9:30 AM IST | Wankhede Stadium, Mumbai
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
                          Live
                        </div>
                        <div className="whoPlaying">Icon Academy Women elected to bat </div>
                      </div>
                      <div className="col-auto d-none d-md-block">
                        <div className="runRate">Current Run Rate : 5.76</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 teamAndScore">
                    <table>
                      <tbody>
                        <tr>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName">
                              <img src="https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-43_a162.png&w=40&q=75" alt="" />
                            </div>
                          </td>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName pe-3 pe-md-4">
                              <span>IAW</span>
                            </div>
                          </td>
                          <td>
                            <div className="scoreDetail nowPlaying">*91/4 (13.4 ov)</div>
                          </td>
                        </tr>
                        <tr>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName">
                              <img src="https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-42_85a2.png&w=40&q=75" alt="" />
                            </div>
                          </td>
                          <td className='ps-0'>
                            <div className="flex align-items-center teamName pe-3 pe-md-4">
                              <span>gtw</span>
                            </div>
                          </td>
                          <td>
                            <div className="scoreDetail">Yet To Bat</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 mt-2 teamAndMatchs d-md-none">
                    <div className="row">
                      <div className="col-auto">
                        <div className="runRate">Current Run Rate : 5.76</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RecentOver/>
              
                <div className="commonTabs mt-2 mb-2 mb-md-3">
                  <div onClick={()=>setActiveTab('commentary')} className={`tab ${activeTab === 'commentary' ? 'active' : ''}`}>commentary</div>
                  <div onClick={()=>setActiveTab('scoreCard')} className={`tab ${activeTab === 'scoreCard' ? 'active' : ''}`}>score card</div>
                  <div onClick={()=>navigate('/series?standings')} className={`tab ${activeTab === 'standings' ? 'active' : ''}`}>standings</div>
                  <div onClick={()=>setActiveTab('overs')} className={`tab ${activeTab === 'overs' ? 'active' : ''}`}>overs</div>
                  <div onClick={()=>navigate('/series?stats')} className={`tab ${activeTab === 'stats' ? 'active' : ''}`}>stats</div>
                  <div onClick={()=>setActiveTab('result')} className={`tab ${activeTab === 'result' ? 'active' : ''}`}>result</div>
                </div>
                {
                  activeTab === 'commentary' ? <Commentary/> : 
                  activeTab === 'scoreCard' ? <ScoreCard/> : 
                  activeTab === 'overs' ? <Overs/> : ''
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