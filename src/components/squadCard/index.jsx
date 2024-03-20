import React from 'react'
import PlayerImage from 'assets/img/playerPlaceholder.webp'
import batsmanIcon from 'assets/img/batsman.svg'
import bowlerIcon from 'assets/img/bowler.svg'
import allrounderIcon from 'assets/img/allRounder.png'

const SquadCard = ({ data }) => {
  const catObj={
    "wk":"Wicket Keeper",
    "bat":"Batsman",
    "bowl":"Bowler",
    "all":"All Rounder"
  }
  return (
    <>
      <div className="topRankerCard">
        <div className="playerImg">
          <img src={data?.playerLogo} alt="" />
        </div>
        <div className="playerName">{data?.name}</div>
        <div className="playerCategory d-flex align-items-center text-capitalize">
          {
            data?.role === 'wk' ?
              <div className="wicketKeeper me-1">W</div>
            : <img src={data?.role === "bat" ? batsmanIcon : data?.role === "bowl" ? bowlerIcon : allrounderIcon} alt="" />
          }
          {catObj[data?.role]}
        </div>
      </div>
    </>
  )
}

export default SquadCard