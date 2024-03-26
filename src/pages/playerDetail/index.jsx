import React, { useEffect, useState } from 'react';
import CurrentSeries from 'components/currentSeries';
import NoDataFound from 'components/noData';
import { API_ROUTES,RESPONSIVE_WIDTH } from '../../constants';
import Dropdown from 'react-bootstrap/Dropdown';
import { getAPI } from 'utils/services';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useParams } from 'react-router-dom';
import { formatDate, formatDobWithAge } from 'utils/helpers';

const mdata = [1,1,1,1]

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
  
  const [ data,setData ] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { playerId } =useParams();


  const getMatchData = async () => {
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.SERIES_GET_MATCH_DATA_PLAYER_INFO}/${playerId}`);
      console.log({ res })

      setData(res?.data?.data);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMatchData();
  }, []); //eslint-disable-line

  return (
    <>
      <div className="container-fluid">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="playerImgCard mb-1 mb-lg-3">
                <div className="pName">{data?.fullname}</div>
                <div className="pTeam">
                  <div className="pImg">
                    <img src="https://www.crictracker.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fteam-placeholder.4512091e.jpg&w=40&q=75" alt="" />
                  </div>
                  {data?.nationality}
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
                    <div className="pValue">{data?.fullname}</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Nationality</div>
                    <div className="pValue">{data?.nationality}</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Other Name</div>
                    <div className="pValue">{data?.player_name}</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Role</div>
                    <div className="pValue">{data?.role}</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Birth Date</div>
                    <div className="pValue">{formatDobWithAge(data?.dob)}</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Birth Place</div>
                    <div className="pValue">{data?.birthplace}</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Batting Style</div>
                    <div className="pValue">{data?.battingstyle}</div>
                  </div>
                  <div className="col">
                    <div className="pTitle">Bowling Style</div>
                    <div className="pValue">{data?.bowlingstyle}</div>
                  </div>
                </div>
                {/* <div className="row playerTeams gy-3">
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
                </div> */}
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
                        Object.keys(data?.batting?.[0] || {})?.map((key)=> {
                         
                          return (
                          <tr>
                            <td>{key}</td>
                            <td>{data.batting?.[0]?.[key]?.matches ? data.batting?.[0]?.[key]?.matches : "---"}</td>
                            <td>{data.batting?.[0]?.[key]?.innings? data.batting?.[0]?.[key]?.innings :"---"}</td>
                            <td>{data.batting?.[0]?.[key]?.notout?data.batting?.[0]?.[key]?.notout:"---"}</td>
                            <td>{data.batting?.[0]?.[key]?.runs?data.batting?.[0]?.[key]?.runs:"---"}</td>
                            <td>{data.batting?.[0]?.[key]?.highest?data.batting?.[0]?.[key]?.highest:"---"}</td>
                            <td>{data.batting?.[0]?.[key]?.average?data.batting?.[0]?.[key]?.average:"---"}</td>
                            <td>{data.batting?.[0]?.[key]?.balls ? data.batting?.[0]?.[key]?.balls :"--"}</td>
                            <td>{data.batting?.[0]?.[key]?.strike?data.batting?.[0]?.[key]?.strike:"---"}</td>
                            <td>{data.batting?.[0]?.[key]?.run100?data.batting?.[0]?.[key]?.run100:"---"}</td>
                            <td>{data.batting?.[0]?.[key]?.run50?data.batting?.[0]?.[key]?.run50:"---"}</td>
                          </tr>
                        )})
                      }
                      {isLoading ? <>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      </>
                      :null}
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
                        Object.keys(data?.bowling?.[0] || {})?.map((key)=> (
                          <tr className='text-nowrap'>
                            <td>{key}</td>
                            <td>{data.bowling?.[0]?.[key]?.matches ? data.bowling?.[0]?.[key]?.matches : "--"}</td>
                            <td>{data.bowling?.[0]?.[key]?.innings? data.bowling?.[0]?.[key]?.innings :"--"}</td>
                            
                            <td>{data?.bowling?.[0]?.[key]?.overs ? data.bowling?.[0]?.[key]?.overs:"--"}</td>

                            <td>{data.bowling?.[0]?.[key]?.runs ? data.bowling?.[0]?.[key]?.runs:"--"}</td>

                            <td>{data.bowling?.[0]?.[key]?.wickets ? data.bowling?.[0]?.[key]?.wickets:"--"}</td>

                            <td>{data.bowling?.[0]?.[key]?.bestinning ? data.bowling?.[0]?.[key]?.bestinning:"--"}</td>
                            
                            <td>{data.bowling?.[0]?.[key]?.average ? data.bowling?.[0]?.[key]?.average:"--"}</td>

                            <td>{data.bowling?.[0]?.[key]?.econ ? data.bowling?.[0]?.[key]?.econ:"--"}</td>
                            
                            <td>{data.bowling?.[0]?.[key]?.strike ? data.bowling?.[0]?.[key]?.strike:"--"}</td>
                            
                            <td>{data.bowling?.[0]?.[key]?.wicket4i ? data.bowling?.[0]?.[key]?.wicket4i:"--"}</td>
                            
                            <td>{data.bowling?.[0]?.[key]?.wicket5i ? data.bowling?.[0]?.[key]?.wicket5i:"--"}</td>
                          </tr>
                        ))
                      }
                      {isLoading ? <>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      <tr>
                        <td className='tableLoader' colSpan={12}></td>
                      </tr>
                      </>
                      :null}
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
                        mdata?.map((item, index)=> (
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

export default PlayerDetail; 