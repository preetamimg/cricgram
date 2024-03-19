import AdsComp from 'components/ads'
import CurrentSeries from 'components/currentSeries'
import React, { useEffect, useState } from 'react'
import shareIcon from 'assets/img/share.svg'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import Stats from './components/Stats'
import Standings from './components/Standings'
import Home from './components/Home'
import Fixtures from './components/Fixtures'
import Teams from './components/Teams'
import Squads from './components/Squads'
import Archives from './components/Archives'
import ReletedMatch from './components/ReletedMatch'

const SeriesDetail = () => {
  const [ searchParams,setSearchParams ] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "home");
  const location = useLocation()

  // useEffect(()=> {
  //   if(location.search.includes('standings')) {
  //     setActiveTab('standings')
  //   }
  //   if(location.search.includes('stats')) {

  //     setActiveTab('stats')
  //   }
  // }, [location]);


  useEffect(()=>{
    searchParams.set('tab', activeTab);
    setSearchParams(searchParams);
  },[activeTab]);

  return (
    <>
      <ReletedMatch/>
      <div className="container-fluid my-4">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-8 col-xl-9">
                <div className="matchDetailCard">
                  <div className="row align-items-start">
                    <div className="col-10 matchBreadcrum">
                      <ul className="list-unstyled m-0 p-0">
                        <li>
                          <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                          <Link to={'/'}>Domestic Cricket</Link>
                        </li>
                        <li>
                          <Link to={'/'}>Ranji Trophy</Link>
                        </li>
                        <li>
                          <Link className='active' to={'/'}>Stats</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <div className="shareBtn">
                        <img src={shareIcon} alt="" />
                      </div>
                    </div>
                    <div className="col-12 matchTeams">
                      Ranji Trophy 2024 Stats
                    </div>
                  </div>
                </div>
                
                  <div className="commonTabs mt-2 mb-2 mb-md-3">
                    <div onClick={()=>setActiveTab('home')} className={`tab ${activeTab === 'home' ? 'active' : ''}`}>home</div>
                    <div onClick={()=>setActiveTab('fixtures')} className={`tab ${activeTab === 'fixtures' ? 'active' : ''}`}>fixtures</div>
                    <div onClick={()=>setActiveTab('standings')} className={`tab ${activeTab === 'standings' ? 'active' : ''}`}>standings</div>
                    <div onClick={()=>setActiveTab('stats')} className={`tab ${activeTab === 'stats' ? 'active' : ''}`}>stats</div>
                    <div onClick={()=>setActiveTab('teams')} className={`tab ${activeTab === 'teams' ? 'active' : ''}`}>teams</div>
                    <div onClick={()=>setActiveTab('squads')} className={`tab ${activeTab === 'squads' ? 'active' : ''}`}>squads</div>
                    <div onClick={()=>setActiveTab('archives')} className={`tab ${activeTab === 'archives' ? 'active' : ''}`}>archives</div>
                  </div>

                  {
                    activeTab === 'home' ? <Home/> :
                    activeTab === 'fixtures' ? <Fixtures/> :
                    activeTab === 'standings' ? <Standings/> : 
                    activeTab === 'stats' ? <Stats/> :
                    activeTab === 'teams' ? <Teams/> : 
                    activeTab === 'squads' ? <Squads/> : 
                    activeTab === 'archives' ? <Archives/> : ''
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

export default SeriesDetail