import SquadCard from 'components/squadCard'
import TopRankerCardLoader from 'components/topRankerCard/Loader';
import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const squads = [
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

const batsman = [1,1,1,1,1,1]
const bowler = [1,1,1,1]
const allRounder = [1,1]
const wicketKeeper = [1]


const Squads = () => {
  const [selectedSquad, setSelectedSquad] = useState('')
  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col">
          <div className="commonHeading mb-0">Guyana Harpy Eagels Squad</div>
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
                    squads?.map((item)=> (
                      <Dropdown.Item as="button"  onClick={()=>setSelectedSquad(item?.name)} className={`dropdownItem ${selectedSquad?.trim()?.toLowerCase() === item?.name?.trim()?.toLowerCase() ? 'active' : ''}`} key={item?.id}>
                        {item?.name}
                      </Dropdown.Item>
                    ))
                  }
              </Dropdown.Menu>
            </Dropdown>
          </div>
      </div>

      <div className="commonHeading">Batsmen</div>
      <div className="row g-3 mb-4">
        {
          batsman?.map((item)=> (
            <div className="col-6 col-lg-6 col-xl-4">
              <SquadCard category={'batsman'}/>
            </div>
          ))
        }
        {
          batsman?.map((item)=> (
            <div className="col-6 col-lg-6 col-xl-4">
              <TopRankerCardLoader type={'squad'}/>
            </div>
          ))
        }
      </div>

      <div className="commonHeading">All rounder</div>
      <div className="row g-3 mb-4">
        {
          allRounder?.map((item)=> (
            <div className="col-6 col-lg-6 col-xl-4">
              <SquadCard category={'all Rounder'}/>
            </div>
          ))
        }
      </div>

      <div className="commonHeading">wicket keeper</div>
      <div className="row g-3 mb-4">
        {
          wicketKeeper?.map((item)=> (
            <div className="col-6 col-lg-6 col-xl-4">
              <SquadCard category={'wicket keeper'}/>
            </div>
          ))
        }
      </div>

      <div className="commonHeading">Bowler</div>
      <div className="row g-3 mb-4">
        {
          bowler?.map((item)=> (
            <div className="col-6 col-lg-6 col-xl-4">
              <SquadCard category={'bowler'}/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Squads