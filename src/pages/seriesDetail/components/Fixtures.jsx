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

// const mdata = [
//   {
//     createdAt: "2024-03-15T05:49:01.865Z",
//     domestic: "0",
//     fantasy_type: "Cricket",
//     final_status: "pending",
//     format: "t20i",
//     game_state: "0",
//     game_state_str: "Default",
//     info_center: "",
//     is_deleted: false,
//     launch_status: "pending",
//     live: "",
//     match_number: "2",
//     name: "Papua New Guinea vs Nepal",
//     notify: "",
//     odds_available: "false",
//     order_status: 0,
//     playing11_status: 0,
//     pre_squad: "true",
//     real_matchkey: "74213",
//     seiresName: "Hong Kong T20I Tri-Series",
//     series: "65f2f504e8406a0aea30c3c0",
//     short_name: "PNG vs NEP",
//     squadstatus: "YES",
//     start_date: "2024-03-12 06:30:00",
//     status: "2",
//     status_note: "Nepal won by 85 runs.",
//     status_str: "Completed",
//     subtitle: "2nd Match",
//     team1Id: "65f3e14be8406a0aea3d6795",
//     team2Id: "65f3e14be8406a0aea3d678b",
//     teamAFullScore: "113/10 (16.1 ov)",
//     teamAId: "9119",
//     teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
//     teamAScore: "113/10",
//     teamBFullScore: "198/6 (20 ov)",
//     teamBId: "10814",
//     teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
//     teamBScore: "198/6",
//     teamaname: "Papua New Guinea",
//     teamashortname: "PNG",
//     teambname: "Nepal",
//     teambshortname: "NEP",
//     toss_decision: "2",
//     tosswinner_team: 9119,
//     updatedAt: "2024-03-15T05:49:01.865Z",
//     verified: "true",
//     winningTeamId: "10814",
//     _id: "65f3e14be8406a0aea3d67a9"
//   },
//   {
//     createdAt: "2024-03-15T05:49:01.865Z",
//     domestic: "0",
//     fantasy_type: "Cricket",
//     final_status: "pending",
//     format: "t20i",
//     game_state: "0",
//     game_state_str: "Default",
//     info_center: "",
//     is_deleted: false,
//     launch_status: "pending",
//     live: "",
//     match_number: "2",
//     name: "Papua New Guinea vs Nepal",
//     notify: "",
//     odds_available: "false",
//     order_status: 0,
//     playing11_status: 0,
//     pre_squad: "true",
//     real_matchkey: "74213",
//     seiresName: "Hong Kong T20I Tri-Series",
//     series: "65f2f504e8406a0aea30c3c0",
//     short_name: "PNG vs NEP",
//     squadstatus: "YES",
//     start_date: "2024-03-12 06:30:00",
//     status: "2",
//     status_note: "Nepal won by 85 runs.",
//     status_str: "Completed",
//     subtitle: "2nd Match",
//     team1Id: "65f3e14be8406a0aea3d6795",
//     team2Id: "65f3e14be8406a0aea3d678b",
//     teamAFullScore: "113/10 (16.1 ov)",
//     teamAId: "9119",
//     teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
//     teamAScore: "113/10",
//     teamBFullScore: "198/6 (20 ov)",
//     teamBId: "10814",
//     teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
//     teamBScore: "198/6",
//     teamaname: "Papua New Guinea",
//     teamashortname: "PNG",
//     teambname: "Nepal",
//     teambshortname: "NEP",
//     toss_decision: "2",
//     tosswinner_team: 9119,
//     updatedAt: "2024-03-15T05:49:01.865Z",
//     verified: "true",
//     winningTeamId: "10814",
//     _id: "65f3e14be8406a0aea3d67a9"
//   },
//   {
//     createdAt: "2024-03-15T05:49:01.865Z",
//     domestic: "0",
//     fantasy_type: "Cricket",
//     final_status: "pending",
//     format: "t20i",
//     game_state: "0",
//     game_state_str: "Default",
//     info_center: "",
//     is_deleted: false,
//     launch_status: "pending",
//     live: "",
//     match_number: "2",
//     name: "Papua New Guinea vs Nepal",
//     notify: "",
//     odds_available: "false",
//     order_status: 0,
//     playing11_status: 0,
//     pre_squad: "true",
//     real_matchkey: "74213",
//     seiresName: "Hong Kong T20I Tri-Series",
//     series: "65f2f504e8406a0aea30c3c0",
//     short_name: "PNG vs NEP",
//     squadstatus: "YES",
//     start_date: "2024-03-12 06:30:00",
//     status: "2",
//     status_note: "Nepal won by 85 runs.",
//     status_str: "Completed",
//     subtitle: "2nd Match",
//     team1Id: "65f3e14be8406a0aea3d6795",
//     team2Id: "65f3e14be8406a0aea3d678b",
//     teamAFullScore: "113/10 (16.1 ov)",
//     teamAId: "9119",
//     teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
//     teamAScore: "113/10",
//     teamBFullScore: "198/6 (20 ov)",
//     teamBId: "10814",
//     teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
//     teamBScore: "198/6",
//     teamaname: "Papua New Guinea",
//     teamashortname: "PNG",
//     teambname: "Nepal",
//     teambshortname: "NEP",
//     toss_decision: "2",
//     tosswinner_team: 9119,
//     updatedAt: "2024-03-15T05:49:01.865Z",
//     verified: "true",
//     winningTeamId: "10814",
//     _id: "65f3e14be8406a0aea3d67a9"
//   }
// ];

const Fixtures = ({ id,tab,seriesName }) => {
  const [selectedVenue, setSelectedVenue] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('')
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  

  const handleClearFilter = ()=> {
    setSelectedVenue('')
    setSelectedTeam('')
  }

  const getSeriesData =async()=>{
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.SERIES_GET_MATCH_DATA}/${id}?type=${tab}`);
      
      setData(res?.data?.data?.[0]?.matches || []);
    } catch (error) {
      console.log({ error });
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getSeriesData();
  },[id]);

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