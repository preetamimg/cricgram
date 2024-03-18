import React from 'react'
import PlayerImage from 'assets/img/playerPlaceholder.webp'
import batsmanIcon from 'assets/img/batsman.svg'
import bowlerIcon from 'assets/img/bowler.svg'
import allrounderIcon from 'assets/img/allRounder.png'

const SquadCard = ({category}) => {
  return (
    <>
      <div className="topRankerCard">
        <div className="playerImg">
          <img src={PlayerImage} alt="" />
        </div>
        <div className="playerName">GEORGE MUNSEY (AE)</div>
        <div className="playerCategory d-flex align-items-center text-capitalize">
          {
            category === 'wicket keeper' ?
              <div className="wicketKeeper me-1">W</div>
            : <img src={category === 'batsman' ? batsmanIcon : category === 'bowler' ? bowlerIcon : allrounderIcon} alt="" />
          }
          {category}
        </div>
      </div>
    </>
  )
}

export default SquadCard