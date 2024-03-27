import React, { useEffect, useState } from 'react';
import AdsComp from 'components/ads';
import CurrentSeries from 'components/currentSeries';
import shareIcon from 'assets/img/share.svg';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import Stats from './components/Stats';
import Standings from './components/Standings';
import Home from './components/Home';
import Fixtures from './components/Fixtures';
import Teams from './components/Teams';
import Squads from './components/Squads';
// import Archives from './components/Archives'
import ReletedMatch from './components/ReletedMatch';
import { shareUrl } from 'utils/helpers';
import { getAPI } from 'utils/services';
import { API_ROUTES, } from '../../constants';

const SeriesDetail = () => {
  const [ searchParams,setSearchParams ] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "Home");
  const location = useLocation()
  const { id,seriesName } = useParams();

  const [ seriesData,setSeriesData ] =useState({});
  const [ matchList,setMatchList ] = useState([]);

  const getSeriesData =async()=>{
    try {
      const res = await getAPI(`${API_ROUTES.SERIES_MATCHES}/${id}`);

      setMatchList(res?.data?.data);
      setSeriesData(res?.data?.seriesDetails)
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(()=>{
    getSeriesData();
  },[id]);


  useEffect(()=>{
    searchParams.set('tab', activeTab);
    setSearchParams(searchParams);
  },[activeTab]);//eslint-disable-line

  return (
    <>
      <ReletedMatch data={matchList} />
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
                          <Link to={'/'}>{seriesData?.category}</Link>
                        </li>
                        <li>
                          <Link to={'/'}>{seriesData?.name}</Link>
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
                      {seriesData?.name} {seriesData?.season} Stats
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
                    activeTab === 'Home' ? <Home id={id} tab={activeTab} seriesName={seriesName} /> :
                    activeTab === 'Fixtures' ? <Fixtures id={id} tab={activeTab} seriesName={seriesName} /> :
                    activeTab === 'Standings' ? <Standings id={id} tab={activeTab} seriesName={seriesName} /> : 
                    activeTab === 'Stats' ? <Stats id={id} tab={activeTab} seriesName={seriesName} /> :
                    activeTab === 'Teams' ? <Teams id={id} tab={activeTab} seriesName={seriesName} /> : 
                    activeTab === 'Squads' ? <Squads id={id} tab={activeTab} seriesName={seriesName}  /> : "" 
                  }
              </div>
              <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
                <CurrentSeries/>
                {/* <AdsComp/> */}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default SeriesDetail;