import React from 'react'
import PlayerImage from 'assets/img/playerPlaceholder.webp'
import batsmanIcon from 'assets/img/batsman.svg'
import bowlerIcon from 'assets/img/bowler.svg'
import allrounderIcon from 'assets/img/allRounder.png'

const SquadCard = ({name,role}) => {

  console.log(name)
  return (
    <>
      <div className="topRankerCard">
        <div className="playerImg">
          <img src={PlayerImage} alt="" />
        </div>
        <div className="playerName">{name}</div>
        <div className="playerCategory d-flex align-items-center text-capitalize">
          {
            role === 'wk' ?
              <div className="wicketKeeper me-1">W</div>
            : <img src={role === 'bat' ? batsmanIcon : role === 'bowl' ? bowlerIcon : allrounderIcon} alt="" />
          }
          {role}
        </div>
      </div>
    </>
  )
}

export default SquadCard