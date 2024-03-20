import MatchCard from 'components/matchCard';
import React, { useEffect, useState } from 'react';
import axios from  'axios';
import {useParams} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';


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

const Fixtures = () => {
  const [selectedVenue, setSelectedVenue] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('')
  

  const [seriesMatches,setSeriesMatches]=useState([]);
  const {cid} = useParams();

  const seriesMatchesAPi =()=>{
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/${API_ENDPOINT.MATCHES}?token=${TOKEN}&per_page=10`)
    .then((res)=>{
      console.log(res?.data?.response)
      setSeriesMatches(res?.data?.response)
    })
    .catch((err)=>console.log(err))
  }


  useEffect(()=>{
    seriesMatchesAPi()
  },[])

  const handleClearFilter = ()=> {
    setSelectedVenue('')
    setSelectedTeam('')
  }


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
                    venue?.map((item)=> (
                      <Dropdown.Item as="button" onClick={()=>setSelectedVenue(item?.name)} className={`dropdownItem ${selectedVenue?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                        {item?.name}
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
                    team?.map((item)=> (
                      <Dropdown.Item as="button"  onClick={()=>setSelectedTeam(item?.name)} className={`dropdownItem ${selectedTeam?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                        {item?.name}
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
      {
        seriesMatches?.items?.map((item)=>(
          <MatchCard 
          key={item?.match_id}
          ID={item?.match_id}
          live={item?.live}
          match={item?.match_number}
          StartDate={item?.date_start}
          endDate={item?.date_endt}
          venue={item?.venue?.location}
          stadium={item?.venue?.name}
          teamALogo={item?.teama?.logo_url}
          teamAID={item?.teama?.team_id}
          teamAName={item?.teama?.name}
          TeamAscore={item?.teama?.scores_full}
          teamBLogo={item?.teamb?.logo_url}
          teamBID={item?.teamb?.team_id}
          teamBName={item?.teamb?.name}
          TeamBscore={item?.teamb?.scores_full}
          result={item?.result}
          subtitle={item?.subtitle}
          />
        ))
      }
    </div>
    </>
  )
}

export default Fixtures