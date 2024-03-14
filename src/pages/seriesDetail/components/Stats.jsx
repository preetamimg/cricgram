import StatsTable from 'components/statsTable'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

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

const Stats = () => {
  const [selectedStat, setSelectedStat] = useState(battingStats?.[0]?.name)
  return (
    <>
      <div className="row g-3">
        <div className="col-md-4 statsCard">
          <div className="statsHeading">Batting Stats</div>  
          <div className="statsData">
            <ul className="listUnstyled m-0 p-0">
              {
                battingStats?.map((item)=> (
                  <li key={item?.id}>
                    <Link className='statsLink' to={item?.url}>{item?.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        
        <div className="col-md-4 statsCard">
          <div className="statsHeading">Bowling Stats</div>  
          <div className="statsData">
            <ul className="listUnstyled m-0 p-0">
              {
                bowlingStats?.map((item)=> (
                  <li key={item?.id}>
                    <Link className='statsLink' to={item?.url}>{item?.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        
        <div className="col-md-4 statsCard">
          <div className="statsHeading">Team Stats</div>  
          <div className="statsData">
            <ul className="listUnstyled m-0 p-0">
              {
                teamStats?.map((item)=> (
                  <li key={item?.id}>
                    <Link className='statsLink' to={item?.url}>{item?.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      <div className="row align-items-center mt-3 mb-2 mb-sm-3">
        <div className="col-sm">
          <div className="commonHeading mb-0">RANJI TROPHY MOST RUNS</div>
        </div>
        <div className="col-md col-sm-6 customDropdown lightMode mt-2 mt-sm-0">
          <Dropdown>
            <Dropdown.Toggle id="venue">
              <div className="innerTxt">
                {selectedStat}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                  battingStats?.map((item)=> (
                    <Dropdown.Item as="button" onClick={()=>setSelectedStat(item?.name)} className={`dropdownItem ${selectedStat?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                      {item?.name}
                    </Dropdown.Item>
                  ))
                }
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <StatsTable/>
    </>
  )
}

export default Stats