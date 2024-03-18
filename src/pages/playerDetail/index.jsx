import CurrentSeries from 'components/currentSeries';
import { RESPONSIVE_WIDTH } from 'constants';
import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useMediaQuery } from 'utils/useMediaQuery';

const data = [1,1,1,1]

const matchType = [
  {
    id: 'type1',
    name: 'All'
  },
  {
    id: 'type2',
    name: 'Test'
  },    
  {
    id: 'type3',
    name: 'ODI'
  },    
  {
    id: 'type4',
    name: 'T20'
  },
]

const PlayerDetail = () => {
  const [selectedType , setSelectedType] = useState(matchType?.[0]?.name)
  const isMdScreen = useMediaQuery(RESPONSIVE_WIDTH.MD_SCREEN)


  return (
    <>
      <div className="container-fluid">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="playerImgCard mb-1 mb-lg-3">
                <div className="pName">JOE CARTER</div>
                <div className="pTeam">
                  <div className="pImg">
                    <img src="https://www.crictracker.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fteam-placeholder.4512091e.jpg&w=40&q=75" alt="" />
                  </div>
                  New Zealand
                </div>
                <div className="playerImg">
                  <img src={'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" />
                </div>
              </div>
              {
                !isMdScreen ? <>
                  <CurrentSeries/>
                </> : ''
              }
            </div>
            <div className="col-lg-8 col-xl-9 mt-3 mt-lg-0">
              <div className="playerDetailCard">
                <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-xl-4">
                  <div className="col">
                    <div className="pTitle">Full Name</div>
                    <div className="pValue">Joe Carter</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Nationality</div>
                    <div className="pValue">New Zealand</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Other Name</div>
                    <div className="pValue">Joe Carter</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Role</div>
                    <div className="pValue">Batter</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Birth Date</div>
                    <div className="pValue">17 Dec 1992 (31y 92d)</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Birth Place</div>
                    <div className="pValue">--</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Batting Style</div>
                    <div className="pValue">Right Hand Bat</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Bowling Style</div>
                    <div className="pValue">--</div>
                  </div>
                </div>
                <div className="row playerTeams gy-3">
                  <div className="col-12">
                    <div className="commonHeading mb-0">Teams</div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="pTeam">
                      <div className="pImg">
                        <img src="https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnew-zealand_83de.png&w=40&q=75" alt="" />
                      </div>
                      <span>New Zealand A</span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="pTeam">
                      <div className="pImg">
                        <img src="https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fknight_faa6.png&w=40&q=75" alt="" />
                      </div>
                      <span>Northern Districts</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="playerPerformanceCard mt-4">
                <div className="row">
                  <div className="col-12 cardTitle">
                    BATTING PERFORMANCE
                  </div>
                </div>
                <div className="table-responsive">
                  <table className='table commonTable darkMode mb-0'>
                    <thead>
                      <tr>
                        <th>Format</th>
                        <th>M</th>
                        <th>Inns</th>
                        <th>No</th>
                        <th>R</th>
                        <th>H.S</th>
                        <th>Avg</th>
                        <th>BF</th>
                        <th>SR</th>
                        <th>100s</th>
                        <th>50s</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data?.map((item, index)=> (
                          <tr>
                            <td>T20</td>
                            <td>39</td>
                            <td>37</td>
                            <td>7</td>
                            <td>628</td>
                            <td>76</td>
                            <td>20.93</td>
                            <td>560</td>
                            <td>112.24</td>
                            <td>--</td>
                            <td>3</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="playerPerformanceCard mt-4">
                <div className="row">
                  <div className="col-12 cardTitle">
                    BOWLING PERFORMANCE
                  </div>
                </div>
                <div className="table-responsive">
                  <table className='table commonTable darkMode mb-0'>
                    <thead>
                      <tr>
                        <th>Format</th>
                        <th>M</th>
                        <th>Inns</th>
                        <th>Ovs</th>
                        <th>R</th>
                        <th>Wkts</th>
                        <th>BBI</th>
                        <th>Avg</th>
                        <th>ECN</th>
                        <th>SR</th>
                        <th>4W</th>
                        <th>5W</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data?.map((item, index)=> (
                          <tr className='text-nowrap'>
                            <td>T20</td>
                            <td>39</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="playerPerformanceCard mt-4">
                <div className="row align-items-center mb-2">
                  <div className="col cardTitle mb-0">
                    RECENT FORM (LAST 5 MATCHES)
                  </div>
                  <div className="col-xl-2 col-12 col-sm-4 col-md-4 col-lg-3 customDropdown mt-2 mt-sm-0">
                    <Dropdown>
                      <Dropdown.Toggle id="team">
                        <div className="innerTxt">
                          {selectedType}
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          {
                            matchType?.map((item)=> (
                              <Dropdown.Item as="button"  onClick={()=>setSelectedType(item?.name)} className={`dropdownItem ${selectedType?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                                {item?.name}
                              </Dropdown.Item>
                            ))
                          }
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className='table commonTable darkMode mb-0'>
                    <thead>
                      <tr>
                        <th>Match</th>
                        <th>Bat</th>
                        <th>Date</th>
                        <th>Venue</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data?.map((item, index)=> (
                          <tr>
                            <td className='text-nowrap'>ND vs AUK</td>
                            <td className='text-nowrap'>124 & 58</td>
                            <td className='text-nowrap'>8 Mar 2024</td>
                            <td>Hamilton</td>
                            <td>FIRSTCLASS</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {
                isMdScreen ? <>
                  <div className="col-12 mt-4">
                    <CurrentSeries/>
                  </div>
                </> : ''
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerDetail