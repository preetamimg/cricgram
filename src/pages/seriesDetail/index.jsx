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
// import Archives from './components/Archives'
import ReletedMatch from './components/ReletedMatch'
import { shareUrl } from 'utils/helpers'

const SeriesDetail = () => {
  const [ searchParams,setSearchParams ] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "Home");
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
  },[activeTab]);//eslint-disable-line

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
                          <Link className='active' to={'/'}>{activeTab}</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2 d-flex justify-content-end" onClick={()=>shareUrl(`${location.pathname}?tab=${activeTab}`)} >
                      <div className="shareBtn" >
                        <img src={shareIcon} alt="" />
                      </div>
                    </div>
                    <div className="col-12 matchTeams">
                      Ranji Trophy 2024 Stats
                    </div>
                  </div>
                </div>
                
                  <div className="commonTabs mt-2 mb-2 mb-md-3">
                    <div onClick={()=>setActiveTab('Home')} className={`tab ${activeTab === 'Home' ? 'active' : ''}`}>home</div>
                    <div onClick={()=>setActiveTab('Fixtures')} className={`tab ${activeTab === 'Fixtures' ? 'active' : ''}`}>fixtures</div>
                    <div onClick={()=>setActiveTab('Standings')} className={`tab ${activeTab === 'Standings' ? 'active' : ''}`}>standings</div>
                    <div onClick={()=>setActiveTab('Stats')} className={`tab ${activeTab === 'Stats' ? 'active' : ''}`}>stats</div>
                    <div onClick={()=>setActiveTab('Teams')} className={`tab ${activeTab === 'Teams' ? 'active' : ''}`}>teams</div>
                    <div onClick={()=>setActiveTab('Squads')} className={`tab ${activeTab === 'Squads' ? 'active' : ''}`}>squads</div>
                  </div>

                  {
                    activeTab === 'Home' ? <Home /> :
                    activeTab === 'Fixtures' ? <Fixtures/> :
                    activeTab === 'Standings' ? <Standings/> : 
                    activeTab === 'Stats' ? <Stats/> :
                    activeTab === 'Teams' ? <Teams/> : 
                    activeTab === 'Squads' ? <Squads/> : "" 
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

export default SeriesDetail;