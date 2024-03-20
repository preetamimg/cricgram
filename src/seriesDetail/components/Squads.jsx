import SquadCard from 'components/squadCard'
import TopRankerCardLoader from 'components/topRankerCard/Loader';
import React, { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';
import {useParams} from 'react-router-dom';


const Squads = () => {
  const [selectedSquad, setSelectedSquad] = useState('');
  const [squads,setSquads]=useState([]);
  const[batsmen,setBatsmen]=useState([]);
  const [bowler,setBowlers] =useState([]);
  const [wicketKeeper,setWicketKeeper] =useState([]);
  const [allRounder,setAllRounder]=useState([]);

  const {cid} = useParams();


  const TeamSquads=()=>{
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/${API_ENDPOINT.SQUADS}/?token=${TOKEN}`)
    .then((res)=>{
      console.log(res)
      setSquads(res?.data?.response?.squads)
    })
    .catch((err)=>console.log(err))
  }


  const handleSquads=(item)=>{
    setSelectedSquad(item.title)
    setBatsmen(item)
    setBowlers(item)
    setWicketKeeper(item)
    setAllRounder(item)
  }


  useEffect(()=>{
TeamSquads()
  },[selectedSquad])
  
  console.log('squads',squads)
  
  
  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col">
          <div className="commonHeading mb-0">{selectedSquad}</div>
        </div>
        <div className="col-md col-6 customDropdown lightMode">
            <Dropdown>
              <Dropdown.Toggle id="team">
                <div className="innerTxt">
                  {selectedSquad ? selectedSquad : 'Select Squad'}
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  {
                    squads?.map((item,index)=> (
                      <Dropdown.Item as="button"
                        onClick={()=>{
                          handleSquads(item)
                          }} className={`dropdownItem ${selectedSquad?.trim()?.toLowerCase() === item?.title?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.tid}>
                        {item?.title}
                      </Dropdown.Item>
                    ))
                  }
              </Dropdown.Menu>
            </Dropdown>
          </div>
      </div>
      {selectedSquad ?  
      <div>
              <div className="commonHeading">WICKET KEEPER</div>
              <div className="row g-3 mb-4">
            {wicketKeeper?.players?.map((item)=> {
            console.log('<<wk>>',wicketKeeper)
              if(item.playing_role === 'wk'){
            return ( <SquadCard 
            name={item?.first_name}
            role={item?.playing_role}
            />)
          }
             })}
             
              </div>

              <div className="commonHeading">BATSMEN</div>
              <div className="row g-3 mb-4">
            {batsmen?.players?.map((item)=> {
              console.log('<<bats>>',batsmen)
              if(item.playing_role === 'bat'){
             return( <SquadCard 
            name={item?.first_name}
            role={item?.playing_role}
            />)
              }
             })}
              </div>


              <div className="commonHeading">BOWLERS</div>
              <div className="row g-3 mb-4">
            {bowler?.players?.map((item)=> {
              console.log('<<bowl>>',bowler)
              if(item?.playing_role === 'bowl'){
            return(  <SquadCard 
            name={item?.first_name}
            role={item?.playing_role}
            />)
              }else{return null}
             })}
              </div>



              <div className="commonHeading">ALL ROUNDER</div>
              <div className="row g-3 mb-4">
            {allRounder?.players?.map((item)=> {
              
  console.log('<<all>>',allRounder)
              if(item.playing_role === 'all'){
             return( <SquadCard 
            name={item?.first_name}
            role={item?.playing_role}
            />)
              }
             })}
              </div>

              </div>
              : <h4 className='text-white text-center'>Please Select Your Team</h4>}
              </>
        
     
      // {/* {
      //   batsman?.map((item)=> (
      //     <div className="col-6 col-lg-6 col-xl-4">
      //       <TopRankerCardLoader type={'squad'}/>
      //     </div>
      //   ))
      // } */}
  
      
     
    
  )
}

export default Squads