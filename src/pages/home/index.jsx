import React, { useState } from 'react'
import CurrentSeries from 'components/currentSeries'
import MatchCard from 'components/matchCard'
import filterIcon from 'assets/img/filter.svg'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import HeroBanner from 'components/heroBanner';
import AdsComp from 'components/ads';

const arr = [1,1,1,1,1,1,1]

const venue = [
  {
    id: 'venue1',
    name: 'Mission Road Ground, Mong Kok, Hong Kong'
  },
  {
    id: 'venue2',
    name: 'Judges Field, Guwahati, India'
  },
]

const team = [
  {
    id: 'team1',
    name: 'Hong Kong'
  },
  {
    id: 'team2',
    name: 'Papua New Guinea'
  },
  {
    id: 'team3',
    name: '91 Yard Club Women'
  },
  {
    id: 'team4',
    name: 'New Star Club Women'
  },
  
  {
    id: 'team1',
    name: 'Hong Kong'
  },
  {
    id: 'team2',
    name: 'Papua New Guinea'
  },
  {
    id: 'team3',
    name: '91 Yard Club Women'
  },
  {
    id: 'team4',
    name: 'New Star Club Women'
  },
]

const series = [
  {
    id: 'series1',
    name: 'Hong Kong T20I Tri-Series'
  },
  {
    id: 'series2',
    name: `Guwahati Women's T20 League`
  },
]

const Home = () => {
  const [category, setCategory] = useState('live')
  const [subCategory, setSubCategory] = useState('international')
  const [selectedVenue, setSelectedVenue] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('')
  const [selectedSeries, setSelectedSeries] = useState('')

  const handleClearFilter = ()=> {
    setSelectedVenue('')
    setSelectedTeam('')
    setSelectedSeries('')
  }
    
  return (
    <>
      <HeroBanner/>
      <div className="container-fluid my-4">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-8 col-xl-9">
                <div className="commonTabs mb-2 mb-md-3">
                  <div onClick={()=>setCategory('live')} className={`tab ${category === 'live' ? 'active' : ''}`}>Live</div>
                  <div onClick={()=>setCategory('upcoming')} className={`tab ${category === 'upcoming' ? 'active' : ''}`}>upcoming</div>
                  <div onClick={()=>setCategory('recent')} className={`tab ${category === 'recent' ? 'active' : ''}`}>recent</div>
                </div>
                
                <div className="row gx-2 gx-md-3 mb-3">
                  <div className="col filterTabCol">
                    <div className="commonTabs commonInnerTabs">
                      <div onClick={()=>setSubCategory('international')} className={`tab ${subCategory === 'international' ? 'active' : ''}`}>international</div>
                      <div onClick={()=>setSubCategory('league')} className={`tab ${subCategory === 'league' ? 'active' : ''}`}>league</div>
                      <div onClick={()=>setSubCategory('domestic')} className={`tab ${subCategory === 'domestic' ? 'active' : ''}`}>domestic</div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="filterBtn">
                    </div>
                  </div>
                  <div className="col-12 filterBtnAccordian">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <img src={filterIcon} alt="" />
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="row g-2 g-md-3">
                            <div className="col-md col-6 customDropdown">
                              <Dropdown>
                                <Dropdown.Toggle id="venue">
                                  <div className="innerTxt">
                                    {selectedVenue ? selectedVenue : 'Select Venue'}
                                  </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                      venue?.map((item)=> (
                                        <Dropdown.Item as="button" onClick={()=>setSelectedVenue(item?.name)} className={`dropdownItem ${selectedVenue?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                                          {item?.name}
                                        </Dropdown.Item>
                                      ))
                                    }
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            
                            <div className="col-md col-6 customDropdown">
                              <Dropdown>
                                <Dropdown.Toggle id="team">
                                  <div className="innerTxt">
                                    {selectedTeam ? selectedTeam : 'Select Team'}
                                  </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                      team?.map((item)=> (
                                        <Dropdown.Item as="button"  onClick={()=>setSelectedTeam(item?.name)} className={`dropdownItem ${selectedTeam?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                                          {item?.name}
                                        </Dropdown.Item>
                                      ))
                                    }
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            
                            <div className="col-md col-6 customDropdown">
                              <Dropdown>
                                <Dropdown.Toggle id="series">
                                  <div className="innerTxt">
                                    {selectedSeries ? selectedSeries : 'Select Series'}
                                  </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                      series?.map((item)=> (
                                        <Dropdown.Item as="button"  onClick={()=>setSelectedSeries(item?.name)} className={`dropdownItem ${selectedSeries?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                                          {item?.name}
                                        </Dropdown.Item>
                                      ))
                                    }
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <div className="col-md-auto col-6">
                              <div onClick={handleClearFilter} className="commonBtn">Clear</div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-xl-2 g-3">
                  {
                    arr?.map((item)=> (
                      <MatchCard/>
                    ))
                  }
                </div>
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

export default Home