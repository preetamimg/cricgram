import React from 'react'
import shareIcon from 'assets/img/share.svg'
import TimerComponent from 'components/timer/TimerComponent'
import CurrentSeries from 'components/currentSeries'

const LiveScorePage = () => {
  return (
    <>
    <div className="container-fluid my-4">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="matchDetailCard">
                <div className="row align-items-center">
                  <div className="col-10 matchTeams">
                    Mumbai vs Vidarbha, Final - Live Cricket Score
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <div className="shareBtn">
                      <img src={shareIcon} alt="" />
                    </div>
                  </div>
                  <div className="col-12 matchDes">
                    <span className='urlLink'>Ranji Trophy, 2024</span>| 10 Mar 2024, Sun, 9:30 AM IST | Wankhede Stadium, Mumbai
                  </div>
                  {/* <div className="col-12 py-5">
                    <div className="startTxt">Match Starts In</div>
                    <TimerComponent targetTime={"2024-03-18T10:50:25.844Z"}/>
                  </div> */}
                </div>
              </div>
              <div className="matchDetailCard mt-2">
                <div className="row align-items-center">
                  <div className="col-12 py-4">
                    <div className="startTxt">Match Starts In</div>
                    <TimerComponent targetTime={"2024-03-18T10:50:25.844Z"}/>
                  </div>
                </div>
              </div>
              <div className="matchDetailCard mt-2">
                <div className="row align-items-center">
                  <div className="col-12 teamAndScore">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="flex align-items-center teamName">
                              <img src="https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fvi_eb5b.webp&w=40&q=75" alt="" />
                              <span>VID</span>
                            </div>
                          </td>
                          <td>
                            <div className="scoreDetail">105/10 (45.3 ov) & *10/0 (2 ov)</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <CurrentSeries/>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default LiveScorePage