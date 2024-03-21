import StatsTable from 'components/statsTable'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';

const battingStats = [
  {
    id: 'bat1',
    name: 'Most Runs',
    url: '/'
  },
  {
    id: 'bat2',
    name: 'Most Fours',
    url: '/'
  },
  {
    id: 'bat3',
    name: 'Most Sixs',
    url: '/'
  },
  {
    id: 'bat4',
    name: 'Most Fifties',
    url: '/'
  },
  {
    id: 'bat5',
    name: 'Most Centuries',
    url: '/'
  },
  {
    id: 'bat6',
    name: 'Most Fours (Innings)',
    url: '/'
  },
  {
    id: 'bat7',
    name: 'Most Sixs (Innings)',
    url: '/'
  },
  {
    id: 'bat8',
    name: 'Highest Individual Score',
    url: '/'
  },
  {
    id: 'bat9',
    name: 'Highest Strike Rates',
    url: '/'
  },
  {
    id: 'bat10',
    name: 'Highest Average',
    url: '/'
  },
  {
    id: 'bat11',
    name: 'Highest Strike Rates (Innings)',
    url: '/'
  },
]

const bowlingStats = [
  {
    id: 'bow1',
    name: 'Top Wicket Tackers',
    url: '/'
  },
  {
    id: 'bow2',
    name: 'Four Wickets',
    url: '/'
  },
  {
    id: 'bow3',
    name: 'Five Wickets',
    url: '/'
  },
  {
    id: 'bow4',
    name: 'Maidens',
    url: '/'
  },
  {
    id: 'bow5',
    name: 'Best Averages',
    url: '/'
  },
  {
    id: 'bow6',
    name: 'Best Bowling Figures',
    url: '/'
  },
  {
    id: 'bow7',
    name: 'Best Economy Rates',
    url: '/'
  },
  {
    id: 'bow8',
    name: 'Most runs conceded in an innings',
    url: '/'
  },
  {
    id: 'bow9',
    name: 'Best Strike Rates',
    url: '/'
  },
  {
    id: 'bow10',
    name: 'Best Economy Rates (Innings)',
    url: '/'
  },
  {
    id: 'bow11',
    name: 'Best Strike Rates (Innings)',
    url: '/'
  },
]

const teamStats = [
  {
    id: 'team1',
    name: 'Total Runs',
    url: '/'
  },
  {
    id: 'team2',
    name: 'Total Wickets',
    url: '/'
  },
  {
    id: 'team3',
    name: 'Most Fifties',
    url: '/'
  },
  {
    id: 'team4',
    name: 'Most Centuries',
    url: '/'
  }
]

const Stats = ({ show ,setShow }) => {
  const [selectedStat, setSelectedStat] = useState(battingStats?.[0]?.name)

  const {cid} = useParams();
  const [stats,setStats] = useState([]);
  const [statsType,setStatsType]=useState('');

  const handleStatsApi =()=>{
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/${API_ENDPOINT.STATS}?token=${TOKEN}`)
    .then((res)=>{
      console.log(res)
      setStats(res?.data?.response?.stat_types)
    })
    .catch((err)=>console.log(err))
  }

 

  useEffect(()=>{
    handleStatsApi()
  },[])


  return (
    <>
    {
      !show ? 
      <>
              <div className="row g-3">
        <div className="col-md-4 statsCard">
          <div className="statsHeading">Batting Stats</div>  
          <div className="statsData">
            <ul className="listUnstyled m-0 p-0">
                  <li key={stats?.[0]?.id} onClick={()=>{
                    setStatsType('batting_highest_average')
                    setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_highest_average}</div>
                    </li>
                    <li onClick={()=>{
                      setStatsType('batting_highest_strikerate')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_highest_strikerate}</div></li>
                    <li onClick={()=>{
                      setStatsType('batting_highest_strikerate_innings')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_highest_strikerate_innings}</div></li>
                    <li onClick={()=>{
                      setStatsType('batting_most_run4')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_run4}</div></li>
                    <li onClick={()=>{
                      setStatsType('batting_most_run4_innings')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_run4_innings}</div></li>
                    <li onClick={()=>{
                      setStatsType('batting_most_run6')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_run6}</div></li>
                    <li onClick={()=>{
                      setStatsType('batting_most_run6_innings')
                      setShow(true)}}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_run6_innings}</div></li>

                    <li onClick={()=>{
                      setStatsType('batting_most_run50')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_run50}</div></li>
                    <li onClick={()=>{
                      setStatsType('batting_most_run100')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_run100}</div>
                    </li>
                    <li onClick={()=>{
                      setStatsType('batting_most_runs')
                      setShow(true)
                      }}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_runs}</div></li>
                    <li onClick={()=>{
                      setStatsType('batting_most_runs_innings')
                      setShow(true)}}>
                    <div className='statsLink'>{stats?.[0]?.types?.batting_most_runs_innings}</div>
                  </li>
            </ul>
              
              
          </div>
        </div>
        
        <div className="col-md-4 statsCard">
          <div className="statsHeading">Bowling Stats</div>  
          <div className="statsData">
          <ul className="listUnstyled m-0 p-0">
                  <li key={stats?.[1]?.id} onClick={()=>{
                    setStatsType('bowling_best_averages')
                    setShow(true)
                  }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_best_averages}</div>
                    </li>
                    <li onClick={()=>{
                      setStatsType('bowling_best_bowling_figures')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_best_bowling_figures}</div></li>
                    <li onClick={()=>{
                      setStatsType('bowling_best_economy_rates')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_best_economy_rates}</div></li>
                    <li onClick={()=>{
                      setStatsType('bowling_best_economy_rates_innings')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_best_economy_rates_innings}</div></li>
                    <li onClick={()=>{
                      setStatsType('bowling_best_strike_rates')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_best_strike_rates}</div></li>
                    <li onClick={()=>{
                      setStatsType('bowling_best_strike_rates_innings')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_best_strike_rates_innings}</div></li>
                    <li onClick={()=>{
                      setStatsType('bowling_five_wickets')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_five_wickets}</div></li>

                    <li onClick={()=>{
                      setStatsType('bowling_four_wickets')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_four_wickets}</div></li>
                    <li onClick={()=>{
                      setStatsType('bowling_maidens')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_maidens}</div>
                    </li>
                    <li onClick={()=>{
                      setStatsType('bowling_most_runs_conceded_innings')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_most_runs_conceded_innings}</div></li>
                    <li onClick={()=>{
                      setStatsType('bowling_top_wicket_takers')
                      setShow(true)
                    }}>
                    <div className='statsLink'>{stats?.[1]?.types?.bowling_top_wicket_takers}</div>
                  </li>
            </ul>
          </div>
        </div>
        
        <div className="col-md-4 statsCard">
          <div className="statsHeading">Team Stats</div>  
          <div className="statsData">
            <ul className="listUnstyled m-0 p-0">
             
                    <li onClick={()=>{
                      setShow(true)
                      setStatsType('team_total_run50')
                    }}>
                     <div className='statsLink'>{stats?.[2]?.types?.team_total_run50}</div>
                     </li>
                     <li onClick={()=>{
                      setShow(show)
                      setStatsType('team_total_run100')
                     }}>
                     <div className='statsLink'>{stats?.[2]?.types?.team_total_run100}</div></li>
                     <li onClick={()=>{
                      setShow(show)
                      setStatsType('team_total_runs')
                     }}>
                     <div className='statsLink'>{stats?.[2]?.types?.team_total_runs}</div>
                     </li>
                     <li onClick={()=>{
                      setShow(show)
                      setStatsType('team_total_wickets')
                     }}>
                     <div className='statsLink'>{stats?.[2]?.types?.team_total_wickets}</div>
                  </li>
                
               
             </ul>
           </div> 
         </div> 
      </div>
      </> :
      <>
      
        
      <StatsTable
    statTypes = {statsType}
      />
      
      
      </>
    }



    </>
  )
}

export default Stats