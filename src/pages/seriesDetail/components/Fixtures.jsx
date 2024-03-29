import MatchCard from 'components/matchCard';
import { API_ROUTES } from '../../../constants';
import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { getAPI } from 'utils/services';
import MatchLoaderCard from 'components/matchCard/MatchLoaderCard';


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

const Fixtures = ({ id,tab,seriesName,seriesData }) => {
  const [selectedVenue, setSelectedVenue] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('')
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [ filtersData,setFiltersData ] = useState({});  

  const handleClearFilter = ()=> {
    setSelectedVenue('');
    setSelectedTeam('');
  }

  const getFixturesData =async()=>{
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.SERIES_GET_MATCH_DATA}/${id}?type=${tab}&venue=${selectedVenue}&team=${selectedTeam}`);
      
      setData(res?.data?.data?.[0]?.matches || []);

    } catch (error) {
      console.log({ error });
    }finally{
      setIsLoading(false);
    }
  }

  const getFilterData = async () => {
    try {
      const res = await getAPI(`${API_ROUTES?.SERIES_GET_MATCH_FILTER}/${id}`);
      setFiltersData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getFixturesData();
  },[id,selectedTeam,selectedVenue]);//eslint-disable-line

  
  useEffect(()=>{
    getFilterData();
  },[id]);//eslint-disable-line

  return (
    <>
    <div className="row align-items-center">
      <div className="col-md-auto commonHeading mb-2">SCHEDULE</div>
      <div className="col-md">
        <div className="row g-2 g-md-3 mb-3 justify-content-md-end">
          <div className="col-md col-6 customDropdown lightMode">
            <Dropdown>
              <Dropdown.Toggle id="venue">
                <div className="innerTxt">
                  {selectedVenue ? selectedVenue : 'Select Venue'}
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  {
                    filtersData?.venues?.map((item)=> (
                      <Dropdown.Item as="button" onClick={()=>setSelectedVenue(item)} className={`dropdownItem ${selectedVenue?.trim()?.toLowerCase() === item?.trim()?.toLowerCase() ? 'active' : ''}`} key={item}>
                        {item}
                      </Dropdown.Item>
                    ))
                  }
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
          <div className="col-md col-6 customDropdown lightMode">
            <Dropdown>
              <Dropdown.Toggle id="team">
                <div className="innerTxt">
                  {selectedTeam ? selectedTeam : 'Select Team'}
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  {
                    filtersData?.teams?.map((item)=> (
                      <Dropdown.Item as="button"  onClick={()=>setSelectedTeam(item)} className={`dropdownItem ${selectedTeam?.trim()?.toLowerCase() === item?.trim()?.toLowerCase() ? 'active' : ''}`} key={item}>
                        {item}
                      </Dropdown.Item>
                    ))
                  }
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
          <div className="col-md-auto col-12">
            <div onClick={handleClearFilter} className="commonBtn">Clear</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="row row-cols-1 row-cols-xl-2 g-3">
      {!isLoading ? 
        data?.map((item)=>(
          <MatchCard data={item}/>
        ))
      :null}
      {
        isLoading?<>
        <MatchLoaderCard />
        <MatchLoaderCard />
        <MatchLoaderCard />
        <MatchLoaderCard />
        </>
      :null}
    </div>
    </>
  )
}

export default Fixtures