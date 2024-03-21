import AdsComp from 'components/ads';
import CurrentSeries from 'components/currentSeries';
import React, { useEffect, useState } from 'react';
import shareIcon from 'assets/img/share.svg';
import { Link, useSearchParams } from 'react-router-dom';
import Stats from './components/Stats';
import Standings from './components/Standings';
import Home from './components/Home';
import Fixtures from './components/Fixtures';
import Teams from './components/Teams';
import Squads from './components/Squads';
import {RWebShare} from 'react-web-share';
import Archives from './components/Archives';
import ReletedMatch from './components/ReletedMatch';
import axios from 'axios';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, ROUTE_CONST, TOKEN } from '../constants';
import {useParams} from 'react-router-dom';

const SeriesDetail = () => {
  const [ searchParams,setSearchParams ] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "home");
  const [SeriesTitle,setSeriesTitle]= useState({});
  // const locate = useLocation();
  const [show, setShow] = useState(false);
  const {cid} = useParams();
  

  const SeriesInfoAPi=()=>{
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}?token=${TOKEN}`)
    .then((res)=>{
      console.log(res?.data?.response)
      setSeriesTitle(res.data?.response)
    })
    .catch((err)=>console.log(err))
  }


  useEffect(()=>{
    searchParams.set('tab', activeTab);
    setSearchParams(searchParams);
    SeriesInfoAPi();
  },[activeTab]);


  console.log('<<<<SeriesTitle>>>',SeriesTitle)

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
                          <Link to={ROUTE_CONST.HOME_PAGE}>Home</Link>
                        </li>
                        <li>
                          <Link to={'/'}>{SeriesTitle?.game_format}</Link>
                        </li>
                        <li>
                          <Link to={'/'}>{SeriesTitle?.title}</Link>
                        </li>
                        <li>
                          <Link className='active' to={'/'}>{activeTab}</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <div className="shareBtn">
                      <RWebShare 
                      data={{text:'Share Match Details'
                      ,url:'/',
                      title:'CRICGRAM'}}
                      >
                      <img src={shareIcon} alt="" />
                      </RWebShare>
                      </div>
                    </div>
                    <div className="col-12 matchTeams">
                    {SeriesTitle?.title}
                    </div>
                  </div>
                </div>
                
                  <div className="commonTabs mt-2 mb-2 mb-md-3">
                    <div onClick={()=>setActiveTab('home')} className={`tab ${activeTab === 'home' ? 'active' : ''}`}>Home</div>
                    <div onClick={()=>setActiveTab('fixtures')} className={`tab ${activeTab === 'fixtures' ? 'active' : ''}`}>Fixtures</div>
                    <div onClick={()=>setActiveTab('standings')} className={`tab ${activeTab === 'standings' ? 'active' : ''}`}>Standings</div>
                    <div onClick={()=>setActiveTab((prev)=>{
                     if(prev==="stats"){
                      setShow(false)
                      return 'stats'
                     }
                     return 'stats'
                      })} className={`tab ${activeTab === 'stats' ? 'active' : ''}`}>Stats</div>
                    <div onClick={()=>setActiveTab('teams')} className={`tab ${activeTab === 'teams' ? 'active' : ''}`}>Teams</div>
                    <div onClick={()=>setActiveTab('squads')} className={`tab ${activeTab === 'squads' ? 'active' : ''}`}>Squads</div>
                  </div>

                  {
                    activeTab === 'home' ? <Home/> :
                    activeTab === 'fixtures' ? <Fixtures/> :
                    activeTab === 'standings' ? <Standings/> : 
                    activeTab === 'stats' ? <Stats show={show} setShow={setShow} /> :
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